import React, { Component } from 'react'
import Content from './Content'

import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/profile-reducer'
import { withRouter } from 'react-router'


class ProfileContainer extends Component {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId =2;
        }
        this.props.getUserProfile(userId)
        
    }
    render() {
        return (
            <Content {...this.props} profile={this.props.profile}/>
        )
    }
}

let WithUrlDataContainerConponent = withRouter(ProfileContainer);
let mapStateToProps = (state) =>({profile: state.profilePage.profile})
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerConponent)
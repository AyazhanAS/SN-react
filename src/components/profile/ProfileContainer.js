import React, { Component } from 'react'
import Content from './Content'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profile-reducer'
import { withRouter } from 'react-router'

class ProfileContainer extends Component {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId =2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
        .then(response =>{
            this.props.setUserProfile(response.data) 
        }
        )
    }
    render() {
        return (
            <Content {...this.props} profile={this.props.profile}/>
        )
    }
}

let WithUrlDataContainerConponent = withRouter(ProfileContainer);
let mapStateToProps = (state) =>({profile: state.profilePage.profile})
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerConponent)
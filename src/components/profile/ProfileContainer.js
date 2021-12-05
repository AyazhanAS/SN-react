import React, { Component } from 'react'
import Content from './Content'

import { connect } from 'react-redux'
import { getUpdateStatus, getUserProfile, getUserStatus } from '../../redux/profile-reducer'
import { withRouter } from 'react-router'

import { compose } from 'redux';


class ProfileContainer extends Component {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId =this.props.authorizadUserId;
            if(!userId){
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId)
        
    }
    render() {
        return (
            <Content {...this.props} profile={this.props.profile} status = {this.props.status} updateStatus = {this.props.getUpdateStatus}/>
        )
    }
}




let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    status:state.profilePage.status,
    authorizadUserId:state.auth.userId,
    isAuth:state.auth.isAuth
})


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, getUpdateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)


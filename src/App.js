
import './App.css';
import Nav from './components/navbar/Nav';
import { Route, withRouter } from 'react-router';

import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAuthUserData } from './redux/auth-reducer';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import { Preloader } from './components/common/preloader/Preloader';

class App extends Component {
  componentDidMount(){
  
    this.props.initializeApp()
  }
  render() {
    if(!this.props.initialized){
      return <Preloader/>
    }
    return (
    
      <div className="App-wrapper">
         <HeaderContainer/>
         <Nav/>
         <div className="App-wrapper-var">
           <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
           <Route path="/dialogs" render={() => <DialogsContainer />}/>
           <Route path="/users" render={() => <UsersContainer/>}/>
           <Route path="/news" render={()=><News/>}/>
           <Route path="/music" render={()=><Music/>} />
           <Route path="/settings" render={()=><Settings/>} />
           <Route path="/login" render={()=><Login/>} />
         </div>
      </div>


 );
  }
}

const mapStateToProps = (state)=>({
  initialized:state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App)





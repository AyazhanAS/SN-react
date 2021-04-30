
import './App.css';
import Content from './components/profile/Content';
import Nav from './components/navbar/Nav';
import Header from "./components/header/Header"
import { Route } from 'react-router';

import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';

function App(props) {

  
  return (
    
       <div className="App-wrapper">
          <Header/>
          <Nav/>
          <div className="App-wrapper-var">
            <Route path="/profile" render={() => <Content/>}/>
            <Route path="/dialogs" render={() => <DialogsContainer />}/>
            <Route path="/users" render={() => <UsersContainer/>}/>
            <Route path="/news" render={()=><News/>}/>
            <Route path="/music" render={()=><Music/>} />
            <Route path="/settings" render={()=><Settings/>} />
          </div>
       </div>

 
  );
}

export default App;


import './App.css';
import Content from './components/profile/Content';
import Nav from './components/navbar/Nav';
import Header from "./components/header/Header"
import Dialogs from './components/dialogs/Dialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

function App() {
  return (
    <BrowserRouter>
       <div className="App-wrapper">
          <Header/>
          <Nav/>
          <div className="App-wrapper-var">
            <Route path="/profile" component={Content}/>
            <Route path="/dialogs" component={Dialogs}/>
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </div>
       </div>
    </BrowserRouter>
 
  );
}

export default App;


import './App.css';
import Content from './components/profile/Content';
import Nav from './components/navbar/Nav';
import Header from "./components/header/Header"
import Dialogs from './components/dialogs/Dialogs';

function App() {
  return (
    <div className="App-wrapper">
      <Header/>
      <Nav/>
      <div className="App-wrapper-var">
      <Content/>
      </div>
      
      {/* <Content/> */}
    </div>
  );
}

export default App;

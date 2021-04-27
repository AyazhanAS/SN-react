
import './index.css';
import store from "./redux/state"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state)=>{
  ReactDOM.render(

    <React.StrictMode>
      <BrowserRouter>
      <App appState = {store.getState()}
       dispatch ={store.dispatch.bind(store)}
       store = {store}
       />
      </BrowserRouter>
      
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
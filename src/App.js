import React ,{ useEffect, useState } from "react";
import "./App.css";
import Pages from "./Pages";
import './App.scss'
import {Provider} from "react-redux";
import store from "./Redux/Store/Index";




function App() {
  var isInstagram = navigator.userAgent.match(/instagram/i);
  if (isInstagram) {
  var head = document.querySelector('head');
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'your-file-with-instagram-fixes.css';
  head.appendChild(link);
}
  return (
    <Provider store={store}> 
      <div className="app">
        <Pages/>
      </div>
    </Provider>
  );
}

export default App;

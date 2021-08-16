import React ,{ useEffect, useState } from "react";
import "./App.css";
import Pages from "./Pages";
import './App.scss'




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
    <div className="app">
      <Pages/>
    </div>
  );
}

export default App;

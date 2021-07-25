import React ,{ useEffect, useState } from "react";
import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";



function App() {
  return (
    <div className="app">
      <Home/>
      <About/>
    </div>
  );
}

export default App;

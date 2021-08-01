import React, { useState } from "react";
import Context from "./Components/Context";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";

function Pages() {
  const [mode, setMode] = useState();

  // IF IT IS TRUE ITS DARK MODE
  // ELSE IT IS LIGHT MODE

  console.log(mode);

  return (
    <Context mode={mode}>
      <Home setMode={setMode} />
      <About />
      <Gallery/>
    </Context>
  );
}

export default Pages;
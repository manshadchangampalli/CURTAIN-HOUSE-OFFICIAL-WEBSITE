import React, { useState } from "react";
import Context from "./Components/Context";
import ChatBot from "./Components/LiveChatBot/ChatBot";
import GalleryAnimHeading from "./Components/NewGallery/Tittle/GalleryAnimHeading";
import About from "./pages/About/About";
import Contact from "./pages/Contact us/Contact";
import Footer from "./pages/Footer/Footer";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import NewGallery from "./pages/NewGallery/NewGallery";

function Pages() {
  const [mode, setMode] = useState();

  // IF IT IS TRUE ITS DARK MODE
  // ELSE IT IS LIGHT MODE


  return (
    // <Context mode={mode}>
    <>
      <Home setMode={setMode} />
      <About />
      <GalleryAnimHeading/>
      {/*  why is the new gallery means the old gallary componet design is not good or not good model */}
      <NewGallery/>
      {/* <Gallery/> */}
      <Contact/>
      <Footer/>
      <div id="cursor" style={mode? {"background":"white"}:{"background":"white"}}></div>
    
      {/* <ChatBot/> */}
    {/* </Context> */}
    </>
  );
}

export default Pages;

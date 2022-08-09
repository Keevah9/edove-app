import React, {useRef, useEffect} from "react";
import './App.css'
import Zoom from 'react-reveal/Zoom'

import { Article, Brand, CTA, NavBar, Feature } from "./components";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhateDove,
  Header, Premium
} from "./containers";

const App = () => {
  
  return (
    
      <div className="App">
        <Zoom>
          <header className="gradient__bg">
            <NavBar />
            <Header />
          </header>
          <Brand />
          <WhateDove />
          <Features />
          <Possibility />
          <Premium />
          <Blog />
        </Zoom>
        <Footer />
      </div>
    
  );
};

export default App;

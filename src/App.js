import React from "react";
import './App.css'

import { Article, Brand, CTA, NavBar, Feature } from "./components";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhateDove,
  Header,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhateDove />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;

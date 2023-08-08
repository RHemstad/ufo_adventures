import "./css/tokens.css";
import "./css/global.css";

import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";

const App = () => {
  return (
    <>
    
    <Header />
    <Content />
    <Footer />
    
    
    </>
  )
}

export default App
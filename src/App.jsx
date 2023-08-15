import "./css/tokens.css";
import "./css/global.css";

import React from 'react'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
import { CheckoutProvider } from "./components/tickets/TicketContextProvider";

const App = () => {
  return (
    <>
    <CheckoutProvider value="">
    <Header />
    <Content />
    <Footer />
    </CheckoutProvider>



    
    
    </>
  )
}

export default App
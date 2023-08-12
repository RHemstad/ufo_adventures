
import './subheader.css'
import React from 'react'

const Subheader = ({children, bigtitle, smalltitle}) => {

  return (
    <>

<div className="subheading">
  <h2>{children}</h2>
  </div>

    

    
    </>
  )
}

export default Subheader
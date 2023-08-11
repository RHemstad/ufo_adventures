
import './subheader.css'
import React from 'react'

const Subheader = ({children, bigtitle, smalltitle}) => {

  return (
    <>

<div className="subheading">
  <h5>{children}</h5>
  <h2>{children}</h2>
  </div>

    

    
    </>
  )
}

export default Subheader
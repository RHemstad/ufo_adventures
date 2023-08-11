import './packingItems.css';
import React from 'react'

const PackingItems = ({id, name, description}) => {
  return (
    <>
      
    <ul class="packing-item">
        <li><span>{id}</span> 
        <div>
        <h4 className="item-name">{name}:</h4> 
        <div>{description}</div>
        </div>
        
        
        </li>

    </ul>



    
</>
  )
}

export default PackingItems
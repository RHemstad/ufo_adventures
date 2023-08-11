
import './packingChecklist.css';
import packingData from '../../data/packing.json';
import React from 'react'
import PackingItems from './PackingItems.jsx';
import Subheader from '../subheader/Subheader.jsx';

const PackingChecklist = () => {



  return (
    <>
    
    <Subheader bigtitle="yo" smalltitle='Uep'>Subheader is failing here</Subheader>
    
    <h3>Packing Checklist</h3>


    <section className="packing-checklist">

    {packingData.map((item) => (
          <PackingItems
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
          />
        ))}

    </section>
        
        
        
        
        </>
  )
}

export default PackingChecklist
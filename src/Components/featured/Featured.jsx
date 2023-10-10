import React from 'react'
import "./Featured.scss"
import img2 from "../../images/Poster.png"


export default function Featured({type}) {
  return (
    <div className='featured'>
        
        <img
        src={img2}
        alt="feature-img-1"
        />

<div className="info">
    
       <span className="desc">
        <h1>Janet Jackson</h1>
      Step into a world of cinematic magic with our Movie Section! Immerse yourself in captivating stories, breathtaking visuals, and unforgettable performances. Explore a galaxy of entertainment for an unforgettable journey through the silver screen
        <div className="button">
            <button className="play">
                <span>Watch</span>
            </button>
            
        </div>
       </span>
</div>
        
      
    </div>
  )
}

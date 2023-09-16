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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est adipisci eum sapiente, eos nisi natus optio mollitia suscipit ab earum perspiciatis fuga repudiandae ad at? Ea quae voluptates cum!
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

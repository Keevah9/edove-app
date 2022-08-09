import React from 'react'
import './cta.css'
import Fade from 'react-reveal/Fade'
const CTA = ({image, title,text, sub, span}) => {
  
  return (
    <section className=' edove__cta-section'>
      <div className='edove__cta-container'>
        <div className='edove__cta-container-content'>
          <span>{span}</span>
          <h2>{title}</h2>
          <h3 style={{color:'#f99a67'}} >{sub}</h3>
          <p>
            {text}
          </p>
        </div>
        <div className='edove__cta-container-image '>
          <Fade left>
            <img 
           src={image}
           />
          </Fade>
           
        </div>
      </div>
      <div>
        
      </div>
    </section>
  )
}

export default CTA
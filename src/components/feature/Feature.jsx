import React from 'react'
import './feature.css'

const Feature = ({text,title, span}) => {
  return (
    <div className='edove__features-container_features'>
      <div className='edove__features-container_feature'>
        <div></div>
        <span style={{textAlign:'center', color:"gray" }}>{span}</span>
        <h2 style={{textAlign: 'center', textTransform: 'capitalize' }}
        >{title}</h2>
      </div>
      <div className='edove__features-container_feature-text'>
        <p>{text}</p>

      </div>
    </div>
  )
}

export default Feature
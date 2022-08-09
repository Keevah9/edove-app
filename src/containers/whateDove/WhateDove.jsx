import React from 'react'
import { Feature } from '../../components'
import './whateDove.css'
import Zoom from 'react-reveal/Zoom'
// ctrl space to import directly from component

const WhateDove = () => {
  return (
    <section className='gpt3__whatedove section__padding card' id='brand'>
      
      <h2 className='edove__whatedove-section-head'>ABOUT</h2>


      <div className='gpt3__whatedove-heading'>
        <Feature span= 'Get To Know Us'  text=''/>    
      <div className='gpt3__whatedove-features'>
            
      
            <h1 className='gradient__text'>
                  A simple, stable way to way to Earn
            </h1>
            <a href='#whateDove' className='btn'>Explore</a>
      </div>     
      </div>

      <div className='gpt3__whatedove-feature gpt3__whatedove-container'>
            <Zoom>
                  <div className="firstFeature features">
                  <Feature title='growth' text='lorem20The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.'/>
                  <div></div>
            </div>
            </Zoom>
            
            <Zoom>
                  <div className="secondFeature features">
                  <Feature className="secondFeature" title='Community' text='lorem20The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.' />
            </div>
            </Zoom>
      
            <Zoom>
                  <div className="thirdFeature features">
                  <Feature  title='accessibility' text='lorem20The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.'/>
            </div>
            </Zoom>
            
            
            
      </div>
    </section>
  )
}

export default WhateDove
import React from 'react'
import { Feature } from '../../components'
import './whateDove.css'
// ctrl space to import directly from component

const WhateDove = () => {
  return (
    <section className='gpt3__whatedove section__margin' id='whateDove'>
      <div className='gpt3__whatedove-features'>
<Feature />
      </div>
      <div className='gpt3__whatedove-heading'>
<h1 className='gradient__text'>
  A simple, stable way to way to Earn
</h1>
      </div>
      <div className='gpt3__whatedove-features'>
<Feature />
      </div>
      <div className='gpt3__whatedove-features'>
<Feature />
      </div>
      <div className='gpt3__whatedove-features'>
<Feature />
      </div>
    </section>
  )
}

export default WhateDove
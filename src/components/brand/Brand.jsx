import React from 'react'
import './brand.css'
import { phone, coin, coinhand, dump, chart } from './import'

const Brand = () => {
  return (
      <section className='gpt3__brand section__padding' id='brand'>
<h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, aliquid!</h2>
<div className='gpt3__brand-input'>
  <img className='gpt3__brand-input-img'
  src={coin}
  alt='edove logo'
  />
  <input type="text" placeholder=''/>
  <img className='gpt3__brand-input-img1'
  src={coinhand}
  alt ="trade link"
  />
</div>
<div className='gpt3__brand-socials'>
<img
  src={coin}
  alt='twitter'
  />
  <img
  src={coinhand}
  alt='telegram'
  />
  <img
  src={phone}
  alt='medium'
  />
</div>

      </section>
  )
}

export default Brand
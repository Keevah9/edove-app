import React from 'react'
import './brand.css'
import {FaMedium, FaTwitter, FaTelegram} from 'react-icons/fa'
import { logo, diffusion } from './import'

const Brand = () => {
  return (
      <section className='gpt3__brand section__padding'>
<h2>We will never know what kind of setup market will present to you; but our objective would be to find an opportunity where risk-reward ratio is best.</h2>
<div className='gpt3__brand-input' id='trade'>
  <img className='gpt3__brand-input-img'
  src={logo}
  alt='edove logo'
  />
  <input type="text" placeholder='0x88032493fd18279339147fbdafe0e8e4ba53452f'/>
  <img className='gpt3__brand-input-img1'
  src={diffusion}
  alt ="trade link"
  />
</div>
<div className='gpt3__brand-socials'>
<FaTwitter size={30}/>
  <FaTelegram size={30}/>
  <FaMedium size={30}/>
</div>

      </section>
  )
}

export default Brand
import React from 'react'
import './footer.css'
import logo from "../../assets/eDove2-1.png";
const Footer = () => {
  return (
   <footer className='section__padding edove__footer-section'>
    <div className='edove__footer-container'>
      <div className='gpt3__navbar-links_logo'>
        <img 
        src={logo}
        alt='edove logo'/>
        <p>The strenght in community</p>
      </div>
      <div className='links'>
        <div className='edove__footer-links'>
        <h4>Links</h4>
        <p><a href = '#trade'> Trade </a> </p>
        <p><a href = '#home'> Home </a> </p>
        <p><a href = '#brand'> About </a> </p>
        <p><a href = '#whateDove'> Features </a> </p>
        <p><a href = '#features'> Possibilities </a> </p>
        <p><a href = '#roadmap'> Roadmap </a> </p>
      </div>
      <div className='edove__footer-company'>
        <h4>Company</h4>
        <p><a href = '#'> News</a> </p>
        <p><a href = '#'> Privacy Policy</a> </p>
        <p><a href = '#'> Terms </a> </p>
      </div>
      </div>
      
    </div>
  </footer>
  )
}

export default Footer
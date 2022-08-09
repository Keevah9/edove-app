import React , {useState} from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import logo1 from '../../assets/eDove3-1.png'
import logo2 from '../../assets/eDove2-1.png'

const Menu =()=>{
return(
  <>
  <p><a href="#home">Home</a></p>
<p><a href="#brand">About</a></p>
<p><a href="#whateDove">Liquidity</a></p>
<p><a href="#possibility">Tokenomics</a></p>
<p><a href="#features">Roadmap</a></p>
<p><a href="#community">Community</a></p>
  </>
)
}
const NavBar = () => {
const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img 
          src={logo2}
          alt="logo"
          />
        </div>
        <div className='gpt3__navbar-links_container'>
<Menu />


        </div>
        
      </div>
      <div className='gpt3__navbar-button'>
<p ><a href="#blog">Buy $eDove</a></p>
</div>
<div className='gpt3__navbar-menu'>
{toggleMenu 
? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)}/>
: <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)}/>
}
{toggleMenu && (
  <div className='gpt3__navbar-menu_container scale-up-center'>
    <div className='gpt3__navbar_menu_container_links'>
      <Menu />
      <div className='gpt3__navbar-button hideBtn'>
<p ><a href="#blog">Buy $eDove</a></p>
</div>
      </div>
    </div>
)}
</div>
    </div>
  )
}

export default NavBar
import React , {useState} from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo2 from '../../assets/eDove2-1.png'

const Menu =()=>{
return(
  <>
  <p><a href="#home">Home</a></p>
<p><a href="#brand">About</a></p>
<p><a href="#whateDove">Possibilities</a></p>
<p><a href="#features">Features</a></p>
<p><a href="#roadmap">Roadmap</a></p>

  </>
)
}
const NavBar = () => {
const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='gpt3__navbar section__padding'>
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
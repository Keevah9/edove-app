import React from 'react'
import './header.css'
import {coin,coinhand,dump,chart, new5} from './import'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Discover, Buy, Trade, Hold...Become Extraordinary.<span className='highLight'>eDOVE</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In adipisci minus, reiciendis deleniti repellat magnam fuga dicta odio provident, sit velit veniam illum unde placeat?
        </p>
        <div>
          <button className='btn'>Explore</button>
          <button className='btn moreBtn'>Learn More</button>
        </div>

        <div className='gpt3__header-otherInfo'>
          <div className='gpt3__header-otherInfo-con'>
            <img 
            src={chart}
            alt = 'chart image'
          />
            <h4>Sustainable <br /> Growth</h4>
          </div>
          <div className='gpt3__header-otherInfo-con'>
            <img 
            src={coin}
            alt = 'coin image'
          />
            <h4>Auto <br /> Re-investing</h4>
          </div>
          <div className='gpt3__header-otherInfo-con'>
            <img 
            src={dump}
            alt = 'dump image'
          />
            <h4> Anti - <br /> Dump </h4>
          </div>
          <div className='gpt3__header-otherInfo-con'>
            <img 
            src={coinhand}
            alt = 'coinhand image'
          />
            <h4> Value <br /> Performance</h4>
          </div>
        </div>
        
      </div >
      <div className='gpt3__header-image'>
          <img
          src={new5}
          alt='edove'
          />
        </div>
    </div>
  )
}

export default Header
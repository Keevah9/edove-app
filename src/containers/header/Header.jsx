import React from 'react'
import './header.css'
import {coin,coinhand,dump,chart, new5} from './import'


const Header = () => {
  return (
    <main className='gpt3__header section__padding card' id='home' >
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Discover, Trade, Meet, Build...Become Extraordinary.<span className='highLight'>eDOVE</span>
        </h1>
        <p>
          eDOVE is the first-ever smart auto staking, dex, and nft marketplace in the EVMOS blockchain along with other unique use-cases. eDOVE is a low-risk but high-reward community-based project. Expansion is the goal of eDOVE, to be the first protocol, one of its kind in the EVMOS blockchain. With our long-term goal of building a multichain DEX and dAPP, you will be able to purchase EVMOS tokens as well as other blockchains with ease...all in one place. 
        </p>
        <div>
          <a href='#whateDove' className='btn' >Explore</a>
          <a href='#brand' className='btn moreBtn' >Learn More</a>
        </div>

        <div className='gpt3__header-otherInfo'>
          <div className='gpt3__header-otherInfo-con'>
            <img 
            src={chart}
            alt = 'chart' className='first'
          />
            <h4>Sustainable <br /> Growth</h4>
          </div>
          <div className='gpt3__header-otherInfo-con'>
            <img 
            src={coin}
            alt = 'coin' className='second'
          />
            <h4>Auto <br /> Re-investing</h4>
          </div>
          <div className='gpt3__header-otherInfo-con'>
            <img 
            src={dump}
            alt = 'dump' className='third'
          />
            <h4> Anti - <br /> Dump </h4>
          </div>
          <div className='gpt3__header-otherInfo-con'>
            <img 
            src={coinhand}
            alt = 'coinhand' className='fourth'
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
    </main>
  )
}

export default Header
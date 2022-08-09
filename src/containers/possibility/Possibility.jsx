import React from 'react'
import './possibility.css'
import { CTA } from '../../components'
import treasure from "../../assets/treasure.jpg";
import lottery from "../../assets/check.jpg";
import play from "../../assets/play2.jpg";

import Fade from 'react-reveal/Fade'

const Possibility = () => {
  return (
    <div className='edove__possibilities-section section__padding ' id='whateDove'>
      <div className='edove__possibilities-container'>
          <h2 className='edove__possibilities-section-head'>POSSIBILITIES</h2>
      <div className='edove__possibilities-container1 slide-fwd-center'>
        <Fade left>
          <CTA span='COMING SOON' 
        title='Play To Earn' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem magni explicabo recusandae doloremque sunt facilis modi magnam iure nesciunt quasi? ' image={play} />
        </Fade>
      </div>
      
      <div className='edove__possibilities-container1 lottery slide-fwd-center'>
        
                  <div className='edove__cta-container lottery'>
          <div className='edove__cta-container-image'>
            <Fade right>
              <img 
        src={lottery} />
            </Fade>
            
          </div>
          
          <div className='edove__cta-container-content'>
          <span>COMING SOON</span>
          <h2>Lottery Games</h2>
          <p>Play one of the most fascinating lottery games and earn while at it. It is a gamble where you can lose all or win all but the great part is, it is owned by you and operated by you. You can decide the risks, the stakes, and decide the future of your roles. Earn, stake, and win.</p>
        </div>
          
        </div> 
        

        
      </div>

      <div className='edove__possibilities-container1 slide-fwd-center'>
        
          <CTA span='COMING SOON' title='Treasure Hunt' sub='' text='Create the treasure hunts that motivate you and your group, then let others find them within a timeframe. The rarity determines their value and their stake. The winner takes all. This is a game that effectively engages players and reveals their creative sides ' image={treasure} />
        
      
      </div>
      </div>
      
      
    </div>
  )
}

export default Possibility
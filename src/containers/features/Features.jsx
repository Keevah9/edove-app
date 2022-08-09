import React from 'react'
import './features.css'
import { Article } from '../../components';
import image from "../../assets/new7.jpg";
const  Features = () => {
  return (
    <section className='section__padding edove__mainFeatures-section'>
      <div className='edove__mainFeatures-container'>
        <div className='edove__mainFeatures-container-second '>
          <div className='edove__mainFeatures-container-imgCon'>
            <div className='edove__mainFeatures-container-imgBg'>
             <img 
            src={image}
            alt='about money'/>
            
            </div>
            
            
          </div>

      <div className='edove__mainFeatures-container'>
        <div className='edove__mainFeatures-container-first width'>
          
          <div className='edove__mainFeatures-container-subHead'>
            <h3>
              " The fundamental law of investing is the uncertainty of the future " <br /> <p>eDove is including the strength in their experience.</p> 
            </h3>
            <Article first='Community' second= 'Experience' third= 'Accessibility' fourth='Transparency' />
            
          
          </div>
          
        </div>
        <div className='edove__mainFeatures-container-third width'>

          <div className='flex'>
            <p>eDove </p>
          <div className='spaceLine'></div>
          <h2 className='gradient-text'>
            It is the job of the market to turn the base material of our emotions into gold...
          </h2>
          <p>And it is our job to turn your trades into certainties and not probabililities. We have set and effective guidelines to prevent dumps while supporting eDove and her community growth.
          </p>
          <p> We will do this by paying attention to the the details other projects ignored- some of these details lie in YOU and our entire community. We have been in cryptocurrency for long and only the game can teach you game...and we have learned. we have experienced, and now we are building on optimism. Explore the possibilities with us.  </p>
          <a href='#features' className='btn'>Features</a>
          </div>
          
        </div>
        </div>
        
       
      </div>
      
      </div>
       
    </section>
  )
}

export default Features
import React from "react";
import "./premium.css";
import Zoom from 'react-reveal/Zoom'
import nft from "../../assets/nft use 2.jpg";
import nftt from "../../assets/nft use3.jpg";
import dex from "../../assets/dex3.jpg";
import Fade from 'react-reveal/Fade'
import { Article, CTA } from "../../components";
const Premium = () => {
  return (
      <section className="section__padding edove__premium-section" id="features">
        <h2 className='edove__whatedove-section-head'>FEATURES</h2>
        
          <div className='edove__premium-container'>
            
              <div className='edove__premium-center'>
                <span>COMING SOON</span>
                <h2>NFT</h2>
              </div>
              <div className="edove__premium-sub">
               
                  <Zoom>
                    <Fade left>
          <CTA  
         text='We want to take over EVMOS blockchain and one of the ways is to build the most fantastic marketplace for you. We know rare is rare hence, our need to build a creative platform from attractive ideas and minds. Come, become a part of our world and share with us and others, your NFTs. ' image={nft} alt='edove nft'/>
        </Fade>
        </Zoom>
                
              </div>
      </div>

      <div className="edove__mainFeatures-container">
         <div className='edove__mainFeatures-container-subHead width'>
          <div>
            <h3>
              " Investing is the intersection of economics and psychology " <br /> 
              <p>eDove is including the strength of a community.</p> 
            </h3>
            
          <Article first='Rarities' second='Audited and Monitored' third='Save Your Favourite NFTs' fourth='Ability to Scan Contracts' />
        </div>
        </div>    
          <div className='edove__mainFeatures-container-third width'>

          <div className='flex'>
            <p>eDove </p>
             <div className='spaceLine'></div>
          <img 
          src={nftt}
          alt='edove nft sample'
          className="images"
          />
          
          </div>
          
        </div>
          </div>

        <Zoom>
          <div className='edove__premium-container'>
            <div className='edove__premium-center dex'>
              <span>COMING SOON</span>
                <h2>DEX</h2>
            </div>
            <div className="edove__premium-sub">
              <div>
                <img 
                src={dex}
                alt="edove dex" />
              </div>
              <div className="edove__premium-content">
                <p>We are building one of the decentralized exchanges on the evmos blockchain with the lowest fees out there. Our UI is user-friendly, slick, a beauty, and most importantly, its user friendly and designed for everyone and you.
                </p>
              </div>
            </div>
      </div>
      <div className="edove__mainFeatures-container">
         <div className='edove__mainFeatures-container-subHead width'>
          <div>
            <h3>
              " The fundamental law of investing is the uncertainty of the future." <br /> 
              <p>eDove is including the strength of optimism.</p> 
            </h3>
            
          <Article first='Dedicated Servers' second='Audited and Monitored' third='Auto Slippage Function' fourth='Customizable chart buttons' />
        </div>
        </div>    
          <div className='edove__mainFeatures-container-third width'>

          <div className='flex'>
            <p>eDove </p>
          <div className='spaceLine'></div>
          <h2 className='gradient-text'>
            It is the job of the market to turn the base material of our emotions into gold...
          </h2>
          <p>The exchange is the beating heart of eDOVE as it features a clean interface and powerful charting tools where users can swap their tokens and take advantage of real-time calls.
          </p>
          <p> eDOVE dex is built with security in mind and our team places emphasis on innovation and is constantly seeking opportunities to boost the exchange's functionality and durability  </p>
          
          </div>
          
        </div>
          </div>

     
        </Zoom>
        
      
      
      </section>
    )
};

export default Premium;

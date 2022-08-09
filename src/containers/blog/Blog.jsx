import React from 'react'
import './blog.css'
import { Article } from '../../components'
const Blog = () => {
  return (
    <section className='section__padding edove__roadmap-section' id='roadmap'>
      <h2 className='edove__whatedove-section-head'>ROADMAP</h2>
      <div className='edove__roadmap-container'>
        <div className='edove__roadmap-contentt' >
          <h2>Tokenomics</h2>
          <p >eDove is a community token, hence, you are our priority and we run to support you. No private sale and no presale allocations, just YOU. Our total supply is 1 billion
          **tokenomics goes here
           system is built and our growth is the utmost priority.  
          </p>
        <p>
            A % of each transaction will be dedicated to ensuring the growth a dnd development of the projects. The fund will be used for marketing, listing on exchanges, NFT marketplace, lottery games, and future projects that will strengthen eDove support for YOU
        </p>
        </div>
        

        <div className='edove__roadmap-map'>
          <div className='edove__roadmap-firstMap'>
            <div className='map1'>
              <div>
                <h3>Phase 1</h3>
                <span>Launch</span>
                <div className='slantLine'></div>
              </div>

                    <Article text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ullam sapiente vero minus sint totam vitae earum consequatur est. Architecto.o' phase='Phase 1' first='Telegram launch' second='Stealth Launch' third='Telegram Influencers Calls' fourth='AMA'/>  
            </div>


            <div className='map2'>
              <div>
                <h3>Phase 2</h3>
                <span>Build</span>
                <div className='slantLine'></div>
              </div>
              
              
              
              <Article text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ullam sapiente vero minus sint totam vitae earum consequatur est. Architecto.o'  first='Medium Articles' second='Influencer Tweets' third='Aggressive Marketing Rollout' fourth='CG and CMC Application'/>
           
        
            </div>
          </div>


          <div className='edove__roadmap-firstMap'>
            <div className='map3'>
              <div>
                <h3>Phase 3</h3>
                <span>Grow</span>
                <div className='slantLine'></div>
              </div>
              
              
                 
                <Article text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ullam sapiente vero minus sint totam vitae earum consequatur est. Architecto.o' first='More Utility' second='YouTube Marketing' third='DEX' fourth='CMS Trending Posts'/>
            </div>    
          </div>
            <div className='map4'>
              <div>
                <h3>Phase 4</h3>
                <span>Exponential</span>
              </div>
              
              <div className='slantLine'></div>
                 
                <Article text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ullam sapiente vero minus sint totam vitae earum consequatur est. Architecto.o' first='Major Partnerships' second='CEX Listings' third='$2m Marketcap' fourth='APP' />
            </div>
            
          
              
           
            
            
            </div>

      
      </div>
    </section>
  )
}

export default Blog
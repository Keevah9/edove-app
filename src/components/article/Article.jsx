import React from 'react'
import './article.css'


const Article =({ text, first, second, third, fourth})=>{
  return(
    <div className='edove__roadmap-content'>
      <p>{text}</p>
      <div className='leftCon'>
        
                      <div>
                        <div className='spaceLine'></div>
                          <p>{first} </p>
              
                      </div>
                      <div>
                        <div className='spaceLine'></div>
                        <p>{second}</p>
                      </div>
                      <div>
                        <div className='spaceLine'></div>
                        <p>{third}</p>
                      </div>
                      <div>
                        <div className='spaceLine'></div>
                        <p>{fourth}</p>
                      </div>
                    </div>
    </div>
        

    
  )
}    

export default Article
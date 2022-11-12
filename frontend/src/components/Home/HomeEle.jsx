import React, { useState } from 'react'

const HomeEle = ({ele, handleLikeDecre, handleLikeIncre}) => {
    const [toggle, setTogle] = useState(false) ;
    const handleLikeIncreElem = (id) => {
       
        handleLikeIncre(id) ;
        setTogle(true)
    }
    const handleLikeDecreEle = (id) => {
        handleLikeDecre(id) ;
        setTogle(false)
    }
    
  return (
    <div>
         <div className="col" >
                        
                        <div class="card shadow-sm">
                           <div style={{padding: "2%"}}><b>{ele.title}</b></div>
                             <img src={ele.photo} height="250px"/>
  
                              <div class="card-body">
                              <p class="card-text">{ele.body} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quo minus eos similique, aspernatur ipsum eius </p>
                              <b>Like : {ele.like}</b>
                              <div class="d-flex justify-content-between align-items-center">
                                  
                                  <div class="btn-group">
                                     {
                                      toggle ?<button type="button" class="btn btn-sm btn-outline-secondary" onClick={() =>handleLikeDecreEle(ele._id)}>unlike</button> :  <button type="button" class="btn btn-sm btn-outline-secondary"  onClick={()=>handleLikeIncreElem(ele._id)}> Like</button>
                                     }
                                   </div>
                                  <small class="text-muted">{ele.time}</small>
                              </div>
                              
                              </div>
                             
                          </div>
                          
          </div>
      
    </div>
  )
}

export default HomeEle

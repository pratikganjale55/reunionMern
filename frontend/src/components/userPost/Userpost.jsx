import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserElement from './UserElement'

const Userpost = () => {

const [postData, setData] = useState([]) ;


const id  = JSON.parse(localStorage.getItem("userId")) ;
   console.log(id)
const handleLikeIncre = async(postId) => {
    
        await fetch(`http://localhost:8000/post/like/${postId}`,{
            headers : {
                "Content-Type" : "application/json"
            },
            method : "POST" ,
        }).then((res) => {
                
            console.log(res)
            
            getData()
            })
            .catch((e) => console.log(e))
}
const handleLikeDecre= (postId) => {
    // let postid = JSON.stringify(postId)
  axios.post(`https://reunionmini.herokuapp.com/post/unlike/${postId}`)
  .then((res) => {
      console.log(res)
     
      getData()
    })
  .catch((e) => console.log(e))
}

const handleDeletePost = (postId) => {
    // let postid = JSON.stringify(postId)
     axios.post(`https://reunionmini.herokuapp.com/post/deletePost/${postId}`)
     .then(res => {
      console.log(res)
      alert("Delete post Successful")
      getData()
    })
     .catch((e) => console.log(e)) 
}

   
    const getData = () => {
        axios.get(`https://reunionmini.herokuapp.com/post/getData/${id}`)
        .then((res) => {
              setData(res.data)
        })
        .catch((e) => console.log(e)) 
    }

    useEffect(() => {

       getData()

    }, [])
    console.log(postData)
  
  return (
    <div>
        <div style={{margin : "3%"}}>
         <Link to="/newpost"><button type="button" className="btn btn-info" >New Post</button></Link> 
        </div>
        
        
        <div className="album py-5 ">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                 {
                    postData.map((ele, index) => {
                         return <UserElement ele={ele}  handleDeletePost={handleDeletePost} handleLikeDecre={handleLikeDecre} handleLikeIncre={handleLikeIncre} />
                    })
                 }
                    
                    
                 </div>
            </div>
        </div>
                        
                
                   
                   
                
           
       


    </div>
  )
}

export default Userpost

import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';

const CreatePost = () => {
    const [post , setPost] = useState({}) ;
    const id  = JSON.parse(localStorage.getItem("userId")) ;
    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target ;
        setPost({
              ...post ,
              [name] : value
        })

    }
    const handleUploadPost =async (e) => {
        e.preventDefault() ;
        const payload = JSON.stringify(post) ;
        console.log(payload)
        await fetch(`https://reunionmini.herokuapp.com/post/createPost/${id}`, {
          headers : {
              "Content-Type" : "application/json"
          },
          method : "POST" ,
          body : payload
        })
        .then((res) => res.json())
        .then(data => {
            console.log(data)
            if(data.massage == "Poste successful") {
                
                alert("Poste successful") ;
               navigate("/userpost")
            }else {
                  alert("fill data")
            }
        })
        .catch((e) => console.log(e)) 
            
              
    }
  return (
    <div>
      <main className="form-signin  m-auto mt-5 register">
        <form>
            
            <h1 className="h3 mb-3 fw-normal stroke_text registerText"> New post</h1>

            <div className="form-floating mt-3">
            <input type="text" className="form-control registerInput" id="floatingInput" name="title" onChange={handleChange} placeholder="Enter Title"/>
            <label for="floatingInput">Title</label>
            </div>
            <div className="form-floating mt-2">
            <input type="text" className="form-control registerInput" id="floatingPassword" name="body" onChange={handleChange} placeholder="Description"/>
            <label for="floatingPassword">Description</label>
            </div>
            <div className="form-floating mt-2">
            <input type="text" className="form-control registerInput" id="floatingPassword" name="photo" onChange={handleChange} placeholder="Upload image"/>
            <label for="floatingPassword">Upload image url</label>
            </div>
            

            
            <button className="w-100 btn btn-lg  regsiterButton mt-2 " type="submit" onClick={handleUploadPost}>UPLOAD POST</button>
            
        </form>
</main>
    </div>
  )
}

export default CreatePost

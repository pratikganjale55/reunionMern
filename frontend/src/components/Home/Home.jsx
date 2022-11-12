import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom' ;
import "./home.css" ;
import HomeEle from './HomeEle';

const Home = () => {
    const [data, setData] = useState([])


    const handleLikeIncre = async(postId) => {
    
        await fetch(`https://reunionmini.herokuapp.com/post/like/${postId}`,{
            headers : {
                "Content-Type" : "application/json"
            },
            method : "POST" ,
        }).then((res) => {
                
            console.log(res)
            
            getHomeData()
            })
            .catch((e) => console.log(e))
}
const handleLikeDecre= (postId) => {
    // let postid = JSON.stringify(postId)
  axios.post(`https://reunionmini.herokuapp.com/post/unlike/${postId}`)
  .then((res) => {
      console.log(res)
     
      getHomeData()
    })
  .catch((e) => console.log(e))
}

        const getHomeData = () => {
            axios.get("https://reunionmini.herokuapp.com/post/")
                    .then((res) => {
                        setData(res.data)
                    }).catch((e) => console.log(e))
        }

    useEffect(() => {
            getHomeData()
    }, [])
  return (
    <div>
            <main>
                <div className="container py-4">
                        <header className="pb-3 mb-4 border-bottom">
                        <a  className="d-flex align-items-center text-dark text-decoration-none">
                            
                            <span className="fs-4">All post</span>
                        </a>
                        </header>

                        <div className="p-5 mb-4 bg-light rounded-3">
                            <div className="container-fluid py-5 topDivHome">
                                <h1 className="display-5 fw-bold"></h1>
                                <p className="col-md-8 fs-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente ex commodi est ipsum quasi necessitatibus sunt temporibus nulla minima inventore non tempore, sit ratione a numquam, laborum vero magnam provident.</p>
                                <Link to="/userDetails">
                                <button className="btn btn-primary "style={{backgroundColor: "#A0E4CB", color: "black"}} type="button">My Account</button>
                                </Link>
                            </div>
                        </div>

                        <div className="album py-5 ">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            data.map((ele) => {
                                return    <HomeEle ele={ele}  handleLikeDecre={handleLikeDecre}  handleLikeIncre={handleLikeIncre} />
                             
                            })
                                
                         }
                               
                       
                    </div>
                </div>
                </div>
       
                    <footer class="pt-3 mt-4 text-muted border-top">
                    &copy; 2022
                    </footer>
                </div>
            </main>
    </div>
  )
}

export default Home

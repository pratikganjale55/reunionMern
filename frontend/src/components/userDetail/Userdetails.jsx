import axios from 'axios';
import React from 'react' ;
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./useDetails.css" ;

const Userdetails = () => {
    const [buttonFlag, setButton] = useState(false) ;
    const [userData, setData] = useState([]) ;

    const id  = JSON.parse(localStorage.getItem("userId")) ;

    const handleFollow = () => {
        axios.post(`https://reunionmini.herokuapp.com/follow/${id}`)
        .then(res => {
            console.log(res) 
            setButton(true)
            getData()
        })
        .catch((e) => console.log(e))
    }
    const handleUnFollow = () => {
        axios.post(`https://reunionmini.herokuapp.com/unfollow/${id}`)
        .then(res => {
            console.log(res) 
            setButton(false)
            getData() 
        })
        .catch((e) => console.log(e))
    }
    const getData = () => {
        axios.get(`https://reunionmini.herokuapp.com/details/${id}`)
        .then((res) => {
            setData(res.data)
        })
        .catch((e) => console.log(e))
    }

    useEffect(() => {
        getData()
    }, [])


    console.log(userData)
  return (
    <div>
      <div className="card text-center m-auto mt-5 about_container">
    <div className="card-header">
      <ul className="nav nav-tabs card-header-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="true" href="#">Account</a>
        </li>
        
        
      </ul>
    </div>
    
    <div className="card-body about_body">
        {
    userData.map((ele, index) => {
        return <div className="card left_card" key={index}>
        <img src={ele.image} style={{borderRadius: "50%"}}  className="card-img-top" alt="profile image"/>
        <div className="card-body">
          <h5 className="card-title">{ele.name}</h5>
          <p className="card-text">{ele.bio}</p>
          <p className="card-text followerDiv">
              <small className="text-muted"><b>Follower : {ele.follow}</b></small>
          </p>
          <div>
              {
                  buttonFlag ? <button type="button" className="btn btn-outline-warning" onClick={handleUnFollow}>Unfollow</button> :<button type="button" className="btn btn-outline-info" onClick={handleFollow}>Follow</button>

              }
          
          </div>
        </div>
  </div>
    })
}
          
        <div className='right_card'>
            <Link to="/userpost">
            <button type="button" className="btn btn-info mt-2">MY POST</button>
            </Link>
        

            
        </div>
        
    </div>
</div>
    </div>
  )
}

export default Userdetails

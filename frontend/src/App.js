
import { Route, Routes } from 'react-router';
import './App.css';
import Createaccount from './components/createAccount/Createaccount';
import CreatePost from './components/createPost/CreatePost';
import Home from './components/Home/Home';

import Login from './components/login/Login';
import Navbar from "./components/navbar/Navbar"
import Userdetails from './components/userDetail/Userdetails';
import Userpost from './components/userPost/Userpost';
import PrivateAuth from "./components/AuthCotext/PrivateContext" ;



function App() {
  return (
  <>
    <Navbar/>

    <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         
         <Route path="/newuser" element={<Createaccount/>}/>
         <Route path="/userDetails" element={
          <PrivateAuth>
            <Userdetails/>
          </PrivateAuth>
         
         }/>
         <Route path="/userpost" element={
          <PrivateAuth>
             <Userpost/>
          </PrivateAuth>
        
         }/>
         <Route path="/newpost" element={
           <PrivateAuth>
              <CreatePost/>
          </PrivateAuth>
        
         }/>
         


    </Routes>
     
     
  </>

  );
}

export default App;


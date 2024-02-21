import { RiAdminLine } from "react-icons/ri";
import React, { useState } from 'react';
import Lvideo from './LBvideo.mp4'
import { FaLock } from 'react-icons/fa'; 
import { IoMail } from 'react-icons/io5';
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [state,setState] =useState({
    email:"",
    password:""
  });
  const log=useNavigate();
  
  
  return (
    <>
    <section className='Login1'>
      <div className='lbvideo'>
        <video  className='lvideo'autoPlay muted loop>
          < source src={Lvideo} type='video/mp4'></source>
        </video>
      </div>
      <div className='adminRedirect'>
              <button className="Toadmin" title="Admin Login" onClick={()=>log('/Admin')}><RiAdminLine /></button>
              <p className="hoverr">Admin!</p>
            </div>
      <div className='LoginName'>
        <h1 id="hl">LogIn</h1>
        <hr id='lhr'></hr>
        <form id='1a'>
          <div className='InputUser'>
            <IoMail/><span>&nbsp;&nbsp;</span>
                <input id='101' type='email' placeholder='Email' required />
              </div>
              <div className='InputPassword'>
                <FaLock /><span>&nbsp;&nbsp;</span>
                <input id='102' type='password' placeholder='Password' required />
                </div>
            </form>
              <div id='remember'>
                <label>
                  <input id='103' type='checkbox' />&nbsp;Remember me&nbsp;&nbsp;&nbsp;&nbsp;<a id="la" href='#'>Forgot Password</a>
                </label>
                
              </div>
              <button id='submit' onClick={()=>log('/Main')}>Login</button>
              <div className='RegisterPage'>
                <p  id="prop">If you don't have an account?&nbsp; <a href="#"  id='la' rel='link'onClick={()=>log('/Register')}>RegisterNow</a></p>
              </div>
            </div>
            
    </section>
  </>
  );
}






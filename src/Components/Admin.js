import React from 'react'
import "./Login.css";
import Avideo from "./ABvideo.mp4";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import {FaLock } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function Admin() {

  const adm=useNavigate();
  return (
    <>
    <section className='AdminLogin'>
      <div className='abvideo'>
        <video  className='avideo'autoPlay muted loop>
          < source src={Avideo} type='video/mp4'></source>
        </video>
      </div>
          <div className='AdminName'>
            <h1 id='admin'>Okaerinasai</h1><hr id='ahr'></hr>
            <form>
              <div className='InputUser'>
                <IoMail/><span>&nbsp;&nbsp;</span>
                <input id='101' type='email' placeholder='Email' required />
              </div>
              <div className='InputPassword'>
                <FaLock /><span>&nbsp;&nbsp;</span>
                <input id='102' type='password' placeholder='Password' required />
              </div>
              <div className='verifyId'>
              <RiVerifiedBadgeFill /><span>&nbsp;&nbsp;</span>
              <input  type='text' placeholder='VerificationId' required />
              </div>
            </form>
            <div>
              <button id='asubmit' onClick={()=>adm('/AdminHome')}>Login</button>
            </div>
            </div>
            
        </section>
    </>
  )
}

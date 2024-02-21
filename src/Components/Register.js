import React from 'react';
import RBvideo from './RBvideo.mp4';
import { FaUser, FaLock } from 'react-icons/fa';
import { FaBirthdayCake } from "react-icons/fa";
import { IoMail } from 'react-icons/io5';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const log=useNavigate();
  return (
    <section className='Register'>
      <div className='rbvideo'>
        <video  className='rvideo'autoPlay muted loop>
          < source src={RBvideo} type='video/mp4'></source>
        </video>
      </div>
      <div id='regbox'> 
          <h1 id='rh'>SignUp</h1><hr id='rhr'></hr>
        <form>
          <div className='RegMail'>
            <IoMail /><span>{' '}</span>
            <input type='email'   placeholder='Email' required />
          </div>
          <div className='RegUser'>
            <FaUser /><span>{' '}</span>
            <input type='text' placeholder='UserName' required />
          </div>
          <div className='birthdate'>
          <FaBirthdayCake />
          <span>{' '}</span>
            <input type='date'   placeholder='date' required />
          </div>
          <div className='gender'>
            Gender:&nbsp;
            <select  id='gen-z' name="gender">
              <option value="">Please select one…</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="non-binary">Non-Binary</option>
              <option value="other">Other</option>
              <option value="Prefer not to answer">Perfer not to Answer</option>
            </select>
          </div>
          <div className='RegPassword'>
            <FaLock /><span>{' '}</span>
            <input type='password' placeholder='password' required />
          </div>
          <div className='ConfirmPassword'>
            <FaLock /><span>{' '}</span>
            <input type='Password' placeholder='ConfirmPassword' required />
          </div>
        </form>
        <button id='RegSubmit' onClick={()=>log('/Login')}>SignUp</button>
      </div>
    </section>
  );
}

import  { MdPermIdentity } from "react-icons/md";import Home1 from './Home1';
import React, { useState } from 'react';
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState({
    email: 'default@email.com',
    username: 'defaultUsername',
    userid: 'defaultUserId',
    postcounts: 0,
    DOB:'12-12-2023',
    Gender:'UserGender'
  });
  const log =useNavigate();
  return (
    <div className="boddy">
    <div className="topper"><Home1/></div>
    <div className="profilemain">
    <div className='profile'>
      <h1 className="jangrihead"> Profile</h1><hr className="underline"></hr>
      <div className='profile-details'>
        <p>Name  <span id="first"> : &nbsp;&nbsp;{userData.username}</span></p>
        <p>UserID <span id="second" > : &nbsp;&nbsp;{userData.userid}</span></p>
        <p>Date Of Birth <span id="third" >: &nbsp;&nbsp;{userData.DOB}</span></p>
        <p>Number Of Posts <span id="fourth" >: &nbsp;&nbsp;{userData.postcounts}</span></p>
        <p>Email <span id="fifth">: &nbsp;&nbsp;{userData.email}</span></p>
        <p>Gender <span id="sixth">: &nbsp;&nbsp;{userData.Gender}</span></p>
      </div>
        <button className="return" onClick={()=>log('/Main')}>Return</button>
        <button className="editprofile" onClick={()=>log('/EditProfile')}>Edit Profile</button>
      </div>
      </div>
    </div>
  );
};


export default Profile;
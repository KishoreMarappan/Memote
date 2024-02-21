import React from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom';
import Home1 from './Home1';

export default function EditProfile() {
    const log = useNavigate();
  return (
    <div className='boddy'>
    <div className="toppery"><Home1/></div>
    <div className='edit-main'>
    <div className="edit-prof-container">
      <h1>Edit Profile</h1>
      <hr id='hrforeprof'></hr>
      <form>
      
          <div className='UserName-change'>
            UserName
            <input id='userChanger' type='text' placeholder='UserName' required />
          </div>
          <div className='changedate'>
          Date Of Birth

            <input type='date' id='dateChange'  placeholder='date' required />
          </div>
          <div className='change-gender'>
            Gender
            <select id='genderChange' name="gender">
              <option value="">Please select one…</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="non-binary">Non-Binary</option>
              <option value="other">Other</option>
              <option value="Prefer not to answer">Perfer not to say</option>
            </select>
          </div>
          <div className='change-pass'>
            Change Password
            <input id='passChange' type='password' placeholder='password' required />
          </div>
        <button className='save-changess' onClick={()=>log('/Profile')} > Save Changes </button>
            <button className="returnprof" onClick={() => log('/Profile')}>Cancel</button> </form>
    </div>
    </div>
    </div>
  );
}

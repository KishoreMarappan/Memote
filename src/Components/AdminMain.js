import React from 'react'
import './AdminMain.css'
import { IoNavigateOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useNavigate,Link } from 'react-router-dom';
import AdminHead from './AdminHead';
export default function AdminMain() {
  const MonthlyTopic = "Full Stack developer";
  const log =useNavigate();
  return (
    <div className='Admin-contents'>
        <AdminHead />
        <div >
            <div className='set12'>
                <h1 className='topic_head'>Set Monthly Topic: </h1>
                <input id='set-tp' type='text' className='setter-input'placeholder='set topic'/>
                <button className='setter-btn'>Apply</button>
                <div>
                <p id='a-para' >Navigate To</p>
                <span id='naviphoto1'><IoNavigateOutline /></span><button className='user-manageh' onClick={()=>log('/UserManager')}>User Management Page</button>
                <span id='naviphoto2'><IoNavigateOutline /></span><button className='content-manageh'onClick={()=>log('/ContentManager')}>Content Management Page</button>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import './AdminHead.css'
import { Link, useNavigate } from 'react-router-dom';

export default function AdminHead() {

  const MonthlyTopic = "Full Stack Developer";
  const log = useNavigate();
  return (
    <div className='searcher'>
        <h1 id='h-headtag'>Monthly Topic:  {MonthlyTopic}</h1>
        <input type='search' placeholder='search'></input>
        <button className='searchbtn'><FaSearch /></button>
        <button className='Leaderboard' onClick={() => log('/AdminLeaderBoard')}>View Leaderboard</button>
        <div className='dropdown'>
          <button className='link'><IoMenu /></button>
          <div className='dropdown-menu'>
          <button className='jake'onClick={()=>log('/AdminHome')}>Home</button>
            <Link to="/"><button className='logout'>LogOut</button></Link>
          </div>
        </div>
      </div>
  )
}

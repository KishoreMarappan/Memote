import React, { useState } from 'react';
import "./Home1.css";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useNavigate,Link } from 'react-router-dom';

export default function Home1() {
    
    const MonthlyTopic = "Full Stack developer";
    const log =useNavigate();
    return (
        <>          
            <div className='searcher'>
                <h1 id='h-headtag'>Monthly Topic:  {MonthlyTopic}</h1>
                    <input type='search' placeholder='search'></input>
                    <button className='searchbtn'><FaSearch /></button>
                    <button className='Leaderboard'onClick={()=>log('/LeaderBoard')}>View Leaderboard</button>
                    <div className='dropdown'>
                        <button className='link'><IoMenu /></button>
                        <div className='dropdown-menu'>
                            <button className='callprofile' onClick={()=>log('/Profile')}>Profile</button>
                            <button className='uploadimg'onClick={()=>log('/AddWork')}>AddWork</button>
                            <Link to="/"><button className='logout'>LogOut</button></Link>
                        </div>
                    </div>
                </div>
                
        </>
    );
}

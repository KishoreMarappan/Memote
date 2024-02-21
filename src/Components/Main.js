import React, { useState, useEffect } from 'react';
import './Main.css'; 
import Like from './like1.png';
import Dislike from './dislike.png';
import Report from './report.png';
import Records from './Records.json';
import { FaSearch } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

const imageFolder = './memes/';

export default function Main() {
  const MonthlyTopic = "Full Stack Developer";
  const log = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);
  const [userIds, setUserIds] = useState([]);
  const handleScroll = (e) => {
    if (e.deltaY !== 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex + (e.deltaY > 0 ? 1 : -1) + imageUrls.length) % imageUrls.length);
    }
  };

  useEffect(() => {

    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context(`./memes`, false, /\.(png|jpe?g|svg)$/));
    setImageUrls(images);

    const ids = Records.map((record) => record._id);
    setUserIds(ids);
  }, []); 

  useEffect(() => {
  
    window.addEventListener('wheel', handleScroll);
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]); 

  const handleLike = () => {
    console.log('L');
  };

  const handleDislike = () => {
    console.log('D');
  };

  const handleReport = () => {
    console.log('R');
  };

  return (
    <div className='joker'>
      <div className='searcher'>
        <h1 id='h-headtag'>Monthly Topic:  {MonthlyTopic}</h1>
        <input type='search' placeholder='search'></input>
        <button className='searchbtn'><FaSearch /></button>
        <button className='Leaderboard'onClick={()=>log('/LeaderBoard')}>View Leaderboard</button>
        <div className='dropdown'>
          <button className='link'><IoMenu /></button>
          <div className='dropdown-menu'>
            <button className='callprofile' onClick={() => log('/Profile')}>Profile</button>
            <button className='uploadimg' onClick={() => log('/AddWork')}>AddWork</button>
            <Link to="/"><button className='logout'>LogOut</button></Link>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        <div className="user-id-container">
          <p id='userid-display'>User ID: {userIds[currentImageIndex]}</p>
        </div>
        
        </div>
        <div className="buttons-container">
          <button className="action-btn like-btn" onClick={handleLike}>
          <img className='likeimg' src={Like} alt='like'></img>
          </button>
          <button className="action-btn dislike-btn" onClick={handleDislike} >
          <img className='dislikeimg' src={Dislike} alt='dislike'></img>
           
          </button>
          <button className="action-btn report-btn" onClick={handleReport}>
          <img className='reportimg' src={Report} alt='report'></img>
          </button>
      </div>
    </div>
  );
}

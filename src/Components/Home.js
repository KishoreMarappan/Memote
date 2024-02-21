import React from 'react';
import P from './paper-point.png';
import "./Home.css";
// import Rkt from './rocket.jpeg'
// <img id='rocket' src={Rkt} ></img>
import S1 from './Homepage_Snoo.png';
import S2 from './Homepage_Snoo1.png';
import Minon from './minion-Hello.jpeg';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const log=useNavigate();
  return (
    <div>
    <div className='k9'>
        <header >
            <h1>Memote</h1>
            <nav className='navigation'>
                <a  onClick={()=>log('/')}>Home</a>
                <a  onClick={()=>log('/Contact')}>Contact</a>
                <a href='#'rel='link' onClick={()=>log('/Register')}>SignUp</a>
                <a href='#'rel='link' onClick={()=>log('/Login')}>LogIn</a>
            </nav>
        </header>
        <div className='container'>
        <img  id='snoo1' src={S2}></img>  
            <div className='text-block'>
                <div className="logo-holder">
                
                <img  id='minion' src={Minon}></img>
                </div>
                
                <h1 id='home-head'>Welcome to Memote - Where Laughter Meets Creativity!</h1>
                
                <div className="text">
                    <p id='home-para1'>At Memote, we believe in the power of laughter to 
                       bring people together. Whether you're a seasoned meme
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; enthusiast or just exploring the world of humor, our
                       platform is designed to cater to your meme-related need.</p>
                    <p id='home-para2'>Our platform is designed to bring joy and laughter
                     to your daily routine. As you navigate through Memote, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;expect a diverse 
                     range of humorous content that reflects the creativity and wit of our 
                     community members.</p>
                      <p id='home-para3'> We believe in the power of laughter to brighten your
                      day, and Memote is the space where this belief comes to &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;life.</p>
                </div>
                <img id='snoo2' src={S1} ></img>
            </div>
        </div>
    </div>
    </div>
  
  );
}


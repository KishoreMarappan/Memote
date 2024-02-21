import React from 'react'
import "./Contact.css";
import Rocket from "./pappery-rocket.png"
import Qt from "./snoo3r.png"
import Kawai from "./snoo4.png"
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const log=useNavigate();
  return (
    <div className='contact'>
        <div className='k9'>
        <header >
            <h1>Memote</h1>
            <nav className='navigation'>
                <a href='#'rel='link' onClick={()=>log('/')}>Home</a>
                <a href='#'rel='link' onClick={()=>log('/Contact')}>Contact</a>
                <a href='#'rel='link' onClick={()=>log('/Register')}>SignUp</a>
                <a href='#'rel='link' onClick={()=>log('/Login')}>LogIn</a>
            </nav>
        </header>
        <div className='query'>
          <img  id='question' src={Qt}></img>
        </div>
        <div id='scroll'>
        <h1 id='chead'>Having Queries ?</h1>
        <p id='cpara'>Have a question, suggestion, or just want to share a meme-worthy moment? We'd love to hear from you! Feel free to reach out using the contact form below, or connect with us on social media for the latest updates and community highlights.</p>
        </div>
        <img  id='rocketery' src={Rocket}></img>
        <h2 id='media'>Contact us!</h2>
        <p id='mediapara'>
          Stay in the loop by following Memote on our social media channels. Join the conversation, share your favorite memes, and be part of our growing community.<br></br>
          Facebook: <a href='https://www.facebook.com/memoteofficial' rel='link'>https://www.facebook.com/memoteofficial</a><br></br>
          Twitter: <a href='https://twitter.com/memote_tweets' rel='link'>https://twitter.com/memote_tweets</a><br></br>
          Instagram:<a href='https://www.instagram.com/memote.official'rel='link'>https://www.instagram.com/memote.official</a><br></br>
          </p>
          <h3 id='support'>Support and Feedback</h3>
          <p id='support-para'>Need assistance or want to provide feedback?contact our friendly support team at<a href='support@memote.com' rel='link'> support@memote.com</a></p>
          <img  id='Kawai' src={Kawai}></img>
          </div>
          
        </div> 

    
  )
}

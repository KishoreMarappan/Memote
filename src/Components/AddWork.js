import React from 'react'
import Home1 from './Home1'
import './AddWork.css'
import { useNavigate } from 'react-router-dom'
export default function () {
  const log = useNavigate();
  return (
    <div className='Addwork'>
        <Home1/>
        <div className='Adder'>
        <h1 id='fh3'>Upload Your Meme</h1>
      <h2 id='fh4'>Share Your Humor with the Community!</h2>

      <form encType="multipart/form-data">
        <label htmlFor="memeFile">Choose a Meme File:</label>
        <input
          type="file"
          id="memeFile"
          accept="image/*"
        />
        <label htmlFor="caption">Add a Caption:</label>
        <input 
          type="text"
          id="caption"
          name="caption"
        />
        <button  className='img-subbmit' type="button" onClick={()=>log('/Main')}>
          Submit
        </button>
        <div >
          <p className='guide'>Guidelines for Uploading:</p>
          <ul id='ul'>
            <li>Please ensure your meme follows our community guidelines.</li>
            <li>Keep it funny and respectful!</li>
            <li>Avoid offensive or inappropriate content.</li>
          </ul>
        </div>   
      </form>
      <p>
        By uploading your meme, you agree to our{' '}
        <a href="#">Privacy Policy</a>.
      </p>

      <p>
        Please review our <a href="#">Terms and Conditions</a> before
        uploading.
      </p>
        </div>
    </div>
  )
}

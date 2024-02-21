import React from 'react';
import './LeaderBoard.css'
import Home1 from './Home1';
import Records from './Records.json';
import { useNavigate } from 'react-router-dom';

export default function LeaderBoard() {
  const log =useNavigate();
  
  const sortedRecords = Records.sort((a, b) => b.Likes - a.Likes);

  const top10Records = sortedRecords.slice(0, 10);

  return (
    <div className='overAll'>
      <Home1 />
      <div>
        <h2 className='heady'>Best meme creators of this month</h2><hr className='hrtag'></hr>
        <table className='table1'>
          <thead>
            <tr>
              <th>Rank</th>
              <th>User Name</th>
              <th>User ID</th>
              <th>Likes</th>
            </tr>
          </thead>
          <tbody>
            {top10Records.map((record, index) => (
              <tr key={record._id}>
                <td>{index + 1}</td>
                <td>{record.UserName}</td>
                <td>{record._id}</td>
                <td>{record.Likes}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className='home-goto' onClick={()=>log('/Main')}>Return</button>
      </div>
    </div>
  );
}

import React from 'react';
import './LeaderBoard.css'
import Records from './Records.json';
import { useNavigate } from 'react-router-dom';
import AdminHead from './AdminHead';
import './AdminLeaderBoard.css'
export default function AdminLeaderBoard() {
  const log =useNavigate();
  
  const sortedRecords = Records.sort((a, b) => b.Likes - a.Likes);

  const top10Records = sortedRecords.slice(0, 10);

  return (
    <div className='overAllAdmin'>
      <AdminHead />
      <div>
        <h2 className='headya'>Best meme creators of this month</h2><hr className='hrtaga'></hr>
        <table className='table1a'>
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
        <button className='home-goto' onClick={()=>log('/AdminHome')}>Return</button>
      </div>
    </div>
  );
}



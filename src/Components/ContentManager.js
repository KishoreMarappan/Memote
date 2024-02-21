import React from 'react';
import Home1 from './Home1';
import Records from './Records.json';
import { useNavigate } from 'react-router-dom';
import './ContentManager.css';
import AdminHead from './AdminHead';

export default function ContentManager() {
  const log = useNavigate();

  const sortedRecords = Records.sort((a, b) => b.Reports - a.Reports);

  const top10Records = sortedRecords.slice(0, 8);

  const handleDelete = (userId) => {
    const updatedRecords = Records.filter((record) => record._id !== userId);
    console.log('Updated Records:', updatedRecords);
  };

  return (
    <div className='overAl'>
      <AdminHead/>
      <div>
        <h2 className='heads'>Reports for the Meme content</h2>
        <hr className='hrtag1'></hr>
        <table className='table1-content'>
          <thead>
            <tr>
              <th>Rank</th>
              <th>User Name</th>
              <th>User ID</th>
              <th>Reports</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {top10Records.map((record, index) => (
              <tr key={record._id}>
                <td>{index + 1}</td>
                <td>{record.UserName}</td>
                <td>{record._id}</td>
                <td>{record.Reports}</td>
                <td>
                  <button className='delete-contnt' onClick={() => handleDelete(record._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className='home-goto' onClick={() => log('/AdminHome')}>
          Return
        </button>
      </div>
    </div>
  );
}

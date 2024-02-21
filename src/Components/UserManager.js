import React from 'react';
import Records from './Records.json';
import { useNavigate } from 'react-router-dom';
import './UserManager.css';
import AdminHead from './AdminHead';
export default function UserManager() {
  const log = useNavigate();

  const sortedRecords = Records.sort((a, b) => b.Reports - a.Reports);

  const top10Records = sortedRecords.slice(0, 8);

  const handleDelete = (userId) => {
    const updatedRecords = Records.filter((record) => record._id !== userId);
    console.log('Updated Records:', updatedRecords);
  };
  return (
    <div className='overAl-user'>
      <AdminHead />
      <div>
        <h2 className='heads-user'>Reports on Memers</h2>
        <hr className='hrtag1user'></hr>
        <table className='table1user'>
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
                  <button className='delete-user' onClick={() => handleDelete(record._id)}>Delete</button>
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

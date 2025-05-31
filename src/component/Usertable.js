// component/Usertable.js
import React from 'react';

const UserTable = ({ users, totalUsers, usersPerPage, currentPage, setCurrentPage, onViewUser }) => {
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  return (
    <div style={{ maxWidth: 800, margin: '20px auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Phone</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.email}</td>
              <td style={tdStyle}>{user.phone}</td>
              <td style={tdStyle}>
                <button
                  style={{ padding: '5px 10px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: 5 }}
                  onClick={() => onViewUser(user)}
                >
                  👁 View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', gap: 10 }}>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              padding: '5px 10px',
              backgroundColor: currentPage === i + 1 ? '#333' : '#ddd',
              color: currentPage === i + 1 ? 'white' : '#000',
              border: 'none',
              borderRadius: 5,
              cursor: 'pointer'
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const thStyle = { padding: 12, textAlign: 'left', borderBottom: '2px solid #ccc' };
const tdStyle = { padding: 10 };

export default UserTable;

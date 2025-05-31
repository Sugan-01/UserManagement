// component/Usermodal.js
import React from 'react';

const UserModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>User Details</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <button onClick={onClose} style={closeBtnStyle}>❌ Close</button>
      </div>
    </div>
  );
};

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const modalStyle = {
  backgroundColor: '#fff',
  padding: 20,
  borderRadius: 10,
  width: 300,
  boxShadow: '0 0 15px rgba(0,0,0,0.3)'
};

const closeBtnStyle = {
  marginTop: 15,
  padding: '8px 16px',
  backgroundColor: '#e74c3c',
  color: 'white',
  border: 'none',
  borderRadius: 5,
  cursor: 'pointer'
};

export default UserModal;

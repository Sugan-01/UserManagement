// component/Userform.js
import React, { useState } from 'react';

const AddUserForm = ({ onAdd }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email) {
      onAdd(form);
      setForm({ name: '', email: '', phone: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>Add New User</h2>
      <div style={{ marginBottom: 15 }}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #ccc' }}
          required
        />
      </div>
      <div style={{ marginBottom: 15 }}>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #ccc' }}
          required
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #ccc' }}
        />
      </div>
      <button
        type="submit"
        style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: 8 }}
      >
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;

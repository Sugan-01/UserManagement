// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './component/Layout';
import SearchBar from './component/Searchbar';
import AddUserForm from './component/Userform';
import UserTable from './component/Usertable';
import UserModal from './component/Usermodal';

const App = () => {
  const [users, setUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res,"222222222222222222")
        setUsers(res.data);
        setDisplayedUsers(res.data);
      });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase())
    );
    setDisplayedUsers(filtered);
    setCurrentPage(1);
  };

  const handleAddUser = (newUser) => {
    const updatedUsers = [...users, { ...newUser, id: users.length + 1 }];
    setUsers(updatedUsers);
    handleSearch(searchQuery);
  };

  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = displayedUsers.slice(indexOfFirst, indexOfLast);

  const navStyle = {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
    alignItems: 'center',
  };
  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  };

  return (
    <Router>
      <Layout>
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>🏠 Home</Link>
          <Link to="/add" style={linkStyle}>➕ Add User</Link>
          <Link to="/list" style={linkStyle}>📋 User List</Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <div>
              <h2>User Names</h2>
              <ul>
                {users.map(user => (
                  <li key={user.id}>{user.name}</li>
                ))}
              </ul>
            </div>
          } />

          <Route path="/add" element={
            <AddUserForm onAdd={handleAddUser} />
          } />

          <Route path="/list" element={
            <>
              <SearchBar onSearch={handleSearch} />
              <UserTable
                users={currentUsers}
                totalUsers={displayedUsers.length}
                usersPerPage={usersPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                onViewUser={setSelectedUser}
              />
              {selectedUser &&
                <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
              }
            </>
          } />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

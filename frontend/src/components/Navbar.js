import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>BDA CRM</Link>
      <div>
        {user ? (
          <>
            <span style={{ marginRight: 10 }}>Welcome, {user.name} ({user.role})</span>
            <button onClick={handleLogout} style={styles.btn}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: { background: '#2c3e50', padding: '1rem', display: 'flex', justifyContent: 'space-between', color: 'white' },
  link: { color: 'white', marginRight: '1rem', textDecoration: 'none' },
  btn: { background: '#e74c3c', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }
};

export default Navbar;
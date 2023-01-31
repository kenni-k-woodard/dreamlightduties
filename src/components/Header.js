import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext.js';
import { signOut } from '../services/auth.js';
import './Header.css';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <>
      <div>
        <h1>Dreamlight Duties</h1>
      </div>
      <div className="navBar">
        <a>
          <span></span>
        </a>
        <button onClick={handleLogout}>sign out</button>
      </div>
    </>
  );
}

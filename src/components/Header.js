import React, { useState, useContext, Link } from 'react';
import { UserContext, useUser } from '../context/UserContext.js';
import { signOut } from '../services/auth.js';
import './Header.css';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const { user, setUser } = useUser();

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
      <div className="titleBar">
        <h1>Dreamlight Duties</h1>
      </div>
      <div>
        <div className="navBar">
          {user && (
            <>
              <p>Hey there, {user.email}</p>
              <button onClick={handleLogout}>sign out</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

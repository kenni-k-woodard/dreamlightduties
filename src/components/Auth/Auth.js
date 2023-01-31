import React, { useState } from 'react';
import { useContext } from 'react';
import { NavLink, useParams, Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext.js';
import { authUser } from '../../services/auth.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useContext(UserContext);
  if (user) {
    return <Redirect to="/duties" />;
  }

  const submitAuth = async () => {
    //later
    try {
      const user = await authUser(email, password, type);
      setUser(user);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <nav>
        <h2>Welcome to Dreamlight Duties Tracker!</h2>
        <div>
          <NavLink to="/auth/sign-in">Sign-In</NavLink>
          <NavLink to="/auth/sign-up">Sign-Up</NavLink>
        </div>
        <div>
          <label>Email</label>
          <input className="input" type="email" onChange={(e) => setEmail(e.target.value)}></input>
          <label>Password</label>
          <input
            className="input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <button onClick={submitAuth}>Submit</button>
        </div>
      </nav>
    </div>
  );
}

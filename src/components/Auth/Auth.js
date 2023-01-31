import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const submitAuth = async () => {
    //later
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
          <input className="input" type="email"></input>
          <label>Password</label>
          <input className="input" type="password"></input>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </nav>
    </div>
  );
}

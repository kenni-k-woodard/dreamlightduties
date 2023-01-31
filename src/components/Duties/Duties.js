// import React from 'react';
import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext.js';

export default function Duties() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <p>dutiespage</p>
    </div>
  );
}

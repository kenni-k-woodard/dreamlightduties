import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const submitAuth = async () => {
    //later
  };

  return <div>hi</div>;
}

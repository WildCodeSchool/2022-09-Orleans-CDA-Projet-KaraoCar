import React, { useState } from 'react';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    fetch('http://localhost:3333/api/users/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Signup failed');
        }
        return response.json();
      })
      .then(data => {
        // go to page
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
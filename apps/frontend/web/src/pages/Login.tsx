import { useState } from 'react';

const Login = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();

    
    fetch('http://localhost:3333/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // , store auth token
        if (data.success) {
          // on success
        } else {
          // on fail
          setError(data.error);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">username:</label>
      <input
        type="username"
        id="username"
        value={username}
        onChange={(event) => setusername(event.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      {error && <div className="error">{error}</div>}
      <button type="submit">Log in</button>
    </form>
  );
};

export default Login;

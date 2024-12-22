import React, { useState } from "react";
import Home from "./Home";
import './App.css';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = process.env.REACT_APP_PASSWORD; 

  const handleLogin = (password: string) => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div className="locked-page">
      {isAuthenticated ? (
        <Home />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

const Login: React.FC<{ onLogin: (password: string) => void }> = ({ onLogin }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>hello sunny@hbd.com</h1>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="text-field"
      />
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default App;

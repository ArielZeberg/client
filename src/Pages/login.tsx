import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Assuming App.css is in the src directory

interface LoginPageProps {
  onLogin?: (username: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [investorName, setInvestorName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (investorName.trim() && password.trim()) {
      onLogin?.(investorName);
      // Additional login logic can go here
    }
  };

  const handleSignUp = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <input
          type="text"
          value={investorName}
          onChange={(e) => setInvestorName(e.target.value)}
          placeholder="Enter your name"
          className="input-field"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="input-field"
        />

        <button onClick={handleLogin} className="login-button">
          Login
        </button>

        <button onClick={handleSignUp} className="signup-button">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

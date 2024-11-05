// src/Pages/MainPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';


const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <h1>Welcome to Our Application</h1>
      <div className="button-container">
        <Link to="/about-us">
          <button>About Us</button>
        </Link>
        <Link to="/stock-graph">
          <button>Stock Graph</button>
        </Link>
        <Link to="/q-and-a">
          <button>Q & A</button>
        </Link>
        <Link to="/learn">
          <button>Learn</button>
        </Link>
        <Link to="/stock-information">
          <button>Stock Information</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;

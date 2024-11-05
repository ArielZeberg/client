// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/mainPage';
import AboutUs from './Pages/AboutUs';
import StockGraph from './Pages/StockGraph';
import QandA from './Pages/QandA';
import Learn from './Pages/Learn';
import StockInformation from './Pages/StockInformation';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/stock-graph" element={<StockGraph />} />
        <Route path="/q-and-a" element={<QandA />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/stock-information" element={<StockInformation />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Team from './pages/Team';
import Services from './pages/Services';
import { ConfigProvider } from 'antd';
import { theme } from 'antd';

const { defaultAlgorithm, defaultSeed } = theme;

const customTheme = {
  algorithm: defaultAlgorithm,
  token: {
    colorPrimary: '#EA4C89',
  },
};

function App() {
  return (
    <ConfigProvider theme={customTheme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/team" element={<Team />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
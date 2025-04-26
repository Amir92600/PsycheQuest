import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Quiz } from './pages/Quiz';
import { Results } from './pages/Results';
import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Layout>
  );
}

export default App;
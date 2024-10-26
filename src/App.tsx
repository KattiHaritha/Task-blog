import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/post/:id" element={<BlogDetail />} />
    </Routes>
  </Router>
);

export default App;
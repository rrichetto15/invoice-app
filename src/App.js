import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard/Dashboard';
import Invoice from './pages/invoice/Invoice';

const App = () => {
  return (
    <div>
      <h1>Sidebar</h1>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/invoice/:id" element={<Invoice />} />
      </Routes>
    </div>
  );
};

export default App;

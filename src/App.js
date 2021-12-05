import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Dashboard from './pages/dashboard/Dashboard';
import Invoice from './pages/invoice/Invoice';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <AppLayout>
      <Sidebar />
      <Main>
        <h1>Invoice App</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/invoice/:id" element={<Invoice />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Main>
    </AppLayout>
  );
};

const AppLayout = styled.div`
  display: flex;
`;

const Main = styled.main`
  max-width: 93rem;
  width: 100%;
  margin: 0 auto;
  padding: 6rem 10rem 3rem 10rem;
`;

export default App;

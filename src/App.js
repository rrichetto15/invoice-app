import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { useTheme } from './hooks/useTheme';

import Dashboard from './pages/dashboard/Dashboard';
import Invoice from './pages/invoice/Invoice';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

import Sidebar from './components/Sidebar';

const App = () => {
  const { theme } = useTheme();

  return (
    <AppLayout theme={theme}>
      <Sidebar />
      <Main>
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
  height: 100vh;
`;

const Main = styled.main`
  position: relative;
  max-width: 93rem;
  width: 100%;
  margin: 0 auto;
  padding: 6rem 10rem 3rem 10rem;
`;

export default App;

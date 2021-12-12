import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { useGlobal } from './hooks/useGlobal';

import Dashboard from './pages/dashboard/Dashboard';
import Invoice from './pages/invoice/Invoice';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

import Sidebar from './components/Sidebar';
import InvoiceModal from './components/InvoiceModal';

const App = () => {
  const { theme, showModal } = useGlobal();

  return (
    <Router>
      <AppLayout theme={theme}>
        <Sidebar />
        <Main>
          {showModal && <InvoiceModal />}
          <Container>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/invoice/:id" element={<Invoice />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Container>
        </Main>
      </AppLayout>
    </Router>
  );
};

const AppLayout = styled.div`
  display: flex;
  height: 100vh;
`;

const Main = styled.main`
  position: relative;
  width: 100%;
`;

const Container = styled.div`
  max-width: 93rem;
  margin: 0 auto;
  padding: 6rem 10rem 3rem 10rem;
`;

export default App;

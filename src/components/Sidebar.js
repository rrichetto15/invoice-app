import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useGlobal } from '../hooks/useGlobal';

import InvoiceModal from './InvoiceModal';

import logo from '../assets/logo.png';
import sun from '../assets/icon-sun.svg';
import moon from '../assets/icon-moon.svg';
import avatar from '../assets/image-avatar.jpg';

const Sidebar = () => {
  const { theme, changeTheme, showModal } = useGlobal();

  return (
    <SidebarWrap>
      <Link to="/">
        <img src={logo} alt="Invoice App" />
      </Link>
      <Navigation>
        <div>
          <button onClick={changeTheme}>
            {theme ? (
              <img src={moon} alt="Moon" />
            ) : (
              <img src={sun} alt="Sun" />
            )}
          </button>
        </div>
        <div>
          <button>
            <img className="avatar" src={avatar} alt="Avatar" />
          </button>
        </div>
      </Navigation>
      {showModal && <InvoiceModal />}
    </SidebarWrap>
  );
};

const SidebarWrap = styled.div`
  flex-shrink: 0;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 10rem;
  min-height: 100vh;
  background: var(--color-dark-3);
  border-radius: 0 2rem 2rem 0;
`;

const Navigation = styled.nav`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 9rem;
  }

  div:first-child {
    border-bottom: 1px solid #494e6e;
  }

  .avatar {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
  }
`;

export default Sidebar;

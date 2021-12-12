import React from 'react';
import styled from 'styled-components';

import { useGlobalContext } from '../../hooks/useGlobalContext';
import { useInvoiceContext } from '../../hooks/useInvoiceContext';

import Button from '../../components/Button';
import InvoiceList from './InvoiceList';
import Placeholder from './Placeholder';

import plus from '../../assets/icon-plus-circle.svg';

const Dashboard = () => {
  const { toggleModal } = useGlobalContext();
  const { invoices } = useInvoiceContext();

  return (
    <>
      <Header>
        <div>
          <h1>Invoices</h1>
          <p>No invoices</p>
        </div>
        <Utilities>
          <select name="filter" id="filter">
            <option value="status">Filter by status</option>
            <option value="amount">Filter by date</option>
            <option value="amount">Filter by amount</option>
          </select>
          <Button hasIcon onClick={toggleModal}>
            <img src={plus} alt="Create New Invoice" /> New Invoice
          </Button>
        </Utilities>
      </Header>
      {invoices.length > 0 ? (
        <InvoiceList invoices={invoices} />
      ) : (
        <Placeholder />
      )}
    </>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6.5rem;

  h1 {
    font-size: 3.2rem;
  }

  p {
    font-weight: 500;
    color: var(--color-light-2);
  }
`;

const Utilities = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

export default Dashboard;

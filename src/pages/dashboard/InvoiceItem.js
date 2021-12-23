import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import iconArrow from '../../assets/icon-arrow-right.svg';

const InvoiceItem = ({ invoice }) => {
  const { invoiceNumber, toName, issueDate, amount, status } = invoice;

  return (
    <InvoiceItemLink to="/">
      <span className="number">
        <span>#</span>
        {invoiceNumber}
      </span>
      <span className="date">{issueDate}</span>
      <span className="name">{toName}</span>
      <span className="amount">${amount}</span>
      <span className="status">
        <span className="status-inner">{status}</span>{' '}
      </span>
      <span className="arrow">
        <img src={iconArrow} alt="View Invoice Details" />
      </span>
    </InvoiceItemLink>
  );
};

const InvoiceItemLink = styled(Link)`
  display: grid;
  grid-template-columns: 8rem 13rem 16rem 11rem 9rem 2rem;
  justify-content: space-between;
  align-items: center;
  background: var(--invoice-item-background);
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 0.8rem;
  padding: 1.6rem 1.2rem 1.4rem 2.4rem;
  text-decoration: none;
  color: var(--color-white);

  .number {
    font-weight: 700;

    span {
      color: var(--color-primary-light-2);
    }
  }

  .date {
    color: var(--color-light-2);
  }

  .name {
    font-weight: 500;
  }

  .amount {
    font-size: 1.6rem;
    font-weight: 700;
  }

  .status {
    display: flex;
    justify-content: center;
    background: #2b2736;
    border-radius: 6px;
    padding: 1.2rem 2.4rem 1rem 2.4rem;

    .status-inner {
      color: #ff8f00;
      font-weight: 700;
    }
  }

  .arrow {
    display: flex;
    justify-content: center;
  }
`;

export default InvoiceItem;

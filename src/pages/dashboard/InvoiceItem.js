import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const InvoiceItem = ({ invoice }) => {
  const { invoiceNumber, toName, issueDate, amount, status } = invoice;

  return (
    <InvoiceItemLink to="/">
      <span>{invoiceNumber}</span>
      <span>{toName}</span>
      <span>{issueDate}</span>
      <span>{amount}</span>
      <span>{status}</span>
    </InvoiceItemLink>
  );
};

const InvoiceItemLink = styled(Link)`
  background: var(--invoice-item-background);
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 0.8rem;
  padding: 1.6rem 2.4rem;
  text-decoration: none;
  color: var(--color-white);
`;

export default InvoiceItem;

import React from 'react';
import styled from 'styled-components';

import InvoiceItem from './InvoiceItem';

const InvoiceList = ({ invoices }) => {
  return (
    <List>
      {invoices.map((invoice) => (
        <InvoiceItem key={invoice.id} invoice={invoice} />
      ))}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  li {
    display: flex;
    justify-content: space-between;
  }
`;

export default InvoiceList;

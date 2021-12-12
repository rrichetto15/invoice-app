import React from 'react';
import styled from 'styled-components';

const InvoiceList = ({ invoices }) => {
  return (
    <List>
      {invoices.map((invoice, i) => {
        const { address, city, zip, country } = invoice;

        return (
          <li key={i}>
            <span>{address}</span>
            <span>{city}</span>
            <span>{zip}</span>
            <span>{country}</span>
          </li>
        );
      })}
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

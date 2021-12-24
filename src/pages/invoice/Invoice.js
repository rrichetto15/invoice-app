import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useInvoiceContext } from '../../hooks/useInvoiceContext';

import Button from '../../components/Button';

import iconArrow from '../../assets/icon-arrow-left.svg';

const Invoice = () => {
  const [invoice, setInvoice] = useState('');
  const { id } = useParams();
  const { invoices } = useInvoiceContext();

  useEffect(() => {
    const currentInvoice = invoices.find(
      (invoice) => invoice.invoiceNumber === parseInt(id)
    );

    setInvoice(currentInvoice);
  }, [id, invoices]);

  const {
    invoiceNumber,
    fromAddress,
    fromCity,
    fromZip,
    fromCountry,
    toName,
    toEmail,
    toAddress,
    toCity,
    toZip,
    toCountry,
    issueDate,
    paymentTerms,
    projectDescription,
    amount,
    status,
  } = invoice;

  return (
    <InvoiceWrap>
      <BackLink to="/">
        {' '}
        <img src={iconArrow} alt="Go back" /> Go back
      </BackLink>
      <Header>
        <span className="status">
          <span className="status-inner">{status}</span>{' '}
        </span>
        <div className="button-flex">
          <Button to="/" color="gray">
            Edit
          </Button>
          <Button to="/" color="danger">
            Delete
          </Button>
          <Button to="/">Mark as Paid</Button>
        </div>
      </Header>
      <div>
        <h1>Invoice Page</h1>
        <p>{invoiceNumber}</p>
        <p>{toName}</p>
        <p>{issueDate}</p>
        <p>{amount}</p>
        <p>{status}</p>
      </div>
    </InvoiceWrap>
  );
};

const InvoiceWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: baseline;
  gap: 1rem;
  color: var(--color-white);
  font-weight: 500;
  text-decoration: none;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--invoice-item-background);
  border-radius: 0.8rem;
  padding: 2rem 3.2rem;

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

  .button-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
  }
`;

export default Invoice;

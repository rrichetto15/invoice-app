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
      <Body>
        <div className="head">
          <div>
            <h1>
              <span>#</span>
              {invoiceNumber}
            </h1>
            <p>{projectDescription}</p>
          </div>
          <div>
            <p>{fromAddress}</p>
            <p>{fromCity}</p>
            <p>{fromZip}</p>
            <p>{fromCountry}</p>
          </div>
        </div>
        <div className="main">
          <div className="flex-section">
            <div>
              <h3>Invoice Date</h3>
              <p className="bolded">{issueDate}</p>
            </div>
            <div>
              <h3>Payment Due</h3>
              <p className="bolded">{paymentTerms}</p>
            </div>
          </div>
          <div>
            <h3>Bill To</h3>
            <p className="bolded">{toName}</p>
            <div className="to-details">
              <p>{toAddress}</p>
              <p>{toCity}</p>
              <p>{toZip}</p>
              <p>{toCountry}</p>
            </div>
          </div>
          <div>
            <h3>Sent To</h3>
            <p className="bolded">{toEmail}</p>
          </div>
        </div>
        <Items>
          <div className="items">
            <ItemListGrid>
              <h3>Item Name</h3>
              <h3>QTY.</h3>
              <h3>Price</h3>
              <h3>Total</h3>
            </ItemListGrid>
            <ItemListGrid>
              <p>Banner Design</p>
              <p className="qty">1</p>
              <p className="price">$183.92</p>
              <p>$183.92</p>
            </ItemListGrid>
          </div>
          <div className="amount">
            <h3>Amount Due</h3>
            <p>${amount}</p>
          </div>
        </Items>
      </Body>
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

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  background: var(--invoice-item-background);
  border-radius: 0.8rem;
  padding: 4.8rem;

  h1 {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;

    span {
      color: var(--color-gray);
      font-weight: 500;
    }
  }

  .head {
    display: flex;
    justify-content: space-between;
  }

  .main {
    display: grid;
    grid-template-columns: 15rem 20rem 25rem;
    justify-content: space-between;

    h3 {
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--text-input-label);
      margin-bottom: 1.2rem;
    }

    .bolded {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .flex-section {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
    }

    .to-details {
      margin-top: 1.2rem;
    }
  }
`;

const Items = styled.div`
  .items {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    background: var(--color-dark-4);
    border-radius: 0.8rem 0.8rem 0 0;
    padding: 2.4rem;
  }

  .amount {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--color-dark-1);
    border-radius: 0 0 0.8rem 0.8rem;
    padding: 2.4rem;

    h3 {
      font-weight: 500;
    }

    p {
      font-size: 2.4rem;
      font-weight: 700;
    }
  }
`;

const ItemListGrid = styled.div`
  display: grid;
  grid-template-columns: 22.5rem 7.5rem 10rem 10rem;
  justify-content: space-between;

  & > *:last-child,
  & > *:nth-child(3) {
    text-align: right;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--text-input-label);
  }

  p {
    font-weight: 700;
  }

  .qty,
  .price {
    color: var(--color-light-2);
  }
`;

export default Invoice;

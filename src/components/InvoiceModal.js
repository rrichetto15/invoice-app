import React, { useState } from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

import { useGlobalContext } from '../hooks/useGlobalContext';
import { useInvoiceContext } from '../hooks/useInvoiceContext';

import Button from '../components/Button';

const InvoiceModal = () => {
  const [fromAddress, setFromAddress] = useState('');
  const [fromCity, setFromCity] = useState('');
  const [fromZip, setFromZip] = useState('');
  const [fromCountry, setFromCountry] = useState('');
  const [toName, setToName] = useState('');
  const [toEmail, setToEmail] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [toCity, setToCity] = useState('');
  const [toZip, setToZip] = useState('');
  const [toCountry, setToCountry] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [paymentTerms, setPaymentTerms] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const { toggleModal } = useGlobalContext();
  const { dispatch } = useInvoiceContext();

  const closeModal = (e) => {
    if (e.target.closest('#close-btn') || e.target.id === 'discard-btn') {
      toggleModal();
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    const invoice = {
      id: Math.floor(Math.random() * 9999999),
      invoiceNumber: Number(
        Math.floor(Math.random() * 99999)
          .toString()
          .padStart(6, '0')
      ),
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
      status: 'Pending',
      amount: 499.99,
    };

    dispatch({ type: 'CREATE', payload: invoice });
  };

  return (
    <Backdrop>
      <Modal>
        <button id="close-btn" onClick={closeModal}>
          <GrClose />
        </button>
        <Form onSubmit={(e) => e.preventDefault()}>
          <h2>New Invoice</h2>

          <Section>
            <h3>Bill From</h3>
            <ItemLabel>
              <span>Street Address</span>
              <input
                type="text"
                value={fromAddress}
                onChange={(e) => setFromAddress(e.target.value)}
              />
            </ItemLabel>
            <ItemFlex>
              <ItemLabel>
                <span>City</span>
                <input
                  type="text"
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                />
              </ItemLabel>
              <ItemLabel>
                <span>Zip Code</span>
                <input
                  type="text"
                  value={fromZip}
                  onChange={(e) => setFromZip(e.target.value)}
                />
              </ItemLabel>
              <ItemLabel>
                <span>Country</span>
                <input
                  type="text"
                  value={fromCountry}
                  onChange={(e) => setFromCountry(e.target.value)}
                />
              </ItemLabel>
            </ItemFlex>
          </Section>
          <Section>
            <h3>Bill To</h3>
            <ItemLabel>
              <span>Client's Name</span>
              <input
                type="text"
                value={toName}
                onChange={(e) => setToName(e.target.value)}
              />
            </ItemLabel>
            <ItemLabel>
              <span>Client's Email</span>
              <input
                type="text"
                value={toEmail}
                onChange={(e) => setToEmail(e.target.value)}
              />
            </ItemLabel>
            <ItemLabel>
              <span>Street Address</span>
              <input
                type="text"
                value={toAddress}
                onChange={(e) => setToAddress(e.target.value)}
              />
            </ItemLabel>
            <ItemFlex>
              <ItemLabel>
                <span>City</span>
                <input
                  type="text"
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                />
              </ItemLabel>
              <ItemLabel>
                <span>Zip Code</span>
                <input
                  type="text"
                  value={toZip}
                  onChange={(e) => setToZip(e.target.value)}
                />
              </ItemLabel>
              <ItemLabel>
                <span>Country</span>
                <input
                  type="text"
                  value={toCountry}
                  onChange={(e) => setToCountry(e.target.value)}
                />
              </ItemLabel>
            </ItemFlex>
          </Section>
          <Section>
            <ItemFlex>
              <ItemLabel>
                <span>Issue Date</span>
                <input
                  type="text"
                  value={issueDate}
                  onChange={(e) => setIssueDate(e.target.value)}
                />
              </ItemLabel>
              <ItemLabel>
                <span>Payment Terms</span>
                <input
                  type="text"
                  value={paymentTerms}
                  onChange={(e) => setPaymentTerms(e.target.value)}
                />
              </ItemLabel>
            </ItemFlex>
            <ItemLabel>
              <span>Project Description</span>
              <input
                type="text"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />
            </ItemLabel>
          </Section>
          <Section>
            <h3 className="item-list-heading">Item List</h3>
            <ItemListGrid>
              <span>Item Name</span>
              <span>Qty.</span>
              <span>Price</span>
              <span>Total</span>
              <span></span>
            </ItemListGrid>
            <ItemListGrid>
              <ItemLabel>
                <input type="text" />
              </ItemLabel>
              <ItemLabel>
                <input type="number" />
              </ItemLabel>
              <ItemLabel>
                <input type="number" />
              </ItemLabel>
              <span>156.00</span>
              <button>x</button>
            </ItemListGrid>
            <ItemListGrid>
              <ItemLabel>
                <input type="text" />
              </ItemLabel>
              <ItemLabel>
                <input type="number" />
              </ItemLabel>
              <ItemLabel>
                <input type="number" />
              </ItemLabel>
              <span>156.00</span>
              <button>x</button>
            </ItemListGrid>
            <Button color="gray">+ Add New Item</Button>
          </Section>
          <Buttons>
            <Button id="discard-btn" color="white" onClick={closeModal}>
              Discard
            </Button>
            <div>
              <Button color="gray" onClick={submitForm}>
                Save as Draft
              </Button>
              <Button onClick={submitForm}>Save & Send</Button>
            </div>
          </Buttons>
        </Form>
      </Modal>
    </Backdrop>
  );
};

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  background: rgba(10, 11, 19, 0.5);
  width: calc(100vw - 10rem);
  min-height: 100vh;
`;

const Modal = styled.div`
  position: relative;
  left: 0;
  background: var(--base-background);
  width: 62rem;
  border-radius: 0 2rem 2rem 0;
  height: 100vh;
  padding: 6rem 4.4rem 3rem 6rem;
  animation: fadeIn 0.5s ease-in-out;

  #close-btn {
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;

    svg {
      height: 1.8rem;
      width: 1.8rem;

      path {
        stroke: var(--color-white);
        stroke-width: 4;
      }
    }
  }
`;

const Form = styled.form`
  overflow: scroll;
  padding-right: 1.6rem;
  height: calc(100% - 8rem);

  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 3rem;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 5rem;

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-primary);

    &.item-list-heading {
      font-size: 1.8rem;
      color: var(--color-primary-light-2);
    }
  }
`;

const ItemLabel = styled.label`
  width: 100%;

  span {
    display: block;
    color: var(--text-input-label);
    font-weight: 500;
    margin-bottom: 1rem;
  }

  input {
    color: var(--text-color);
    font-weight: 700;
    width: 100%;
    background: var(--input-background);
    border: 1px solid var(--input-border);
    border-radius: 4px;
    padding: 1.6rem 2rem;

    &:focus {
      outline: none;
      border: 1px solid var(--color-primary);
    }
  }
`;

const ItemFlex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.4rem;
`;

const ItemListGrid = styled.div`
  display: grid;
  grid-template-columns: 20rem 5rem 7.5rem 7.5rem 2rem;
  justify-content: space-between;
`;

const Buttons = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 2rem 6rem;
  border-radius: 0 2rem 2rem 0;
  background: var(--base-background);
  background: transparent;
  box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.2);

  & > div {
    display: flex;
    gap: 1rem;
  }
`;

export default InvoiceModal;

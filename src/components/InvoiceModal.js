import React from 'react';
import styled from 'styled-components';

const InvoiceModal = () => {
  return (
    <Backdrop>
      <Modal>
        <Content>
          <h2>New Invoice</h2>
          <Section>
            <h3>Bill From</h3>
            <ItemLabel>
              <span>Street Address</span>
              <input type="text" />
            </ItemLabel>
            <ItemFlex>
              <ItemLabel>
                <span>City</span>
                <input type="text" />
              </ItemLabel>
              <ItemLabel>
                <span>Zip Code</span>
                <input type="text" />
              </ItemLabel>
              <ItemLabel>
                <span>Country</span>
                <input type="text" />
              </ItemLabel>
            </ItemFlex>
          </Section>
        </Content>
      </Modal>
    </Backdrop>
  );
};

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 9;
  background: rgba(10, 11, 19, 0.5);
  width: 100vw;
  height: 100vh;
`;

const Modal = styled.div`
  background: var(--base-background);
  width: 62rem;
  border-radius: 0 2rem 2rem 0;
  height: 100%;
  padding: 6rem 6rem 3rem 6rem;
`;

const Content = styled.div`
  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 3.2rem;
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
  }
`;

const ItemLabel = styled.label`
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
  gap: 2.4rem;
`;

export default InvoiceModal;

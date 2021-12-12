import React from 'react';
import styled from 'styled-components';

import { useGlobal } from '../hooks/useGlobal';

import Button from '../components/Button';

const InvoiceModal = () => {
  const { toggleModal } = useGlobal();

  const handleClick = (e) => {
    if (e.target.id === 'backdrop') {
      toggleModal();
    }
  };

  return (
    <Backdrop id="backdrop" onClick={handleClick}>
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
        <Buttons>
          <Button color="white">Discard</Button>
          <div>
            <Button color="gray">Save as Draft</Button>
            <Button>Save & Send</Button>
          </div>
        </Buttons>
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
  padding: 6rem 6rem 3rem 6rem;
  animation: fadeIn 0.5s ease-in-out;
`;

const Content = styled.div`
  overflow: scroll;
  height: calc(100% - 8rem);

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

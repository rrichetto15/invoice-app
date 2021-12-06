import React from 'react';
import styled from 'styled-components';

import illustration from '../../assets/illustration-empty.svg';

const Placeholder = () => {
  return (
    <PlaceholderWrap>
      <img
        src={illustration}
        alt="The dashboard is empty. Create a new invoice."
      />
      <h2>There is nothing here</h2>
      <p>
        Create an invoice by clicking the <span>New Invoice</span> button.
      </p>
    </PlaceholderWrap>
  );
};

const PlaceholderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 27rem;
  margin: 0 auto;

  img {
    margin-bottom: 6rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 500;

    span {
      font-weight: 700;
    }
  }
`;

export default Placeholder;

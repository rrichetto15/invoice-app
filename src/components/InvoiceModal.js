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
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
            velit quasi recusandae architecto optio nulla, doloremque unde illum
            nam minima impedit modi sapiente eveniet magni non, praesentium ea
            vel! Sequi voluptates et dicta, nisi architecto laudantium illo
            adipisci similique officiis explicabo quo aperiam repellat labore
            numquam quam unde possimus nesciunt dignissimos? Incidunt itaque
            quisquam delectus possimus laborum in provident, saepe nemo! Omnis
            iste est exercitationem molestiae optio labore dignissimos tempore
            quidem consequuntur cumque? Vitae nulla dolorem expedita et totam
            corporis omnis, officiis doloremque quibusdam harum consequatur quae
            nemo nostrum tempora voluptas ratione laudantium sit voluptates
            cumque! Totam distinctio quaerat deserunt veritatis enim similique
            ratione, accusantium iste quibusdam eius nobis vel possimus quam in
            molestias. Officia earum dolores accusantium tempore hic quo
            blanditiis maiores soluta unde nihil eum optio nostrum provident
            odio qui, omnis temporibus odit officiis magnam veniam laborum
            exercitationem. Dolores earum quas incidunt quidem suscipit eos qui
            quo accusantium, in expedita necessitatibus aliquid maiores
            molestiae amet, eveniet, voluptates optio quaerat voluptate labore!
            At sunt ad exercitationem assumenda, amet saepe illum tenetur cum
            sed, aperiam nam reprehenderit recusandae ratione atque dolor quasi
            eius facilis? Quas architecto laborum cupiditate pariatur digni.
            itationem assumenda, amet saepe illum tenetur cum sed, aperiam nam
            reprehenderit recusandae ratione atque dolor quasi eius facilis?
            Quas architecto laborum cupiditate pariatur digni. itationem
            assumenda, amet saepe illum tenetur cum sed, aperiam nam
            reprehenderit recusandae ratione atque dolor quasi eius facilis?
            Quas architecto laborum cupiditate pariatur digni. Quas architecto
            laborum cupiditate pariatur digni. itationem assumenda, amet saepe
            illum tenetur cum sed, aperiam nam reprehenderit recusandae ratione
            atque dolor quasi eius facilis? Quas architecto laborum cupiditate
            pariatur digni. Quas architecto laborum cupiditate pariatur digni.
            itationem assumenda, amet saepe illum tenetur cum sed, aperiam nam
            reprehenderit recusandae ratione atque dolor quasi eius facilis?
            Quas architecto laborum cupiditate pariatur digni. Quas architecto
            laborum cupiditate pariatur digni. itationem assumenda, amet saepe
            illum tenetur cum sed, aperiam nam reprehenderit recusandae ratione
            atque dolor quasi eius facilis? Quas architecto laborum cupiditate
            pariatur digni. Quas architecto laborum cupiditate pariatur digni.
            itationem assumenda, amet saepe illum tenetur cum sed, aperiam nam
            reprehenderit recusandae ratione atque dolor quasi eius facilis?
            Quas architecto laborum cupiditate pariatur digni. Quas architecto
            laborum cupiditate pariatur digni. itationem assumenda, amet saepe
            illum tenetur cum sed, aperiam nam reprehenderit recusandae ratione
            atque dolor quasi eius facilis? Quas architecto laborum cupiditate
            pariatur digni.
          </p>
        </Content>
        <Buttons>
          <button>Discard</button>
          <div>
            <button>Save as Draft</button>
            <button>Save & Send</button>
          </div>
        </Buttons>
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
  width: calc(100vw - 10rem);
  min-height: 100vh;
`;

const Modal = styled.div`
  position: relative;
  /* overflow: scroll; */
  background: var(--base-background);
  width: 62rem;
  border-radius: 0 2rem 2rem 0;
  height: 100vh;
  padding: 6rem 6rem 3rem 6rem;
`;

const Content = styled.div`
  border: 1px solid gray;
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
  padding: 3rem 6rem;
  border-radius: 0 2rem 2rem 0;
  background: var(--base-background);
  background: transparent;
  box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.2);
`;

export default InvoiceModal;

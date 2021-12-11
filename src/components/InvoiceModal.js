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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iure
            a sint consequatur non, repellendus quos facilis accusamus, et
            suscipit nesciunt aspernatur quo aperiam ipsum doloremque, deserunt
            sit veritatis odio nostrum vero nisi! Ab quaerat laboriosam minus
            quae ullam corrupti, aut nihil officia nostrum dignissimos debitis
            odit facere dolorum voluptatibus consequuntur, labore ipsum
            reiciendis. Consequuntur repellat enim, architecto, velit
            reprehenderit praesentium animi voluptate ullam deleniti eos impedit
            dolore nobis tempore doloremque voluptatem, obcaecati aperiam nam
            provident blanditiis numquam officia eaque perferendis explicabo
            necessitatibus. Aliquid facilis aspernatur necessitatibus provident
            ad, omnis non? Minima ducimus omnis quae nobis laborum, voluptates
            natus expedita impedit eum dicta ad! Molestiae quae sit nobis iusto
            natus, soluta facere tempora deserunt dolorum quidem repellat
            recusandae similique doloremque blanditiis! Eos deserunt
            repudiandae, quidem soluta eveniet ipsa labore? Tempore quaerat
            molestias itaque eos earum optio voluptas dolorem deserunt! Quaerat
            incidunt, voluptas non culpa aliquam minima omnis similique earum
            voluptatibus nam sunt? Tempora commodi, et dolores culpa aperiam
            quia itaque minus error saepe sapiente recusandae? Aperiam veritatis
            praesentium molestiae sequi cumque possimus commodi et eaque
            necessitatibus ex error, a fugit dignissimos totam, enim eius vero
            provident omnis vel adipisci incidunt eveniet architecto. Ab dolore
            vero molestias alias voluptate culpa itaque facere. Laudantium ipsa
            dicta, earum corporis aspernatur sint amet qui ea incidunt
            cupiditate quis inventore ad? Numquam, incidunt. Dolores ducimus
            fugiat officiis eaque molestiae laboriosam non qui! Amet excepturi
            tempore accusantium id veritatis incidunt, corrupti magnam unde
            iusto. Aperiam repellat, cumque voluptatibus consectetur eveniet
            modi ipsa consequatur excepturi unde tempore sequi necessitatibus
            doloremque obcaecati qui suscipit animi incidunt minima aliquam
            architecto fugit voluptatum, enim ab atque! Beatae, enim illo! Earum
            molestias dignissimos similique accusamus amet obcaecati, veritatis
            ipsam distinctio voluptas accusantium iure molestiae placeat
            quibusdam soluta ex reprehenderit dolore totam? Recusandae quam
            dicta veniam, a culpa repudiandae numquam facere ad perferendis
            voluptate molestiae, earum sed similique. Quasi iste error
            laudantium, deserunt tempore corrupti unde, repellat neque vel,
            nesciunt fugit iure vero. Ea nobis autem at similique, itaque
            voluptate illum laudantium repellendus quidem doloribus quia
            expedita, assumenda ducimus consectetur voluptatum iste, sunt
            officiis totam deserunt voluptatibus magnam atque. Aliquid
            accusantium odit nobis similique rerum corporis incidunt
            reprehenderit, architecto pariatur? Ullam voluptatem molestias velit
            obcaecati error accusantium, cumque culpa modi placeat consequuntur?
            Harum illum quod, reprehenderit ipsa non atque enim officiis tempora
            repellat nemo qui dicta, impedit, blanditiis alias perspiciatis
            voluptate rem excepturi architecto in saepe laudantium totam iusto
            quidem deleniti? Perspiciatis, atque recusandae! Voluptatibus nobis
            modi esse ratione itaque, deserunt iste mollitia cupiditate!
            Assumenda ducimus nesciunt ullam dolorem sint dolor, quo eaque rem
            deserunt quae iste voluptates. A, necessitatibus eaque atque nulla
            iusto, eos similique est magnam odit, illo perferendis iste sed
            laboriosam repellendus ipsum architecto molestias eveniet et
            laborum. Voluptates in dolorum similique optio nemo blanditiis,
            suscipit qui aliquid eveniet neque nam odio tenetur, minima
            assumenda ipsum modi velit, error aspernatur minus debitis ad? Minus
            commodi doloremque nemo, dolores aut officia sed minima odit
            possimus accusantium aspernatur laboriosam quae repudiandae nobis
            deserunt unde eos laborum culpa exercitationem impedit, voluptatem
            inventore.
          </p>
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
  animation: fadeIn 1s ease;
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

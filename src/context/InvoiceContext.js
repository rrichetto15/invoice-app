import { createContext, useReducer } from 'react';

export const InvoiceContext = createContext();

const initialState = [
  {
    id: Math.floor(Math.random() * 9999999),
    invoiceNumber: 384928,
    // invoiceNumber: Number(
    //   Math.floor(Math.random() * 99999)
    //     .toString()
    //     .padStart(6, '0')
    // ),
    fromAddress: '19 Union Terrace',
    fromCity: 'London',
    fromZip: 'E1 3EZ',
    fromCountry: 'United Kingdom',
    toName: 'Alex Grim',
    toEmail: 'alexgrim@mail.com',
    toAddress: '84 Church Way',
    toCity: 'Bradford',
    toZip: 'BD1 9PB',
    toCountry: 'United Kingdom',
    issueDate: 'Aug 21 2021',
    paymentTerms: '30 days',
    projectDescription: 'Graphic Design',
    status: 'Pending',
    amount: 556.02,
  },
];

const invoiceReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.payload];
    default:
      return state;
  }
};

export const InvoiceContextProvider = ({ children }) => {
  const [invoices, dispatch] = useReducer(invoiceReducer, initialState);

  const value = { invoices, dispatch };

  return (
    <InvoiceContext.Provider value={value}>{children}</InvoiceContext.Provider>
  );
};

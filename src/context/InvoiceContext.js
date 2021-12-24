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
    fromAddress: '123 Main St',
    fromCity: 'Moscow',
    fromZip: '83843',
    fromCountry: 'USA',
    toName: 'Ryan Richetto',
    toEmail: 'ryan1241@gmail.com',
    toAddress: '1234 My Street',
    toCity: 'Maple Grove',
    toZip: '55311',
    toCountry: 'USA',
    issueDate: 'Oct 10, 2021',
    paymentTerms: '30 days',
    projectDescription: 'A great project',
    status: 'Pending',
    amount: 499.99,
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

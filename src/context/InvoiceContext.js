import { createContext, useReducer } from 'react';

export const InvoiceContext = createContext();

const initialState = [
  {
    address: '123 North St',
    city: 'Dallas',
    zip: 78392,
    country: 'USA',
  },
  {
    address: '382 South Ave',
    city: 'San Antonio',
    zip: 92829,
    country: 'USA',
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

import { createContext, useReducer } from 'react';

export const InvoiceContext = createContext();

const initialState = [
  {
    invoiceNumber: 394839,
    issueDate: 'Due 19 Apr 2022',
    toName: 'John Doe',
    amount: 512.02,
    status: 'Pending',
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

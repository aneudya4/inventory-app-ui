import React, { useContext } from 'react';

export const useApiContext = () => useContext(ApiContext);
const ApiContext = React.createContext({
  products: [],
  orders: [],
  user: null,
  setUser: () => {},
});

export default ApiContext;

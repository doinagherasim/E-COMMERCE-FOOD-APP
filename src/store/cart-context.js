import React from 'react';

const CartContext =  React.createContext({
    item: [],
    amount: 0,
    addItem:(item) => {},
    removeItem: (item) => {},
    clearCart: () => {}
});

export default  CartContext;


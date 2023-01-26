import React, {useState} from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsSown] = useState(false);

  const showCartHandler = () => {
        setCartIsSown(true);
  }

  const hideCartHandler = () => {
    setCartIsSown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose = {hideCartHandler} />}
      <Header onShowCart = {showCartHandler}/>
          <main>
            <Meals/>
          </main>
    </CartProvider>
  );
}

export default App;

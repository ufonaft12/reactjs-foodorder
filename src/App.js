import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {

 const [cartIsShown, setCartIsShown] = useState(false);

 function showCardHandler() {
  setCartIsShown(true);
 }

 function hideCardHandler() {
  setCartIsShown(false);
 }

  return (
    <CartProvider>
      <div className="find_wrapper">
      {cartIsShown && <Cart onClose={hideCardHandler}/>}
      </div>
      <Header onShowCart={showCardHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

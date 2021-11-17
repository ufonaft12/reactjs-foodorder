import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

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
      {cartIsShown && <div className="find"> Card...</div>}
      </div>
      <Header onShowCart={showCardHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

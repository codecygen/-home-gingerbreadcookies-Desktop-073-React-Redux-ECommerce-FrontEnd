import Cart from "./Cart";
import classes from './NavBar.module.scss';

import { useState } from "react";

const NavBar = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const cartHandler = () => {
    setCartVisible(prevState => !prevState);
  };

  return (
    <>
      <nav className={classes.navbar}>
        <ul>
          <li><h1>Fülhaus Shop</h1></li>
          <li><button onClick={cartHandler}>CART</button></li>
        </ul>

      </nav>

      <Cart cartVisible={cartVisible} />
    </>
  );
};

export default NavBar;
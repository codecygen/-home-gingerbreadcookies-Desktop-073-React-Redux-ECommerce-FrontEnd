import Cart from "./Cart";
import classes from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li><h1>Fülhaus Shop</h1></li>
        <li><button>CART</button></li>
      </ul>

      {/* <Cart /> */}
    </nav>
  );
};

export default NavBar;
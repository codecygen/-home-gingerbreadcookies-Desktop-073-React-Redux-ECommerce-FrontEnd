import Cart from "./Cart";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>Fülhaus Shop</li>
        <li><button>CART</button></li>
      </ul>

      <Cart />
    </nav>
  );
};

export default NavBar;
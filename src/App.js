import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/homepage/HomePage";
import Products from './components/products/Products';

const App = () => {
  return (
    <main>
      <NavBar />
      <HomePage />
      <Products />
    </main>
  );
};

export default App;
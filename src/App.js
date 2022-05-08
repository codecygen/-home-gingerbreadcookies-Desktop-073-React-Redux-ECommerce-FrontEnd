import { useState, useEffect, useCallback } from 'react';

import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/homepage/HomePage";
import Products from './components/products/Products';

const App = () => {

  const [productsData, setProductsData] = useState([]);

  const fetchProductsHandler = useCallback(async () => {
    const fethLink = 'https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6';

    try {
      const response = await fetch(fethLink);

      if (!response.ok) {
        throw new Error(`Something went wrong. HTTP status: ${response.status}`);
      }

      const result = await response.json();

      const products = result.data.products;

      const allProductData = [];

      for (const key in products) {
        allProductData.push({
          id: products[key]._id,
          image: products[key].imageURLs[0],
          name: products[key].fulhausCategory.name,
          brand: products[key].fulhausProductName,
          price: products[key].retailPrice
        });
      }

      setProductsData(allProductData);
    }
    catch (err) {
      console.error(err)
    }
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  console.log(productsData);

  return (
    <main>
      <NavBar />
      <HomePage />
      <Products productsList={productsData} />
    </main>
  );
};

export default App;
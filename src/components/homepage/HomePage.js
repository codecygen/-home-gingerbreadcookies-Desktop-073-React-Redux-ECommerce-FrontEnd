import classes from './HomePage.module.scss';

const HomePage = () => {
  return (
    <header className={classes.home}>
      <div>
        <h1>Patio Furniture</h1>
        <a href='#products-section'>SHOP</a>
      </div>
    </header>
    
  );
};

export default HomePage;
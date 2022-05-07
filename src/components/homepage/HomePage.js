import HomeImage from '../../assets/HomeImage.jpg';
import classes from './HomePage.module.scss';

const HomePage = () => {
  return (
    <section className={classes.home}>
      <img src={HomeImage} />

      <div>
        <h1>Patio Furniture</h1>
        <button>SHOP</button>
      </div>
    </section>
    
  );
};

export default HomePage;
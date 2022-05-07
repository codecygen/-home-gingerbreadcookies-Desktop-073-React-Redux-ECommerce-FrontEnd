import HomeImage from '../../assets/HomeImage.jpg';

const HomePage = () => {
  return (
    <section>
      <img src={HomeImage} />

      <div>
        <h1>Patio Furniture</h1>
        <button>SHOP</button>
      </div>
    </section>
    
  );
};

export default HomePage;
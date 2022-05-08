import ProductCard from './ProductCard';

import classes from './Products.module.scss';

const Products = (props) => {

    const cartItems = props.productsList.map(item => (
        <ProductCard 
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            brand={item.brand}
            price={item.price}
        />
    ));

    return (
        <section className={classes.products} id='products-section'>
            {cartItems}
        </section>
    );
};

export default Products;
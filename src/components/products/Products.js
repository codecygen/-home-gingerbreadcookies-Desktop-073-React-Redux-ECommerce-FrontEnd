import ProductCard from './ProductCard';

import classes from './Products.module.scss';

import Stool from '../../assets/Stool.png';

const Products = () => {

    const cartItemList = [
        {
            id: 'a0',
            image: Stool,
            name: 'Stool',
            brand: 'Brand',
            price: 900
        },

        {
            id: 'a1',
            image: Stool,
            name: 'Stool 2',
            brand: 'Brand 2',
            price: 1000
        },

        {
            id: 'a2',
            image: Stool,
            name: 'Stool 3',
            brand: 'Brand 3',
            price: 1000
        },

        {
            id: 'a3',
            image: Stool,
            name: 'Stool 4',
            brand: 'Brand 4',
            price: 1000
        },
    ];

    const cartItems = cartItemList.map(item => (
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
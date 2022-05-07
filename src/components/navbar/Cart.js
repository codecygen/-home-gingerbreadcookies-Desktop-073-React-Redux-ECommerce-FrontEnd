import ItemCard from './ItemCard';

import classes from './Cart.module.scss';

import Stool from '../../assets/Stool.png';

const Cart = () => {

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
            id: 'a1',
            image: Stool,
            name: 'Stool 2',
            brand: 'Brand 2',
            price: 1000
        },

        {
            id: 'a1',
            image: Stool,
            name: 'Stool 2',
            brand: 'Brand 2',
            price: 1000
        },
        
        {
            id: 'a1',
            image: Stool,
            name: 'Stool 2',
            brand: 'Brand 2',
            price: 1000
        },
    ];

    const cartItems = cartItemList.map(item => (
        <ItemCard
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            brand={item.brand}
            price={item.price}
        />
    ));

    return (
        <div className={classes.cart}>
            <div className={classes['cart-top']}>
                {cartItems}
            </div>
            
            <div className={classes['cart-bottom']}>
                <div>
                    <h2>Total:</h2>
                    <h2>$1800</h2>
                </div>
                <button>CHECKOUT</button>
            </div>
        </div>
    );
};

export default Cart;
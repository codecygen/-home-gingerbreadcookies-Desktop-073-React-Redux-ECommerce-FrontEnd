import { useSelector } from 'react-redux';

import ItemCard from './ItemCard';

import classes from './Cart.module.scss';

import Stool from '../../assets/Stool.png';

const Cart = (props) => {

    const cartItemList = useSelector(state => state.cart.items);
    const subTotalPrice = useSelector(state => state.cart.totalPrice);

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

    const cartClasses = props.cartVisible ? 
        `${classes.cart} ${classes['cart-active']}` : classes.cart
    ;

    return (
        <div className={cartClasses}>
            <div className={classes['cart-top']}>
                {cartItems}
            </div>
            
            <div className={classes['cart-bottom']}>
                <div>
                    <h2>Total:</h2>
                    <h2>${subTotalPrice}</h2>
                </div>
                <button>CHECKOUT</button>
            </div>
        </div>
    );
};

export default Cart;
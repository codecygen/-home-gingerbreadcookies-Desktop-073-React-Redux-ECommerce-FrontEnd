import ItemCard from './ItemCard';

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
        <div>
            {cartItems}

            <p>$1800</p>
            <button>CHECKOUT</button>
        </div>
    );
};

export default Cart;
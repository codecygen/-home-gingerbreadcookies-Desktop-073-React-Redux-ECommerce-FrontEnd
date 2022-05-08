import { useDispatch } from "react-redux";

import { AiOutlinePlus } from "react-icons/ai";

import { cartActions } from "../../store/cart-slice";

import classes from './ProductCard.module.scss';

const ProductCard = props => {

    const dispatch = useDispatch();

    const addItemHandler = () => {
        const newItemRequest = {
            id: props.id,
            image: props.image,
            name: props.name,
            brand: props.brand,
            price: props.price
        };
        
        dispatch(cartActions.addItemToCart(newItemRequest));
    }

    return (
        <div className={classes.card}>
            <img
                src={props.image}
                alt={props.name}
            />

            <div className={classes.info}>
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.brand}</p>
                </div>

                <div>
                    <button onClick={addItemHandler}><AiOutlinePlus /> Add to Cart</button>
                    <p>${props.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
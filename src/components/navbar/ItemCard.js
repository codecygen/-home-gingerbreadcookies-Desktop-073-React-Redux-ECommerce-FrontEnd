import { useDispatch } from "react-redux";

import { ImCross } from "react-icons/im";

import { cartActions } from "../../store/cart-slice";

import classes from './ItemCard.module.scss';

const ItemCard = props => {
    const dispatch = useDispatch();

    const deleteItemHandler = () => {
        dispatch(cartActions.removeItemFromCart(props.id));
    }

    return (
        <section className={classes['item-card']}>
            <img
                src={props.image}
                alt={props.name}
            />

            <div className={classes.description}>
                <div>
                    <p>{props.name}</p>
                    <p>{props.brand}</p>
                </div>

                <p>${props.price}</p>
            </div>

            <button onClick={deleteItemHandler}><ImCross /></button>
        </section>
    );
};

export default ItemCard;
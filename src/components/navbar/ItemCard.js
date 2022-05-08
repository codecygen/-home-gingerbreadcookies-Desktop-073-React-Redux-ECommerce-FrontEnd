import { ImCross } from "react-icons/im";

import classes from './ItemCard.module.scss';

const ItemCard = props => {
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

            <button><ImCross /></button>
        </section>
    );
};

export default ItemCard;
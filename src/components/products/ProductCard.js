import { AiOutlinePlus } from "react-icons/ai";

import classes from './ProductCard.module.scss';

const ProductCard = props => {
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
                    <button><AiOutlinePlus /> Add to Cart</button>
                    <p>${props.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
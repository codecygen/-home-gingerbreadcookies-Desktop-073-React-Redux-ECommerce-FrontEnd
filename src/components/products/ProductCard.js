import { AiOutlinePlus } from "react-icons/ai";

const ProductCard = props => {
    return (
        <div>
            <img
                src={props.image}
                alt={props.name}
            />

            <div>
                <div>
                    <p>{props.name}</p>
                    <p>{props.brand}</p>
                </div>

                <div>
                    <button><AiOutlinePlus /> Add to Cart</button>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
import { ImCross } from "react-icons/im";

const ItemCard = props => {
    return (
        <section>
            <img
                src={props.image}
                alt={props.name}
            />

            <div>
                <div>
                    <p>{props.name}</p>
                    <p>{props.brand}</p>
                </div>

                <p>{props.price}</p>
            </div>

            <button><ImCross /></button>
        </section>
    );
};

export default ItemCard;
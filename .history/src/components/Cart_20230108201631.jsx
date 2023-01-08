import { useContext } from "react";
import { ShopContext } from "../context";

function Cart(props) {
    const {quantity = 0, handleBasketShow = Function.prototype} = useContext(ShopContext);

    return (
        <div className="cart cyan lighten-3" onClick={handleBasketShow}>
            <i className="material-icons">add_shopping_cart</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    )
}

export {Cart};
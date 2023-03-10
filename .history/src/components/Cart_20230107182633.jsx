function Cart(props) {
    const {quantity = 0, handleBasketShow = Function.prototype} = props;

    return (
        <div className="cart cyan lighten-4" onClick={handleBasketShow}>
            <i className="material-icons">add_shopping_cart</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    )
}

export {Cart};
function Cart(props) {
    const {quantity = 0, handleBasketShow = Function.prototype} = props;

    return (
        <div className="cart #4db6ac teal lighten-2" onClick={handleBasketShow}>
            <i className="material-icons">add_shopping_cart</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    )
}

export {Cart};
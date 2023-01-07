function BasketItem(props) {
    const {id, name, price, quantity, removeFromBasket=Function.prototype} = props;

    return <li class="collection-item">
        {name} x{quantity} = {price*quantity}
        <span class="secondary-content" onClick={() => removeFromBasket(id)}>
            <i class="material-icons basket-delete">close</i>
        </span>
    </li>
}

export {BasketItem};
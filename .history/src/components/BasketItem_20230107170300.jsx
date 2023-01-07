function BasketItem(props) {
    const {id, name, price, quantity, } = props;

    return <li class="collection-item">
        {name} x{quantity} = {price}
        <span href="#!" class="secondary-content">
            <i class="material-icons">send</i>
        </span>
    </li>
}
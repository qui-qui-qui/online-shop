function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li class="collection-item">
      {name} <i className="material-icons">remove</i> x{quantity}{" "}
      <i className="material-icons">add</i> = {price * quantity} руб.
      <span class="secondary-content" onClick={() => removeFromBasket(id)}>
        <i class="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export { BasketItem };

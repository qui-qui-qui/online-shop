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
      {name} x{quantity} = {price * quantity} руб.
      <span class="secondary-content" onClick={() => removeFromBasket(id)}>
        <i class="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export { BasketItem };

import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const { order, handleBasketShow = Function.prototype } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)

  return (
    <ul class="collection basket-list">
      <li class="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <li class="collection-item">Корзина пуста</li>
      )}
      <li class="collection-item active">Общая стоимость:</li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
    </ul>
  );
}

export { BasketList };

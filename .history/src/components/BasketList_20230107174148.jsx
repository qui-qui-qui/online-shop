import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const { order, handleBasketShow = Function.prototype } = props;

  return (
    <ul class="collection basket-list">
      <li class="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <li class="collection-item">Корзина пуста</li>
      )}
      <li class="collection-item active">Общая стоимость:</li>
    </ul>
  );
}

export { BasketList };

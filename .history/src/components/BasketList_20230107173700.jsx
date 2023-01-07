import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const { order } = props;

  return (
    <ul class="collection">
      <li class="collection-item active">
        Корзина
      </li> 
      {
        order.length ? order.map(item => (
            <BasketItem key={item.id} {...item}/>
        )) : <li class="collection-item">Корзина пуста</li>
      }    
      <li class="collection-item active">
        Общая стоимость:
      </li>
    </ul>
  );
}

export {BasketList};

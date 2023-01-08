import { useContext } from "react";
import { ShopContext } from "../context";

function GoodsItem(props) {
  const {
    id,
    name,
    description,
    price,
    full_background,
    addToBasket = Function.prototype,
  } = props;

  const {} =useContext(ShopContext);

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span
          className="card-title"
          style={{ fontSize: "1.2rem", textTransform: "uppercase" }}
        >
          {name}
        </span>
        <p style={{ fontSize: "0.9rem" }}>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addToBasket({id, name, price})}>
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.5rem" }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };

import React from "react";
import { PlusIcon } from "../HeroIcons";
import { MinuxIcon } from "../HeroIcons";

const CartItem = ({ id, title, price, img, amount }) => {
  return (
    <article className="cart-item">
      <img src={img} alt=""></img>
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}円</h4>
        <button className="remove-btn">削除</button>
      </div>
      <div>
        <button className="amount-btn">
          <PlusIcon />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <MinuxIcon />
        </button>
      </div>
    </article>
  );
};

export default CartItem;

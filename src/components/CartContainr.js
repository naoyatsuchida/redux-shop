import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
export const CartContainr = () => {
  const { amount, cartItems, total } = useSelector((stor) => stor.cart);

  console.log("amount", amount);
  console.log("cartItems", cartItems);
  const CartHeader = () => {
    return (
      <header>
        <h2>買い物かご</h2>

        {amount < 1 ? (
          <h4 className="empty-cart">何も入ってござらん</h4>
        ) : (
          cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })
        )}
      </header>
    );
  };

  const CartFooter = () => {
    if (amount > 0) {
      return (
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              合計<span>{total}</span>
            </h4>
          </div>
          <button className="btn clear-btn">全削除</button>
        </footer>
      );
    }
  };
  return (
    <div>
      <section className="cart">
        <CartHeader />
        <CartFooter />
      </section>
    </div>
  );
};

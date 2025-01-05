import React from "react";
import { useSelector } from "react-redux";
import { Carticon } from "../HeroIcons";

export const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>Reduc Nav</h3>
        <div className="nav-container">
          <Carticon />
        </div>
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </nav>
  );
};

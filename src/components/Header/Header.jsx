import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Logo from "../../assets/Shopping Bag.svg";

function Header({ money, total, basket, setBasket }) {
  console.log(basket);
  const deleteCart = () => {
    setBasket([]);
  };

  return (
    <div className="header-container">
      <div className="logo">
        <img src={Logo} alt="#" />
      </div>
      <div>
        <h6 style={{ display: "flex", alignItems: "center" }}>
          All The Best For You
          <AiOutlineHeart
            style={{
              width: "15px",
              height: "15px",
              textAlign: "center",
              color: "red",
            }}
          />
        </h6>
      </div>
      <div className="basket-container">
        <Link to="/basket">
          <FaShoppingCart
            style={{ width: "50px", height: "50px", color: "#85bb65" }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;

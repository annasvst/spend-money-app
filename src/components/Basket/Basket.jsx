import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Product from "../Product/Product";

function Basket({ basket, total, setBasket, money }) {
  const cleanBasket = () => {
    setBasket([]);
  };

  return (
    <div className="basket-container">
      <div className="basket-header">
        <h3>My Basket</h3>
        <h3 style={{ color: "#85bb65" }}>
          ${(money - total).toLocaleString()}
        </h3>
        <Link to="/">
          Return <GiReturnArrow />{" "}
        </Link>
      </div>

      <ul>
        {basket.map((item) => {
          return (
            <li className="basket-list">
              <div className="list-info">
                <img
                  style={{ width: "30px", height: "30px" }}
                  src={item.image}
                  alt={item.title}
                />
                <p style={{ marginLeft: "10px" }}>{item.title} </p>
              </div>
              <div className="price-info">
                <h4
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "5px",
                  }}
                >
                  {" "}
                  <RxCross1 className="cross-icon" />
                  {item.amount}{" "}
                </h4>
                <h3 style={{ color: "#85bb65" }}>
                  $ {(item.price * item.amount).toLocaleString()}
                </h3>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="total-info">
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>Total Price :</p>
          <span style={{ color: "#85bb65", fontSize: "20px" }}>
            ${total.toLocaleString()}
          </span>
        </div>
        <button onClick={cleanBasket}>Clean The Basket</button>
      </div>
    </div>
  );
}

export default Basket;

import { useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";
import Product from "./components/Product/Product.jsx";
import Basket from "./components/Basket/Basket.jsx";
import { Routes, Route } from "react-router";

function App() {
  const [money, setMoney] = useState(10000);
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const allPrice = products.map((product) => product.price);

  const lowestPrice = Math.min(...allPrice);

  // useEffect(() => {
  //   const alertMessage = () => {
  //     if (money - total < lowestPrice) {
  //       alert("You don't have enough money to spend");
  //     }
  //   };
  //   alertMessage();
  // }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                money={money}
                basket={basket}
                total={total}
                setBasket={setBasket}
                products={products}
              />
              <Product
                money={money}
                products={products}
                basket={basket}
                setBasket={setBasket}
                total={total}
              />
            </>
          }
        />
        <Route
          path="/basket"
          element={
            <Basket
              basket={basket}
              total={total}
              setBasket={setBasket}
              money={money}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

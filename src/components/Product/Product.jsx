import "./styles.css";

function Product({ products, setBasket, basket, money, total }) {
  const addToBasket = (productId) => {
    setBasket((prevBasket) => {
      const existingBasketItem = prevBasket.find(
        (item) => item.id === productId
      );

      if (existingBasketItem) {
        const updatedBasketItem = {
          ...existingBasketItem,
          amount: existingBasketItem.amount + 1,
        };
        return [
          ...prevBasket.filter((item) => item.id !== productId),
          updatedBasketItem,
        ];
      } else {
        const newItem = {
          ...products.find((product) => product.id === productId),
          amount: 1,
        };
        return [...prevBasket, newItem];
      }
    });
  };

  const removeFromBasket = (productId) => {
    const basketItem = basket.find((item) => item.id === productId);
    if (basketItem) {
      if (basketItem.amount > 1) {
        basketItem.amount -= 1;
        setBasket((prevBasket) => [
          ...prevBasket.filter((item) => item.id !== productId),
          basketItem,
        ]);
      } else {
        setBasket((prevBasket) => [
          ...prevBasket.filter((item) => item.id !== productId),
        ]);
      }
    }
  };

  const shortenName = (name) => {
    const words = name.split(" ");
    const shortenedWords = words.slice(0, 3);
    return shortenedWords.join(" ");
  };

  return (
    <div className="product-container">
      <ul className="product-list">
        {products.map((product) => {
          const basketItem = basket.find((item) => item.id === product.id);

          return (
            <li className="product-item" key={product.id}>
              <img
                className="item-img"
                src={product.image}
                alt={product.title}
              />
              <h3 style={{ color: "red" }}>{shortenName(product.title)}</h3>
              <h4>
                Price:{" "}
                <span style={{ color: "#85bb65", fontSize: "15px" }}>
                  ${product.price}
                </span>{" "}
              </h4>
              <div className="">
                <button
                  disabled={total + product.price > money}
                  onClick={() => addToBasket(product.id)}
                  className="add-button"
                >
                  Add
                </button>
                <span className="amount">{basketItem?.amount ?? 0}</span>
                <button
                  disabled={!basketItem}
                  onClick={() => removeFromBasket(product.id)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Product;

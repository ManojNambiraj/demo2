import React, { useState } from "react";
import "./ShoppingCart.css";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.webp";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import ProductCard from "../Components/ProductCard";
import CartItems from "../Components/CartItems";

function ShoppingCart() {
  const datas = [
    {
      id: 1,
      name: "Vivo",
      price: 15000,
      desc: "Some quick example text to build on the card title",
      image: img1,
      isStock: true,
    },
    {
      id: 2,
      name: "Samsung",
      price: 30000,
      desc: "Some quick example text to build on the card title",
      image: img2,
      isStock: false,
    },
    {
      id: 3,
      name: "Sony",
      price: 45000,
      desc: "Some quick example text to build on the card title",
      image: img3,
      isStock: true,
    },
    {
      id: 4,
      name: "iPhone",
      price: 75000,
      desc: "Some quick example text to build on the card title",
      image: img4,
      isStock: false,
    },
    {
      id: 5,
      name: "Mi",
      price: 20000,
      desc: "Some quick example text to build on the card title",
      image: img3,
      isStock: true,
    },
    {
      id: 6,
      name: "Blackberry",
      price: 250000,
      desc: "Some quick example text to build on the card title",
      image: img1,
      isStock: false,
    },
    {
      id: 7,
      name: "Xiomi",
      price: 25000,
      desc: "Some quick example text to build on the card title",
      image: img4,
      isStock: true,
    },
    {
      id: 8,
      name: "Hifi",
      price: 7000,
      desc: "Some quick example text to build on the card title",
      image: img2,
      isStock: true,
    },
    {
      id: 9,
      name: "experia",
      price: 12000,
      desc: "Some quick example text to build on the card title",
      image: img3,
      isStock: true,
    },
  ];

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddtoCart = (item) => {
    setCartItems([...cartItems, item]);
    setTotal(total + item.price);
  };

  const handleRemoveFromCart = (item) => {
    const filteredItems = cartItems.filter((cItem) => cItem.id != item.id);
    setCartItems(filteredItems);
    setTotal(total - item.price);
  };

  return (
    <div className="container-fluid mainBox">
      <div className="row">
        <div className="col-10 left">
          <div className="row p-3 d-flex gap-4">
            {datas.map((product) => {
              return (
                <ProductCard
                  product={product}
                  handleAddtoCart={handleAddtoCart}
                />
              );
            })}
          </div>
        </div>
        <div className="col-2 right">
          <ol class="list-group list-group-numbered">
            <h2>Count: {cartItems.length}</h2>
            {cartItems.map((item) => {
              return (
                <CartItems
                  item={item}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              );
            })}
            <h2>Total: {total}</h2>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

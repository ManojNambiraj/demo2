import React, { useReducer } from "react";
import ProductCard from "../Components/ProductCard";
import CartItems from "../Components/CartItems";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.webp";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";

function ShoppingCartUserReducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Add-to-cart":
        return {
          ...state,
          cartItems: [...state.cartItems, action.product],
          total: state.total + action.product.price,
        };

      case "Remove-from-cart":
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (citem) => citem.id != action.item.id
          ),
          total: state.total - action.item.price,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    datas: [
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
    ],
    cartItems: [],
    total: 0,
  });

  const handleAddtoCart = (product) => {
    dispatch({ type: "Add-to-cart", product });
  };

  const handleRemoveFromCart = (item) => {
    dispatch({ type: "Remove-from-cart", item });
  };

  return (
    <div className="container-fluid mainBox">
      <div className="row">
        <div className="col-10">
          <div className="row p-3 d-flex gap-4">
            {state.datas.map((product) => {
              return (
                <ProductCard
                  product={product}
                  handleAddtoCart={handleAddtoCart}
                />
              );
            })}
          </div>
        </div>
        <div className="col-2">
          <ol class="list-group list-group-numbered">
            <h2>Count: {state.cartItems.length}</h2>
            {state.cartItems.map((item) => {
              return (
                <CartItems
                  item={item}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              );
            })}
            <h2>Total: {state.total}</h2>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartUserReducer;

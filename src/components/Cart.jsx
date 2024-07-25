import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const totalAmount = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="mt-4">
      <h2 className="cart">Cart</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart
            .filter((product) => product.quantity > 0)
            .map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: product })
                    }
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  {product.quantity}
                  <button
                    className="btn btn-secondary"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: product })
                    }
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </td>
                <td>${product.price * product.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_ITEM_FROM_CART",
                        payload: product,
                      })
                    }
                  >
                    Remove from Cart
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="mt-3">
        <h3>Sub-total: ${totalAmount}</h3>
        <h3>Shipping: Free</h3>
        <h3>Total Amount: ${totalAmount}</h3>
      </div>
    </div>
  );
};

export default Cart;

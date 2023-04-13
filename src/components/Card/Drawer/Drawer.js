import React from "react";

import { useCart } from "../../../hooks/useCart";
import Info from "../Info";

import styles from "./Drawer.module.scss";

function Drawer({ onClose, onRemoveItem, opened }) {

  const onClickOrder = () => {
    setIsOrderComplete(true);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCartItems([]);
  };

  const { cartItems, setCartItems, totalCash } = useCart();
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);

  return (
    <div className={`${styles.overlay} ${opened && styles.overlayVisible} `}>
      <div className={styles.drawer}>
        <h2 className="mb-30 d-flex justify-between">
          Cart
          <img
            className="removeBtn cu-p"
            width={27}
            height={27}
            onClick={onClose}
            src="img/button-remove.svg"
            alt="btn-remove"
          />
        </h2>
        {cartItems.length > 0 ? (
          <>
            <div className={styles.items}>
              {cartItems.map((obj) => (
                <div
                  className="cartItem d-flex align-center mb-20"
                  key={obj.id}
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-15">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price}$</b>
                  </div>
                  <img
                    onClick={() => onRemoveItem(obj.id)}
                    className="removeBtn"
                    width={27}
                    height={27}
                    src="img/button-remove.svg"
                    alt="btn-remove"
                  />
                </div>
              ))}
            </div>
            <div className={styles.cartTotalBlock}>
              <ul>
                <li className="d-flex">
                  <span>Total:</span>
                  <div></div>
                  <b>{totalCash}$</b>
                </li>
                <li className="d-flex">
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>{(totalCash * 5) / 100} $</b>
                </li>
              </ul>
              <button onClick={onClickOrder} className="btn-green">
                Buy this product
                <img src="img/arrow.svg" alt="arrow" />
              </button>
            </div>{" "}
          </>
        ) : (
          <Info
            title={isOrderComplete ? "the order is placed" : "Cart empty"}
            description={
              isOrderComplete
                ? "Your order #18 will be delivered to courier soon"
                : "Add items before ordering"
            }
            image={
              isOrderComplete ? "img/complete-order.jpg" : "img/drawer.png"
            }
          />
        )}
      </div>
    </div>
  );
}
export default Drawer;

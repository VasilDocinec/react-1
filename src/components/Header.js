import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
function Header(props) {
  const { totalCash } = useCart();
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt={123} />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img src="/img/cart.svg" alt="cart" />
          <span>{totalCash}$</span>
        </li>
        <li className="mr-30 cu-p">
          <Link to="/favorites">
            <img
              src={
                props.onFavorites.length
                  ? "/img/favorite-true.svg"
                  : "/img/favorite-false.svg"
              }
              alt="favorites"
            />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img src="/img/user.svg" alt="user" />
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;

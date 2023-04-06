import React from "react";
import styles from "./Card.module.scss";

function Card({title, price, imageUrl, onFavorite, onPlus}) {
const [isAdded, setIsAdded] = React.useState(false);
const onClickPlus = () => {
  onPlus({title, price, imageUrl});
  setIsAdded(!isAdded);
}
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt={imageUrl} />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center mt-10">
        <div className="d-flex flex-column">
          <p>Price:</p>
          <b>{price} $</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/button-checked.svg" : "/img/button-plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}
export default Card;

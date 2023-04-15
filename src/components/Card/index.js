import React from "react";
import AppContext from "../../context";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";

function Card({
  id,
  parent_id,
  title,
  price,
  imageUrl,
  onFavorite,
  onPlus,
  addedFavorited,
  loading = false,
}) {
  const { isItemAdded, onAddToCart, cartItems } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(addedFavorited);
  const obj = { id : cartItems.length+1, parent_id, title, imageUrl, price };
  const onClickPlus = () => {
    onAddToCart(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };
  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={260}
          viewBox="-10 0 210 230"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="9" ry="9" width="150" height="120" />
          <rect x="0" y="135" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="158" rx="5" ry="5" width="93" height="15" />
          <rect x="0" y="204" rx="5" ry="5" width="88" height="24" />
          <rect x="118" y="196" rx="5" ry="5" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onClickFavorite}>
            {onFavorite && (
              <img
                src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
                alt="unliked"
              />
            )}
          </div>
          <img width={133} height={112} src={imageUrl} alt={imageUrl} />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center mt-10">
            <div className="d-flex flex-column">
              <p>Price:</p>
              <b>{price} $</b>
            </div>
            {onFavorite && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={
                  isItemAdded(parent_id)
                    ? "/img/button-checked.svg"
                    : "/img/button-plus.svg"
                }
                alt="plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
export default Card;

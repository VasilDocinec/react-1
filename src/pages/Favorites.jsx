import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Favorites() {
const {favorites, onAddToFavorites } = React.useContext(AppContext);
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h2>My favorites</h2>
      </div>
      <div className="d-flex flex-wrap">
        {favorites.map((items) => (
          <Card
            key={items.parent_id}
            {...items}
            addedFavorited={true}
            onFavorite={(obj) => onAddToFavorites(obj)}
          />
        ))}
      </div>
    </div>
  )
}
export default Favorites;
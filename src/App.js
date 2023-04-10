import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites.jsx";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://642eb5592b883abc6414dea8.mockapi.io/items")
      .then((res) => setItems(res.data));
    axios
      .get("https://642eb5592b883abc6414dea8.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
    const items = JSON.parse(localStorage.getItem("favorites"));
    if (items) {
      setFavorites(items);
    }
  }, []);

  const onAddToCart = (obj) => {

    setCartItems((prev) =>
      !prev.find((el) => el.id === obj.id)
        ? [...prev, obj]
        : prev.filter((el) => el.id !== obj.id)
    );
    if (([...cartItems, obj].find((el) => el.id === obj.id))){
      axios.post("https://642eb5592b883abc6414dea8.mockapi.io/cart", obj);
    }
  };

  const onAddToFavorites = (obj) => {
    setFavorites((prev) =>
      !prev.find((el) => el.id === obj.id) ? [...prev, obj] : favorites
    );

    if ([...favorites, obj].find((el) => el.id === obj.id)) {
      localStorage.setItem("favorites", JSON.stringify([...favorites, obj]));
    }
    console.log([...favorites,obj]);
  };

  const onRemoveFavorites = (obj) => {
    setFavorites((prev) => prev.filter((el) => el.id !== obj.id));
    let newFavorites = favorites.filter((el) => el.id !== obj.id);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://642eb5592b883abc6414dea8.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSerchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemoveItem={onRemoveItem}
        />
      )}
      <Header
        onClickCart={() => setCartOpened(true)}
        onTotal={cartItems}
        onFavorites={favorites}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSerchInput={onChangeSerchInput}
              onAddToCart={onAddToCart}
              onFavorite={(obj) => onAddToFavorites(obj)}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              items={favorites}
              onAddToCart={onAddToCart}
              onFavorite={(obj) => onRemoveFavorites(obj)}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

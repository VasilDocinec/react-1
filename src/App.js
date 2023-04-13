import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Card/Drawer/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites.jsx";
import { Orders } from "./pages/Orders";
import AppContext from "./context";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fechData() {
      try {
        const [itemResponse, cartItemsRespons] = await Promise.all([
          axios.get("https://642eb5592b883abc6414dea8.mockapi.io/items"),
          axios.get("https://642eb5592b883abc6414dea8.mockapi.io/cart"),
        ]);
        setIsLoading(false);
        setItems(itemResponse.data);
        setCartItems(cartItemsRespons.data);
      } catch (error) {
        alert("error while receiving data");
      }
    }
    fechData();
    if (JSON.parse(localStorage.getItem("favorites"))) {
      setFavorites(JSON.parse(localStorage.getItem("favorites")));
    }
  }, []);

  const onAddToCart = (obj) => {
    try {
      const findItem = cartItems.find(
        (el) => Number(el.parent_id) === Number(obj.parent_id)
      );
      if (findItem) {
        axios.delete(
          `https://642eb5592b883abc6414dea8.mockapi.io/cart/${findItem.id}`
        );
        setCartItems((prev) =>
          prev.filter((el) => el.parent_id !== obj.parent_id)
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        axios.post("https://642eb5592b883abc6414dea8.mockapi.io/cart", obj);
      }
    } catch (error) {
      alert("error when writing data");
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parent_id) === Number(id));
  };

  const onAddToFavorites = (obj) => {
    if (favorites.some((el) => el.parent_id === obj.parent_id)) {
      setFavorites((prev) => {
        localStorage.setItem("favorites", JSON.stringify(prev.filter((el) => el.parent_id !== obj.parent_id)));
        return prev.filter((el) => el.parent_id !== obj.parent_id);
      });
    } else {
      setFavorites((prev) => {
        localStorage.setItem("favorites", JSON.stringify([...favorites, obj]));
        return [...prev, obj];
      });
    }
  };

  const onRemoveItem = (id) => {
    try {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
      axios.delete(`https://642eb5592b883abc6414dea8.mockapi.io/cart/${id}`);
    } catch (error) {
      alert("error when deleting the object");
    }
  };

  const onChangeSerchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        setCartItems,
        favorites,
        isItemAdded,
        onAddToFavorites,
        setCartOpened,
        onAddToCart,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemoveItem={onRemoveItem}
          opened={cartOpened}
        />
        <Header
          onClickCart={() => {
            setCartOpened(true);
          }}
          onFavorites={favorites}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartItems={cartItems}
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSerchInput={onChangeSerchInput}
                onFavorite={(obj) => onAddToFavorites(obj)}
                favorites={favorites}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

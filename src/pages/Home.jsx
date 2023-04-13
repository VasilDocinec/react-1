import Card from "../components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSerchInput,
  onFavorite,
  favorites,
  isLoading
}) {
  console.log(items);
  const renderItems = () => {

    const filtredItems = items
      .filter((items) =>
        items.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    return (isLoading ? ([...Array(8)].map(() => (
      <Card
        loading={isLoading}
      />
    ))) : (filtredItems.map((item) => (
      <Card
        key={item.parent_id}
        {...item}
        loading={isLoading}
        addedFavorited={favorites.some(obj => Number(obj.parent_id) === Number(items.parent_id))}
        onFavorite={(obj) => onFavorite(obj)}
      />
    ))));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>
          {searchValue
            ? `Search by request: "${searchValue}"`
            : "All snickers"}
        </h1>
        <div className="search-block">
          <img src="img/search.svg" alt="search" />
          {searchValue && (
            <img
              className="clear cu-p"
              onClick={() => setSearchValue("")}
              src="img/button-remove.svg"
              alt="btn-remove"
            />
          )}
          <input
            onChange={onChangeSerchInput}
            value={searchValue}
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {renderItems()}
      </div>
    </div>
  )
}
export default Home;
import Card from "../components/Card";
function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSerchInput,
  onAddToCart,
  onFavorite
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>
          {searchValue
            ? `Search by request: "${searchValue}"`
            : "All snickers"}
        </h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="search" />
          {searchValue && (
            <img
              className="clear cu-p"
              onClick={() => setSearchValue("")}
              src="/img/button-remove.svg"
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
        {items
          .filter((items) =>
            items.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((items) => (
            <Card
              key={items.id}
              { ...items}
              onFavorite={(obj) => onFavorite(obj) }
              onPlus={(obj) => {
                onAddToCart(obj);
              }}
            />
          ))}
      </div>
    </div>
  )
}
export default Home;
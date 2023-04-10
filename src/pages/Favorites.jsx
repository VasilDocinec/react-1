import Card from "../components/Card";

function Favorites({items, onFavorite}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h2>My favorites</h2>
      </div>
      <div className="d-flex flex-wrap">
        {items.map((items) => (
          <Card
            key={items.id}
           {...items}
            favorited={true}
            onFavorite={(obj) => onFavorite(obj) }
          />
        ))}
      </div>
    </div>
  )
}
export default Favorites;
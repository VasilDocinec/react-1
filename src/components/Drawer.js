function Drawer({ onClose, items = [], onRemoveItem }) {
  const totalCash = items.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Cart
          <img
            className="removeBtn cu-p"
            width={27}
            height={27}
            onClick={onClose}
            src="/img/button-remove.svg"
            alt="btn-remove"
          />
        </h2>
        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20" key={obj.id}>
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
                src="/img/button-remove.svg"
                alt="btn-remove"
              />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul className="cartTotalBlock">
            <li className="d-flex">
              <span>Total:</span>
              <div></div>
              <b>{totalCash}$</b>
            </li>
            <li className="d-flex">
              <span>Tax:</span>
              <div></div>
              <b>5%</b>
            </li>
          </ul>
          <button className="btn-green">
            Buy this product <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;

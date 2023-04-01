function Drawer() {
  return (
    <div style={{display: 'none'}} className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Cart
          <img
            className="removeBtn cu-p"
            width={27}
            height={27}
            src="/img/button-remove.svg"
            alt="btn-remove"
          />
        </h2>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-15">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>500$</b>
            </div>
            <img
              className="removeBtn"
              width={27}
              height={27}
              src="/img/button-remove.svg"
              alt="btn-remove"
            />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-15">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>500$</b>
            </div>
            <img
              className="removeBtn"
              width={27}
              height={27}
              src="/img/button-remove.svg"
              alt="btn-remove"
            />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-15">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>500$</b>
            </div>
            <img
              className="removeBtn"
              width={27}
              height={27}
              src="/img/button-remove.svg"
              alt="btn-remove"
            />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul className="cartTotalBlock">
            <li className="d-flex">
              <span>Total:</span>
              <div></div>
              <b>500$</b>
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

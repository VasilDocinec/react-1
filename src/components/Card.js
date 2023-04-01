function Card(){
    return(
        <div className="card">
  <div className="favorite">
    <img src="/img/heart-unliked.svg" alt="unliked" />
  </div>
  <img
    width={133}
    height={112}
    src="/img/sneakers/2.jpg"
    alt="/img/sneakers/2.jpg"
  />
  <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
  <div className="d-flex justify-between align-center mt-10">
    <div className="d-flex flex-column">
      <p>Price:</p>
      <b>500$</b>
    </div>
    <button className="button">
      <img width={11} height={11} src="/img/plus.svg" alt="/img/plus.png" />
    </button>
  </div>
</div>
    )
}
export default Card;

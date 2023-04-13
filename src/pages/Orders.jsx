import React from "react";
import Card from "../components/Card";

export function Orders() {
  const orders = JSON.parse(localStorage.getItem("cartItems"));
 
  
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h2>My orders</h2>
      </div>
      <div className="d-flex flex-wrap">
        {orders.map((items) => (
          <Card
            key={items.parent_id}
            {...items}
          />
        ))}
      </div>
    </div>
  )
};
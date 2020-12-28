import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import { Add } from "./OrderBook/Add";
import { Inventory } from "./Inventory";
import {Order} from './Orders/Order'

import './App.css';

function App() {
  const [orders, setOrders] = useState([]);
  
  const [buyers, setBuyers] = useState([]);
  const [sellers, setSellers] = useState([]);

  console.log('orders   ', orders)
  console.log('sellers   ', sellers)
  

  const orderComponents = orders.map(order => {
    return (
      <div className="row" key={order.id}>
        <Order
            id={order.id}
            side={order.side}
            limitPrice={order.limitPrice}
            quantity={order.quantity}
            message={order.message}
        />
        <hr />
      </div>
    )
  })
  


//   const buyerComponents = buyers.map((order) => {
//     console.log('buyer' ,order)
//     return (
//       <div className="buyer" key={order.id}>
//         <Order
           
//             message={order.message}
//         />
//         <hr />
//       </div>
//     );
// });

//   const sellersComponent = sellers.map((seller) => {
//     console.log('seller', seller)
//     return (
//       <div className="seller" key={seller.id}>
//        <Order 
        
//         message={seller.message}
//        />
//      </div>
//    )
//   });

  return (
    <div className="App">
     <Link to="/limit-order-book">
                    <h1>Limit Order Book v1</h1>
                </Link>
                <Router>
                    <Add orders={orders} setOrders={setOrders} buyers={buyers} setBuyers={setBuyers} sellers={sellers} setSellers={setSellers} path="/limit-order-book"></Add>
                    <Inventory orders={orders} path="/" />
                </Router>
                {orderComponents}
                <div className="row">
                {/* {buyerComponents}
                {sellersComponent} */}

                </div>
    </div>
  );
}

export default App;

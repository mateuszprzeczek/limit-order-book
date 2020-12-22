import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import { Add } from "./OrderBook/Add";
import { Inventory } from "./Inventory";

import './App.css';

function App() {
  const [orders, setOrders] = useState([]);
  return (
    <div className="App">
     <Link to="/">
                    <h1>Limit Order Book v1</h1>
                </Link>
                <Router>
                    <Add orders={orders} setOrders={setOrders} path="/add"></Add>
                    <Inventory orders={orders} path="/" />
                </Router>
    </div>
  );
}

export default App;

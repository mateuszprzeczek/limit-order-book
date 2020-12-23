import React from "react";
import { Link } from "@reach/router";
import { Order } from "./Orders/Order";

export const Inventory = ({ orders }) => {
    const orderComponents = orders.map((order) => {
        return (
            <Order
                key={order.id}
                id={order.id}
                side={order.side}
                limitPrice={order.limitPrice}
                quantity={order.quantity}
            />
        );
    });
    return (
        <React.Fragment>
            {orders.length === 0 ? <h3>No Orders</h3> : orderComponents}
            <Link to="/">Menage orders</Link>
        </React.Fragment>
    );
};

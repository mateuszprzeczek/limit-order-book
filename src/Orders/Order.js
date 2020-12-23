import React from "react";

export const Order = ({ id, side, limitPrice, quantity, message }) => {
  
    return (
        <div>
           
            <h2> {id} {side} {quantity} @ {limitPrice} {message}</h2>
        </div>
    );
};

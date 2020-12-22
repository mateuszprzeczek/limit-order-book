import React from "react";

export const Order = ({ id, side, limitPrice, quantity }) => {
    // return React.createElement("div", {}, [
    //     React.createElement("h2", {}, title),
    //     React.createElement("h3", {}, author),
    //     React.createElement("h3", {}, year),
    // ]);
    return (
        <div>
            <hr />
            <h2> {id}</h2>
            <h3> {side}</h3>
            <h3>{limitPrice} </h3>
            <h3>{quantity}</h3>
        </div>
    );
};

import React, { useState } from "react";
import useDropdown from "../hooks/useDropdown";
import { InputComponent } from "../InputComponent";

export const Add = ({ orders, setOrders }) => {
    const [id, setId] = useState("");
    const [limitPrice, setLimitPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    const sides = ["Buy", "Sell"];
    const [side, SideDropdown] = useDropdown("", "Side", sides);

    const addOrder = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const newOrder = {
            id: id,
            side: side,
            limitPrice: limitPrice,
            quantity: quantity,
        };
        const newOrders = [...orders, newOrder];
        setOrders(newOrders);
    };

    return (
        <div>
            {id}
            <form>
                <InputComponent
                    label="id"
                    state={id}
                    setState={setId}
                />
                <SideDropdown />
                <InputComponent
                    label="LimitPrice"
                    state={limitPrice}
                    setState={setLimitPrice}
                />
                <InputComponent
                    label="quantity"
                    state={quantity}
                    setState={setQuantity}
                    type="number"
                />

                <br />
                <button onClick={addOrder.bind(this)}>Dodaj</button>
            </form>
        </div>
    );
};

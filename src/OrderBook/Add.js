import React, { useState } from "react";
import useDropdown from "../hooks/useDropdown";
import { InputComponent } from "../InputComponent";

export const Add = ({ orders, setOrders, buyers, setBuyers, sellers, setSellers }) => {
    const [id, setId] = useState("");
    const [limitPrice, setLimitPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [active, setActive] = useState(true);
    const [message, setMessage] = useState('OK')


    const sides = ["Buy", "Sell", "Cancel"];
    const [side, SideDropdown] = useDropdown("Buy", "Side", sides);

    const addOrder = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const newOrder = {
            id: id,
            side: side,
            limitPrice: limitPrice,
            quantity: quantity,
            message: message,
            active: active,
        };
        const newOrders = [...orders, newOrder];
        setOrders(newOrders);

        addOrderToSide(newOrder)
    };

    const addOrderToSide = (order) => {
        if (order.side === "Buy") {
            const newBuyers = [...buyers, order]
            setBuyers(newBuyers)
            checkSellers(order)
        }
        if (order.side === "Sell") {
            const newSellers = [...sellers, order];
            setSellers(newSellers)
            checkBuyers(order)
        }
        if (order.side === "Cancel") {
            cancelOrder(order.id)
        }
    }

    const checkSellers = (order) => {
        if (sellers.length) {
            const newSellers = sellers.slice();
            const matchingSellers = newSellers.filter(item => parseInt(item.limitPrice) <= parseInt(order.limitPrice));
            sortMatchingSellers(matchingSellers)
            for (let seller of matchingSellers) {
                if (seller.quantity <= order.quantity && seller.active) {
                    const newQuantity = order.quantity - seller.quantity;
                    if(newQuantity < 0) {
                        continue;
                    }
                    const newOrder = {
                        ...order,
                        quantity: newQuantity,
                        message: `Fully matched with ${seller.id} ${seller.quantity} @ ${seller.limitPrice} `
                    }
                    const newSeller = {
                        ...seller,
                        quantity: 0,
                        active: setActive(false)
                    }
                    const newSellers = sellers.filter(item => item.id !== seller.id);
                    const n = [...newSellers, newSeller]
                    setSellers(n);
                    const newBuyers = buyers.filter(item => item.id !== order.id);
                    const b = [...newBuyers, newOrder]
                    setBuyers(b);
                }

                if (seller.quantity > order.quantity && seller.active) {
                    const newQuantity = seller.quantity - order.quantity;
                    if(newQuantity < 0) {
                        continue;
                    }
                    const newOrder = {
                        ...order,
                        quantity: 0,
                        active: setActive(false),
                        message: `Fully matched with ${seller.id} ${seller.quantity} @ ${seller.limitPrice} `
                    }
                    const newSeller = {
                        ...seller,
                        quantity: newQuantity,
                    }
                    const newSellers = sellers.filter(item => item.id !== seller.id);
                    const n = [...newSellers, newSeller]
                    setSellers(n);
                    const newBuyers = buyers.filter(item => item.id !== order.id);
                    const b = [...newBuyers, newOrder]
                    setBuyers(b);
                }
            }
            
        }
    }
    const checkBuyers = (order) => {
        if (buyers.length) {
            const newBuyers = buyers.slice();
            const matchingBuyers = newBuyers.filter(item => parseInt(item.limitPrice) >= parseInt(order.limitPrice));
            sortMatchingSellers(matchingBuyers)
            for (let buyer of matchingBuyers) {
                if (buyer.quantity <= order.quantity && buyer.active) {
                    const newQuantity = order.quantity - buyer.quantity;
                    if(newQuantity < 0) {
                        continue;
                    }
                    const newOrder = {
                        ...order,
                        quantity: newQuantity,
                        message: `Fully matched with ${buyer.id} ${buyer.quantity} @ ${buyer.limitPrice}`
                    }
                    const newBuyer = {
                        ...buyer,
                        quantity: 0,
                        active: setActive(false)
                    }
                    const newBuyers = buyers.filter(item => item.id !== buyer.id);
                    const n = [...newBuyers, newBuyer]
                    setBuyers(n);
                    const newSellers = sellers.filter(item => item.id !== order.id);
                    const b = [...newSellers, newOrder]
                    setSellers(b);
                }

                if (buyer.quantity > order.quantity && buyer.active) {
                    const newQuantity = buyer.quantity - order.quantity;
                    if(newQuantity < 0) {
                        continue;
                    }
                    const newOrder = {
                        ...order,
                        quantity: 0,
                        active: setActive(false),
                        message: `Fully matched with ${buyer.id} ${buyer.quantity} @ ${buyer.limitPrice}`
                    }
                    const newBuyer = {
                        ...buyer,
                        quantity: newQuantity,
                    }
                    const newBuyers = buyers.filter(item => item.id !== buyer.id);
                    const n = [...newBuyers, newBuyer]
                    setBuyers(n);
                    const newSellers = sellers.filter(item => item.id !== order.id);
                    const b = [...newSellers, newOrder]
                    setSellers(b);
                }
            }
            
        }
    }
    const sortMatchingSellers = (matchingSellers) => {
        matchingSellers.sort((A, B) => A.quantity - B.quantity);
    }

    const cancelOrder = (id) => {
       setBuyers(buyers.filter(item => item.id !== id))
       setSellers(sellers.filter(item => item.id !== id))
    }

    const changeOrders = (orders, index, q) => {
        const newOrders = orders.slice();
        const order = newOrders[index];
        const newOrder = {
          ...order,
          quantity: q,
        };
        newOrders[index] = newOrder;
          return newOrders;
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
                    label="quantity"
                    state={quantity}
                    setState={setQuantity}
                    type="number"
                />
                <InputComponent
                    label="LimitPrice"
                    state={limitPrice}
                    setState={setLimitPrice}
                />

                <br />
                <button onClick={addOrder.bind(this)}>Dodaj</button>
            </form>
        </div>
    );
};

import React, { useState } from "react";
import useDropdown from "../hooks/useDropdown";
import { InputComponent } from "../InputComponent";

export const Add = ({ orders, setOrders, buyers, setBuyers  }) => {
    const [id, setId] = useState("");
    const [limitPrice, setLimitPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [active, setActive] = useState(true);
    const [message, setMessage] = useState('OK')

    const [sellers, setSellers] = useState([]);


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
                active: true,
            };

            if (newOrder.side === "Buy") {
                if(!orders.length) {
                    const newOrders = [...orders, newOrder];
                    setOrders(newOrders)
                }
                const activeSellers = orders.filter(el => el.active).filter(el => el.limitPrice <= newOrder.limitPrice)
                const sellOrders = activeSellers.filter(el => el.side === "Sell")
                
                if(sellOrders.length) {
                    sortOrders(sellOrders)
                    const length = sellOrders.length;
                    let tmp = 0;
                    let updOrder = null;
                    let updSellers = [];
                    let newSeller = null;
                    let newSellers = [];
                    for (let seller of sellOrders) {
                        if(newOrder.quantity === 0) {
                            break;
                        }
                        if(seller.limitPrice <= newOrder.limitPrice) {
                            let sQuantity = seller.quantity;
                            let ordQuantity = newOrder.quantity;
                            const max = Math.max(sQuantity, ordQuantity);
                            for(let i = 0; i <= max; i++) {
                                sQuantity--
                                ordQuantity--
                                if(ordQuantity === 0 || sQuantity === 0) {
                                    break;
                                }
                            }
                            if (sQuantity === 0) {
                                 updSellers = orders.filter(el => el.id !== seller.id)
                                const m = `fully matched with ${seller.id} (${seller.quantity} @ ${seller.limitPrice})`;
                                 newSeller = {
                                    id: seller.id,
                                    side: seller.side,
                                    limitPrice: seller.limitPrice,
                                    quantity: 0,
                                    message: `Fully matched with ${newOrder.id}`,
                                    active: false,   
                                }
                                newOrder.quantity = ordQuantity
                                newOrder.message = ` ${m}`

                                 newSellers = [...updSellers, newSeller, newOrder];
                                 setOrders(newSellers)
                                
                            }
                            if (ordQuantity === 0) {
                                updSellers = orders.filter(el => el.id !== seller.id)
                                let m = null;
                                if(sQuantity > 0) {
                                    m = `and ${seller.id} (${sQuantity - ordQuantity} @ ${seller.limitPrice})`
                                } else {
                                    m = `and ${seller.id} (${sQuantity} @ ${seller.limitPrice})`
                                }
                                 newSeller = {
                                    id: seller.id,
                                    side: seller.side,
                                    limitPrice: seller.limitPrice,
                                    active: true,
                                    quantity: sQuantity,
                                    message: ''
                                }
                                newOrder.quantity = ordQuantity
                                 updOrder = {
                                    id: newOrder.id,
                                    side: newOrder.side,
                                    limitPrice: newOrder.limitPrice,
                                    quantity: ordQuantity,
                                    message:  ` ${m}`,
                                    active: false
                                }
                                 newSellers = [...updSellers, newSeller, updOrder]
                                setOrders(newSellers)
                            }
                        } else {
                            tmp += 1;
                        }
                    }
                    
                    if(tmp === length) {
                        const newOrders = [...orders, newOrder];
                        setOrders(newOrders);
                    } 
                } else {
                    const newOrders = [...orders, newOrder];
                        setOrders(newOrders);
                }
            } 
            if (newOrder.side === "Sell") {
                if(!orders.length) {
                    const newOrders = [...orders, newOrder];
                    setOrders(newOrders)
                }
                const activeBuyers = orders.filter(el => el.active).filter(el => el.limitPrice >= newOrder.limitPrice)
                const buyOrders = activeBuyers.filter(el => el.side === "Buy")

                if(orders.length) {
                    sortOrders(buyOrders)
                    const length = buyOrders.length;
                    let tmp = 0;
                    let updOrder = null;
                    let updBuyers = [];
                    let newBuyer = null;
                    let newBuyers = [];
                    for (let buyer of buyOrders) {
                        if(newOrder.quantity === 0) {
                            break;
                        }
                        if(buyer.limitPrice >= newOrder.limitPrice) {
                            let bQuantity = buyer.quantity;
                            let ordQuantity = newOrder.quantity;
                            const max = Math.max(bQuantity, ordQuantity);
                            for(let i = 0; i <= max; i++) {
                                bQuantity--
                                ordQuantity--
                                if(ordQuantity === 0 || bQuantity === 0) {
                                    break;
                                }
                            }
                            if (bQuantity === 0) {
                                 updBuyers = orders.filter(el => el.id !== buyer.id)
                                const m = `Partially matched with ${buyer.id} (${buyer.quantity} @ ${buyer.limitPrice})`;
                                 newBuyer = {
                                    id: buyer.id,
                                    side: buyer.side,
                                    limitPrice: buyer.limitPrice,
                                    quantity: 0,
                                    message: `Fully matched with ${newOrder.id}`,
                                    active: false,
                                }
                                newOrder.quantity = ordQuantity;
                                newOrder.message = `${newOrder.message} ${m}`;

                                const newBuyers = [...updBuyers, newBuyer, newOrder]
                                setOrders(newBuyers)
                            }
                            if (ordQuantity === 0) {
                                 updBuyers = orders.filter(el => el.id !== buyer.id)
                                let m = null;
                                if(bQuantity > 0) {
                                    m = `fully matched witch ${buyer.id} (${newOrder.quantity} @ ${buyer.limitPrice})`
                                } else {
                                    m = `and ${buyer.id} (${bQuantity} @ ${buyer.limitPrice})`
                                }
                                 newBuyer = {
                                    id: buyer.id,
                                    side: buyer.side,
                                    limitPrice: buyer.limitPrice,
                                    quantity: bQuantity,
                                    message: '',
                                    active: true,
                                }
                                 updOrder = {
                                    id: newOrder.id,
                                    side: newOrder.side,
                                    limitPrice: newOrder.limitPrice,
                                    quantity: ordQuantity,
                                    message: ` ${newOrder.message} ${m}`,
                                    active: false,
                                }
                                 newBuyers = [...updBuyers, newBuyer, updOrder]
                                setOrders(newBuyers)
                            }
                        } else {
                            tmp += 1;
                        }
                    }
                    if(tmp === length) {
                        const newOrders = [...orders, newOrder];
                        setOrders(newOrders);
                    }
                } 
            }  if (newOrder.side === 'Cancel') {
                cancelOrder(newOrder.id)
            }
            // } else {
            //     const newOrders = [...orders, newOrder];
            //         setOrders(newOrders);
            // }
            
    };

    
    const sortOrders = (orders) => {
        orders.sort((A, B) => B.limitPrice - A.limitPrice);
    }

    const cancelOrder = (id) => {
        const orderArray = orders.filter(item => item.id === id);
        const order = orderArray[0];
        console.log('cancel order ', order)
        const newOrders = orders.filter(item => item.id !== id);
        console.log('cancel  newOrders',newOrders)
       if(!order.active) {
           const newOrder = {
               id: order.id,
               side: order.side,
               limitPrice: order.limitPrice,
               quantity: order.quantity,
               active: false,
               message: "Failed - no such active order"
           }
            const updOrders = [...newOrders, newOrder];
            setOrders(updOrders)
       } if(order.active && parseInt(order.quantity) > 0) {
           const newOrder = {
                id: order.id,
                side: order.side,
                limitPrice: order.limitPrice,
                quantity: order.quantity,
                active: false,
                 message:  `${order.id} Cancelled`
           }
           const updOrders = [...newOrders, newOrder];
           setOrders(updOrders)
       } if (parseInt(order.quantity) === 0) {
        const newOrder = {
            id: order.id,
                side: order.side,
                limitPrice: order.limitPrice,
                quantity: order.quantity,
                active: false,
            message: 'Failed - already fully filled'
        }
        const updOrders = [...newOrders, newOrder];
        setOrders(updOrders)
       }
    }


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
                    type="number"
                    setState={setLimitPrice}
                />

                <br />
                <button onClick={addOrder.bind(this)}>Dodaj</button>
            </form>
        </div>
    );
};

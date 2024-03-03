import { useEffect, useState } from "react";

const useFunction=()=>{
    const [cart, setCart] = useState([]);
    const addToCart=(name, price, quantity)=>{
        setCart([...cart, {name, price, quantity}]);
    }
    const countTotal = cart.reduce((acc, cart)=>{
        return acc + (cart.price * cart.quantity);
    }, 0);
    return {
        addToCart,
        cart,
        countTotal
    }
}
export default useFunction;
import { useState } from "react";

const useFunction=()=>{
    const [cart, setCart] = useState([]);
    const [update, setUpdate] = useState(true);
    const addToCart=(name, price, quantity)=>{
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ name, price, quantity });
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(cart);
        setUpdate(true);
    }
    const getCartData=()=>{
        let locatCartData = JSON.parse(localStorage.getItem("cart"));
        setCart(locatCartData);
        setUpdate(false);
    }
    
    return {
        addToCart,
        getCartData,
        cart,
        update
    }
}
export default useFunction;
import React from "react";


let i = 0;
const Calculate = (cart) =>
    {
    const data = cart.map((cart) => cart.price);
        if (i === 0) {
            window.alert("Empty cart")
        }
        else{
        data.forEach((data)=>{ i = i+ data})
        window.alert("The amount is "+i)
    }
    }

export default Calculate;


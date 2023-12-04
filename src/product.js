import React from 'react';
import './App.css'
function Product({product,onAddtoCart}){
return (
    <div class name="product">
        <h2>{product.name}</h2>
        <img src={product.image} style={{height: "100px", width: "100px"}}></img>
        <p>{product.price}</p>
        <button onClick={()=>onAddtoCart(product)}>Add to cart</button>
    </div>
);
}
export default Product;
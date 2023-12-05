import React,{useState} from 'react';
import'./App.css';
import Product from './product';
import Cart from './Cart';
import Grapes from './Grapes.jpg';
import Mango from './Mango.jpg';
import watermelon from './watermelon.jpg';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>

const products=[
  {id:1,name:"Mango",price:100, image:Mango},
  {id:2,name:"Grapes", price:200,  image:Grapes},
  {id:3,name:"Water Melon", price:300, image:watermelon}
]
function App(){
  const[cart,setCart]=useState([]);

  const AddtoCart=(product)=>{
  setCart([...cart,product]);
};

const removefromcart=(product)=>{
  setCart(cart.filter((item)=>item.id !== product.id));
};
return(
  <div className='app'>
    <h1 id="shopping"><center>Shopping center</center></h1>
    <div className="product-container">
      {products.map((product)=>(
      <Product product={product}onAddtoCart={AddtoCart}/>
      ))}
    </div>
    <Cart cart={cart} onRemoveFromCart={removefromcart}/>
  </div>
);
}
export default App;
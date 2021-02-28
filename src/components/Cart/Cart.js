import React from 'react';

const Cart = (props) => {
    console.log(props.cart)
    const cart=props.cart;
    console.log(cart);
    const totalPrice=cart.reduce((total,prd)=> total+prd.price,0);
   let shipping=12.99;
   if(totalPrice>50){
       shipping=0;
   }
   else if(totalPrice<30){
       shipping=4.99;
   }
   const tax=totalPrice*0.1;
    return (
        <div>
            <h2>Order Summery</h2>
            <h3>Items Orders: {cart.length}</h3>
            <p>Items ${totalPrice} </p>
            <p>Shipping and Handling: ${shipping} </p>
            <p>Total before tax:${totalPrice}</p>
            <p>Estimated Tax: ${tax} </p>
            <h2>Total price: ${totalPrice+tax} </h2>
        </div>
    );
};

export default Cart;
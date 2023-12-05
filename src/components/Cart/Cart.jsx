import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart;
    // const {cart} = props;

    let total = 0;
    for (const product of cart){
        total = total + product.price;
    }

    return (
        <div className='cart-details'>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Cost: $</p>
            <p>Tax: $</p>
            <h3>Grand Total: $</h3>
        </div>
    );
};

export default Cart;
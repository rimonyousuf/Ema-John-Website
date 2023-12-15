import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,handleClearCart,children}) => {
    // const cart = props.cart;
    // const {cart} = props;

    let totalPrice = 0;
    let totalShippingCost = 0;
    let quantity = 0;
    for (const product of cart){
        if (product.quantity === 0){
            product.quantity = 1;
        }
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShippingCost = totalShippingCost + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = (totalPrice * 7) / 100;
    const grandTotal = totalPrice + totalShippingCost + tax;

    return (
        <div className='cart-details'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Total Shipping Cost: ${totalShippingCost.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                Clear Cart
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;
import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img,name,price,seller,ratings} = props.product;

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='products-details'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart 
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,name,price,seller,ratings} = props.product
    return (
        <div className='products-details'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p><small>Manufacturer: {seller}</small></p>
            <p><small>Rating: {ratings}</small></p>
        </div>
    );
};

export default Product;
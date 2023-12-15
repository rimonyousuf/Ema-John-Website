import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(()=>{
        fetch('../../../public/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step-1: get the id of the product
        for(const id in storedCart){
            // step-2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct){
                // step-3: added quantity
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                // step-4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
        }
        // step-5: set the cart
        setCart(savedCart);
    },[products])

    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key = {product.id}
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart = {cart} 
                    handleClearCart={handleClearCart}
                >
                    <Link to="/orders">
                        <button className='btn-proceed'>
                            Review Order
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;
const setItem = id => {
    let shoppingCart = getItem();
    const quantity = shoppingCart[id];
    if(!quantity){
        shoppingCart[id] = 1;
    }
    else{
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('Shop-cart', JSON.stringify(shoppingCart));
}

const deleteData = id => {
    let shoppingCart = getItem();
    if (id in shoppingCart){
        delete shoppingCart[id];
        localStorage.setItem('Shop-cart', JSON.stringify(shoppingCart));
    }
}

const getItem = () => {
    let shoppingCart = {};
    const storeShopCart = localStorage.getItem('Shop-cart');
    if(storeShopCart){
        shoppingCart = JSON.parse(storeShopCart);
    }
    return shoppingCart;
}

const clearItem = () => {
    localStorage.removeItem('Shop-cart');
}

export{
    setItem(),
    deleteData(),
    getItem(),
    clearItem()
}
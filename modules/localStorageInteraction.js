const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';



    saveProductToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = product + ' : ' + quantity;
    ul.append(li)
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart)
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart))
}

const showSavedData = () => {
    const cart = getStoredShoppingCart();
    for (let product in cart) {
        const quantity = cart[product]
        displayProduct(product, quantity);
    }
}

showSavedData()
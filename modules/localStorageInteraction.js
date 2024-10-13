const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';


    displayProduct(product, quantity);
}

const displayProduct = (product, quantity) => {

    const li = document.createElement('li');
    li.innerText = product + ' : ' + quantity;
    const ul = document.getElementById('product-container');
    ul.append(li)
}
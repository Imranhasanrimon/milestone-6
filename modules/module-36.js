// const setAge = localStorage.setItem('Age', 23);
// console.log(localStorage.getItem('Age'));

// const obj = {
//     name: "Imran Hasan",
//     Age: 23,
//     Profession: "Web Developer",
// }

// localStorage.setItem('person', JSON.stringify(obj))

// console.log(JSON.parse(localStorage.getItem('person')));
// localStorage.removeItem('name')
// const obj = {};
// const saveInLocalStorage = (name, quantity) => {
//     obj[`${name}`] = quantity;
//     console.log(obj);
//     localStorage.setItem(newObj, JSON.stringify(obj))
// };

const getInputValue = () => {
    const productName = document.getElementById('product-name').value;
    const productQuantity = document.getElementById('product-quantity').value;


    setCart(productName, productQuantity);


    document.getElementById('product-name').value = ''
    document.getElementById('product-quantity').value = ''
}

const getStoredValue = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}


const setCart = (productName, productQuantity) => {
    const storedCart = getStoredValue();
    storedCart[productName] = productQuantity;
    localStorage.setItem('cart', JSON.stringify(storedCart))

    // console.log(storedCart);
}
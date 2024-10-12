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

const getInputValue = () => {
    const productName = document.getElementById('product-name').value;
    const productQuantity = document.getElementById('product-quantity').value;
    saveInLocalStorage(productName, productQuantity);


    document.getElementById('product-name').value = ''
    document.getElementById('product-quantity').value = ''
}

const obj = {};

const saveInLocalStorage = (name, quantity) => {
    obj[`${name}`] = quantity;
    console.log(obj);



    localStorage.setItem('newObj', JSON.stringify(obj))

}
    ;
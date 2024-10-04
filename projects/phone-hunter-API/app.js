const loadAllPhones = async (status, brandName = "") => {
    document.getElementById('spinner').classList.add('hidden');
    console.log(brandName);
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
    const data = await response.json();

    if (status) {
        console.log(data.data);
    } else {
        displayAllPhones(data.data);
    }
}

const displayAllPhones = (phones) => {
    // console.log(phones.slice(0, 6));

}


const handleShowAll = () => {
    loadAllPhones(true)
}




const handleSearch = () => {
    const inputValue = document.getElementById('input-value').value
    console.log(inputValue);
    document.getElementById('spinner').classList.remove('hidden')
    setTimeout(() => {
        loadAllPhones(false, inputValue)
    }, 700)
}

loadAllPhones()
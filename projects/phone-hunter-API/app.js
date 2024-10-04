const loadAllPhones = async () => {
    document.getElementById('spinner').classList.add('hidden');

    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
    const data = await response.json();
    console.log(data);

}

const handleSearch = () => {

    document.getElementById('spinner').classList.remove('hidden')
    setTimeout(() => {
        loadAllPhones()
    }, 700)
}
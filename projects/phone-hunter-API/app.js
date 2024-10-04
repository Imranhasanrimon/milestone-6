const loadAllPhones = async (status, brandName) => {
    document.getElementById('spinner').classList.add('hidden');
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName ? brandName : 'iphone'}`);
    const data = await response.json();

    if (status) {
        console.log(data.data);
    } else {
        displayAllPhones(data.data.slice(0, 6));
    }
}

const displayAllPhones = (phones) => {
    const phoneContainer = document.getElementById('phones-container');
    phones.forEach(phone => {

        const { brand, image, slug } = phone;
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="${image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${brand}</h2>
    <p>${slug}</p>
    <div class="card-actions justify-end">
      <button onclick="phoneDetails('${slug}')" class="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>
        `
        phoneContainer.append(div)
    });
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


const phoneDetails = async (slug) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`);
    const data = await response.json();
    console.log(data.data);
}

loadAllPhones(false, 'iphone')

//this project is almost done
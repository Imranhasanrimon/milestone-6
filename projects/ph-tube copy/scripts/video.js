const loadCategories = async () => {
    const response = await fetch(' https://openapi.programming-hero.com/api/phero-tube/categories');
    const data = await response.json();
    displayCategories(data.categories);
};

const loadAllVideos = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
    const data = await response.json();
    displayAllVideos(data.videos);
};

const loadVideoByCategory = async (id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`);
    const data = await response.json();
    displayAllVideos(data.category);
    activeBtn(id);
}

const loadVideoById = async (id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${id}`);
    const data = await response.json();
    showModal(data)
}

const activeBtn = (id) => {
    const buttons = document.getElementsByClassName('category-btn');
    for (let button of buttons) {
        button.classList.remove('bg-red-500')
    }
    document.getElementById(id).classList.add('bg-red-500')
}

const displayCategories = (categories) => {
    const buttonContainer = document.getElementById('categories');
    categories.forEach((category) => {
        const button = document.createElement('button');
        button.classList = "btn category-btn";
        button.setAttribute('onclick', `loadVideoByCategory(${category.category_id})`)
        button.setAttribute('id', `${category.category_id}`)
        button.innerText = category.category;
        buttonContainer.append(button)
    })
};
const showModal = (data) => {
    const modalBody = document.getElementById('modal_body');
    modalBody.innerHTML = `
    <img src="${data.video.thumbnail}">
    <h2 class="font-bold text-lg">${data.video.title}</h2>
    <p>${data.video.description}</p>
    `;
    my_modal_5.showModal()
}
const displayAllVideos = (videos) => {
    const cardContainer = document.getElementById('videos');
    cardContainer.innerHTML = '';

    if (videos.length == 0) {
        cardContainer.classList.remove('grid')
        cardContainer.innerHTML = `
        <div class="mt-10 flex justify-center item-center ">
        <div>
        <img src="./assets/Icon.png">
        <h1>No Videos Available</h1>
        </div>
        </div>
        `
    } else {
        cardContainer.classList.add('grid')
    };

    videos.forEach((video) => {
        const card = document.createElement('div');
        card.classList = 'card card-compact border';
        card.innerHTML = `
         <figure class="h-52">
    <img class="h-full w-full object-cover"
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <div class="flex gap-2">
       <div>
       <img class="w-10 h-10 rounded-full" src="${video.authors[0].profile_picture}">
       </div>
       <div>
       <h1 class="font-bold">${video.title}</h1>
       <h1 class="font-medium text-gray-500">${video.authors[0].profile_name}
       <span>${video.authors[0].verified ? "✔" : ''}</span>
       </h1>
       <p class="mt-2">${video.others.views} views</p>
       </div>
    </div>
    <div class="card-actions justify-end">
      <button onclick="loadVideoById('${video.video_id}')" class="btn btn-primary btn-sm">Details</button>
    </div>
  </div>
        `;
        cardContainer.append(card);
    })

}









loadCategories()
loadAllVideos();
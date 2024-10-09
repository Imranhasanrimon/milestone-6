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

const displayCategories = (categories) => {
    const buttonContainer = document.getElementById('categories');
    categories.forEach((category) => {
        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = category.category;
        buttonContainer.append(button)
    })
}
const displayAllVideos = (videos) => {
    const cardContainer = document.getElementById('videos');
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
      <button class="btn btn-primary btn-sm">Details</button>
    </div>
  </div>
        `;
        cardContainer.append(card)
    })
    console.log(videos[0].authors);

}










loadCategories()
loadAllVideos();
//get time
function getTimeString(time) {
    //get hours and rest seconds
    const hour = parseInt(time / 3600);
    let remainingSecond = (time % 3600);
    const minute = parseInt(remainingSecond / 60);
    remainingSecond %= 60;

    return `${hour} hours ${minute} minutes ${remainingSecond} seconds ago`
}

const removeActiveCalass = () => {
    const buttons = document.getElementsByClassName('category-btn')
    for (let btn of buttons) {
        btn.classList.remove('bg-red-500', 'text-white')
    }
}

const loadDetails = async (videoId) => {
    const uri = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
    const res = await fetch(uri);
    const data = await res.json()
    displayDetails(data.video)

}

const displayDetails = (video) => {
    const detailsContainer = document.getElementById('modal-content');
    detailsContainer.innerHTML = `
    <img src="${video.thumbnail}">
    <p>${video.description}</p>
    `
    //way- 1
    document.getElementById('showModal').click()
    //way- 2
    // document.getElementById('customModal').showModal()
}
const loadCategories = () => {
    //fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(err => console.log(err))
}

const loadVideos = (searchValue = '') => {
    //fetch the data
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchValue}`)
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(err => console.log(err))
}
//load category videos
const loadCategoryVideos = (id) => {
    //fetch the data
    fetch(` https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => {
            removeActiveCalass()
            const activeBtn = document.getElementById(id)
            activeBtn.classList.add('bg-red-500', 'text-white')
            displayVideos(data.category)
        })
        .catch(err => console.log(err))
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    videoContainer.innerHTML = '';
    if (videos.length == 0) {
        videoContainer.classList.remove('grid')
        videoContainer.innerHTML = `
        <div class="flex justify-center  h-[500px] items-center flex-col ">
          <img src="./assets/Icon.png">
          <h2 class="mt-5 font-bold text-xl">No Content Available Here</h2>
        </div>
        `
        return
    } else {
        videoContainer.classList.add('grid')
    }
    videos.forEach(item => {
        const card = document.createElement('div');
        card.classList = 'card card-compact  shadow-sm border'
        card.innerHTML = `
       <figure class="h-[200px] relative">
    <img
      src="${item.thumbnail}" class="h-full w-full object-cover"
      alt="Shoes" />
      ${item.others.posted_date?.length == 0 ? "" : ` <span class="absolute right-2 bottom-2 bg-black text-white text-xs rounded p-1">${getTimeString(item.others.posted_date)}</span>`}
     
  </figure>
  <div class="px-0 py-2 flex gap-2s">
   <div>
   <img class="w-10 h-10 rounded-full object-cover" src="${item.authors[0].profile_picture}">
   </div>
   <div>
   <h2 class="font-bold">${item.title}</h2>
   <div class="flex items-center gap-2">
   <p class="text-gray-400">${item.authors[0].profile_name}</p>

   ${item.authors[0].verified == true ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=p9jKUHLk5ejE&format=png">` : ""}

   </div>
   <p><button onclick="loadDetails('${item.video_id}')" class="btn btn-sm btn-error">Details</button></p>
   </div>
  </div>
       `
        videoContainer.append(card)
    })
}


const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories')
    categories.forEach(item => {
        const button = document.createElement('button');
        button.classList = 'btn category-btn';

        button.innerText = item.category;
        button.setAttribute('onclick', `loadCategoryVideos(${item.category_id})`)
        button.setAttribute('id', `${item.category_id}`)

        categoryContainer.append(button)
    })
}

document.getElementById('search-input').addEventListener('keyup', (e) => {
    const searchValue = e.target.value
    console.log(searchValue);
    loadVideos(searchValue)
})






loadCategories()
loadVideos()


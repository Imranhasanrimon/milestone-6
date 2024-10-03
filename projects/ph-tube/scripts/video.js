const loadCategories = () => {
    //fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(err => console.log(err))
}

const loadVideos = () => {
    //fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(err => console.log(err))
}
const demo = {
    "category_id": "1003",
    "video_id": "aaaf",
    "thumbnail": "https://i.ibb.co/5LRQkKF/stick-and-stones.jpg",
    "title": "Sticks & Stones",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/rdTZrCM/dev.jpg",
            "profile_name": "Dave Chappelle",
            "verified": true
        }
    ],
    "others": {
        "views": "113K",
        "posted_date": ""
    },
    "description": "Dave Chappelle's 'Sticks & Stones' has garnered 113K views and remains a controversial yet highly engaging piece of stand-up comedy. Known for his fearless approach, Dave dives into a wide range of topics, delivering his unique perspective with wit and sharp humor. As a verified artist, Dave's comedy is raw, honest, and unapologetically funny."
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos')
    videos.forEach(item => {
        const card = document.createElement('div');
        card.classList = 'card card-compact  shadow-sm border'
        card.innerHTML = `
       <figure class="h-[200px] relative">
    <img
      src="${item.thumbnail}" class="h-full w-full object-cover"
      alt="Shoes" />
      <span class="absolute right-2 bottom-2 bg-black text-white rounded p-1">${item.others.posted_date}</span>
  </figure>
  <div class="px-0 py-2 flex gap-2">
   <div>
   <img class="w-10 h-10 rounded-full object-cover" src="${item.authors[0].profile_picture}">
   </div>
   <div>
   <h2 class="font-bold">${item.title}</h2>
   <div class="flex items-center gap-2">
   <p class="text-gray-400">${item.authors[0].profile_name}</p>

   ${item.authors[0].verified == true ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=p9jKUHLk5ejE&format=png">` : ""}

   </div>
   <p></p>
   </div>
  </div>
       `
        videoContainer.append(card)
    })

}


const displayCategories = (categories) => {
    categories.forEach(item => {
        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category;

        document.getElementById('categories').append(button)
    })
}








loadCategories()
loadVideos()
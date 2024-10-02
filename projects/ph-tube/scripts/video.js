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

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos')
    videos.forEach(item => {
        const card = document.createElement('div');
        card.classList = 'card card-compact  shadow-sm border'
        card.innerHTML = `
       <figure>
    <img
      src="${item.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
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
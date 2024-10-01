function apiCall() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => showPhoto(data))
}

function showPhoto(photos) {
    const container = document.getElementById('photos-container');

    for (let photo of photos) {
        const img = document.createElement('img');
        img.classList.add('img')
        img.setAttribute('src', `${photo.url}`)
        container.append(img)
    }
}

apiCall()
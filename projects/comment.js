function showData() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => clientSide(data))
}

function clientSide(comments) {
    const container = document.getElementById('comment-container');
    for (let comment of comments) {
        const div = document.createElement('div');
        div.classList.add('comment')
        div.innerHTML = `
        <h3>${comment.id}</h3>
        <h4>${comment.name}</h4>
        <h5>${comment.email}</h5>
        <h6>${comment.body}</h6>
        `
        container.append(div)
    }
}

showData()
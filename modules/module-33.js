/*                      EXPLORING API                */
// _____________________________________________________________

// const user = { id: 1, name: 'Imran Hasan', job: 'Developer' }
// const stringified = JSON.stringify(user)
// console.log(user);
// console.log(stringified);
// const jsonobj = JSON.parse(stringified);
// console.log(jsonobj);

//fetch________
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => console.log(response))
// .then(json => console.log(json))

// const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json))

// function loadData() {
//     const url = 'https://jsonplaceholder.typicode.com/todos/1';
//     fetch(url)
//         .then(response => response.json())
//         .then(json => console.log(json))

// }

// function loadUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => showData(data))
// }

// function showData(data) {
//     console.log(data);
// }

// function userInfo() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => showNames(data))
// }

// function showNames(users) {
//     const ul = document.getElementById('list-container')
//     for (let user of users) {
//         const li = document.createElement('li');
//         li.innerText = user.name;
//         ul.append(li)
//     }
// }

//----------=====loading post=====----------
// function apiCall() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(data => showPosts(data))
// }

// function showPosts(posts) {
//     const container = document.getElementById('post-container');

//     for (let post of posts) {
//         const div = document.createElement('div');
//         div.classList.add('post')
//         div.innerHTML = `
//         <h2>${post.id}</h2>
//         <h3>${post.title}</h3>
//         <h4>${post.body}</h4>
//         `;
//         container.append(div);
//     }
// }

// apiCall()

//----------==========quiz===========-----------
const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name?.roll); 
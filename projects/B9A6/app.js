


const loadAllPosts = async () => {

    const response = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const data = await response.json();
    console.log(data);
}

loadAllPosts()





















// //latest post
// fetch(" https://openapi.programming-hero.com/api/retro-forum/latest-posts")
//     .then(res => res.json())
//     .then(data => console.log(data))
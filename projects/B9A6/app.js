


const loadAllPosts = async () => {

    const response = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const data = await response.json();
    displayAllPosts(data.posts);
}

const displayAllPosts = (posts) => {
    const postContainer = document.getElementById('post-container');
    posts.forEach((post) => {
        const { author, category, comment_count, view_count, posted_time, description, image, title, isActive } = post
        //each post
        const div = document.createElement('div');
        div.classList = "flex items-start gap-7 bg-red-50 rounded-xl p-3 ";
        div.innerHTML = `
         <!-- avatar -->
                    <div class="avatar ${isActive ? "online" : "offline"}">
                        <div class="w-24 rounded-full">
                            <img src="${image}" />
                        </div>
                    </div>
        <!-- avatar info  -->
        <div class="space-y-2 relative max-w-[350px]">
            <div class="text-gray-500 font-medium space-x-4">
                <span># ${category}</span>
                <span> Author: ${author.name}</span>
            </div>
            <h2 class="text-xl font-bold">${title}</h2>
            <p class="text-gray-500 ">${description}</p>
            <!-- divider  -->
            <div class="divider "></div>
            <div class="space-x-3">
                <i class="fa-regular fa-comment"></i> ${comment_count}
                <i class="fa-regular fa-eye"></i> ${view_count}
                <i class="fa-regular fa-clock"></i> ${posted_time} min
            </div>
            <!-- Mark button  -->
            <div onclick="mark()" class="absolute right-3 bottom-0 text-white bg-green-400 w-8 h-8 flex justify-center items-center rounded-full cursor-pointer hover:rotate-6">
            <i class="fa-solid fa-message "></i>
            </div>
        </div>
        `
        postContainer.append(div)
    })

}
let counter = 1;
const mark = (post) => {
    document.getElementById('counter').innerText = counter++;
    const markContainer = document.getElementById('mark-container');
    const div = document.createElement('div');
    div.classList = "bg-white p-2 rounded-lg flex justify-between items-center gap-5 mt-2"
    div.innerHTML = `
    <p>It is one thing to subject yourself to a costume mishap</p>
                        <div class="font-bold">1552</div>
    `;
    markContainer.append(div)
    console.log(post);
}


loadAllPosts()





















// //latest post
// fetch(" https://openapi.programming-hero.com/api/retro-forum/latest-posts")
//     .then(res => res.json())
//     .then(data => console.log(data))
const loadCategories = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    const data = await response.json();
    displayCategories(data.categories);
}
const displayCategories = (category) => {
    const categoryContainer = document.getElementById('food-container');
    category.forEach((food) => {
        const { strCategory, strCategoryThumb, strCategoryDescription } = food
        const foodCard = document.createElement('div');
        foodCard.classList = "grid grid-cols-3 items-center border rounded-lg p-6"
        foodCard.innerHTML = `
                    <!-- img  -->
                    <div>
                        <img class="rounded-full" src="${strCategoryThumb}" alt="">
                    </div>
                    <!-- text  -->
                    <div class="space-y-2 px-2 col-span-2">
                        <h3 class="text-xl font-semibold">${strCategory}</h3>
                        <p>${strCategoryDescription.slice(0, 100)} ...</p>
                        <span onclick="openModal()" class="inline-block text-yellow-400 hover:text-yellow-500 underline font-bold cursor-pointer">View Details</span>
                    </div>
        `;
        categoryContainer.append(foodCard)
    });

}

const openModal = () => {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
    
    `
    my_modal_5.showModal()
}




loadCategories()
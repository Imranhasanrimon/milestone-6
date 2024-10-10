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
        foodCard.classList = "grid grid-cols-3 items-center border rounded-lg"
        foodCard.innerHTML = `
         <!-- img  -->
                    <div>
                        <img  src="${strCategoryThumb}" alt="">
                    </div>
                    <!-- text  -->
                    <div class="space-y-2 px-2 py-4 col-span-2">
                        <h3 class="text-xl font-semibold">${strCategory}</h3>
                        <p>${strCategoryDescription.slice(0, 100)}...</p>
                        <span
                            class="block text-yellow-400 hover:text-yellow-500 underline font-bold cursor-pointer">View
                            Details</span>
                    </div>
        `;
        categoryContainer.append(foodCard)
    });

}






loadCategories()
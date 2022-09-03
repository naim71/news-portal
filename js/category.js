const loadCategories = async() => {
     const url = 'https://openapi.programming-hero.com/api/news/categories'
     const res = await fetch(url);
     const data = await res.json();
    displayCategories(data.data.news_category);
}
const displayCategories = categories => {
    const categoryList = document.getElementById('category-list');
    categories.forEach(category => {
        const categoryLi = document.createElement('li')
        categoryLi.classList.add('list-style');
        categoryLi.innerHTML=`
        <li>${category.category_name}</li>
        `;
        categoryList.appendChild(categoryLi);
        
    });

}
loadCategories();
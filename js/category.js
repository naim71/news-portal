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
        <li onclick = "loadCategoryId(${category.category_id})">${category.category_name}</li>
        `;
        categoryList.appendChild(categoryLi);
        
    });

}

const loadCategoryId = (categoryId) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/0${categoryId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategoryId(data.data))
}

const displayCategoryId = categoryCards =>{
    const categoryContainer = document.getElementById('category-card');
    categoryContainer.textContent = ``;
    categoryCards.forEach(card =>{
        const categoryCardDiv = document.createElement('div');
        categoryCardDiv.classList.add('card');
        categoryCardDiv.innerHTML= `
        <div class="card mb-3 MT-4 container d-flex justify-content-between border border-0 rounded-3 shadow-lg" onclick ="displayDetails('${card._id}')">
        <div class="d-flex">
          <div>
            <img src="${card.image_url}" class="img-fluid rounded-4 my-4 mx-4" style="height: 300px; width: 245px;">
          </div>
          <div class= "w-75 mt-4">
            <div class="card-body p-4">
              <h5 class="card-title">${card.title}</h5>
              <p class="card-text">${card.details}</p>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-4 p-4">
                <div class="d-flex">
                    <img src="${card.author.img}" class="img-fluid" style="height: 40px; width: 40px; border-radius: 50%;">
                        <div class="d-flex-column ms-4">
                             <p class="text-black mb-0">${card.author.name}</p>
                            <p class="text-muted">${card.author.published_date}</p>
                        </div>
                </div>
                        <p class="fs-5"><i class="bi bi-eye"></i> ${card.total_view}</p>
                <div class="fs-5 align-items-center">
                    <i class="bi bi-star-half"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                </div>
                    <i class="bi bi-arrow-right-square-fill text-primary fs-5"></i>
            </div>
          </div>
        </div>
    </div>`;
    categoryContainer.appendChild(categoryCardDiv);
    });
}

// const displayNewsCount = () => {
//     const countContainer = document.getElementById('total-news');
//     // countContainer.innerText= '${}'
// } 
// displayNewsCount();
loadCategories();

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
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategoryId(data.data))
}

const displayCategoryId = categoryCards =>{
    // console.log(categoryCards);
    categoryCards.forEach(card =>{
        const categoryContainer = document.getElementById('category-card');
        const categoryCardDiv = document.createElement('div');
        categoryCardDiv.classList.add('card');
        categoryCardDiv.innerHTML= `
    <div class="d-flex justify-content-evenly mb-2">
    <div>
    <img src="${card.image_url}" class="img-fluid p-4 rounded-5" style="height: 300px; width: 245px;">
    </div>
    <div class="p-4 w-75">
    <div class="card-body">
    <h5 class="card-title fw-bold">${card.title}</h5>
    <p class="card-text">${card.details}</p>
    <div class="d-flex justify-content-between align-items-center mt-4">
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
    // const categoryContainer = document.getElementById('category-card');
    // const categoryCardDiv = document.createElement('div');
    // categoryCardDiv.classList.add('card')
    // categoryCardDiv.innerHTML= `
    // <div class="d-flex justify-content-evenly mb-2">
    // <div>
    // <img src="${categoryCards.data[1].image_url}" class="img-fluid p-4 rounded-5" style="height: 300px; width: 245px;">
    // </div>
    // <div class="p-4 w-75">
    // <div class="card-body">
    // <h5 class="card-title fw-bold">${categoryCards.data[0].title}</h5>
    // <p class="card-text">${categoryCards.data[0].details}</p>
    // <div class="d-flex justify-content-between">
    // <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    //  <p><i class="bi bi-eye"></i> ${categoryCards.data[0].total_view}</p>
    //  <div>
    //      <i class="bi bi-star-half"></i>
    //      <i class="bi bi-star"></i>
    //      <i class="bi bi-star"></i>
    //      <i class="bi bi-star"></i>
    //      <i class="bi bi-star"></i>
    //  </div>
    //  <i class="bi bi-arrow-right-square-fill"></i>

    //                  </div>
    
    //                  </div>
    //                </div>
    //              </div>`;
    // // categoryContainer.appendChild(categoryCardDiv);



}
loadCategories();

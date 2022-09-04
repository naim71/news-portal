const loadCategories = async() => {
     const url = 'https://openapi.programming-hero.com/api/news/categories'
     try{
         const res = await fetch(url);
         const data = await res.json();
        displayCategories(data.data.news_category);
     }
     catch{
        console.log(error);
     }
}
const displayCategories = categories => {
    const categoryList = document.getElementById('category-list');
    categories.forEach(category => {
        const categoryLi = document.createElement('button')
        categoryLi.classList.add('list-style');
        categoryLi.innerHTML=`
        <button class="btn btn-outline-primary" onclick = "loadCategoryId(${category.category_id}),toggleSpinner(true)">${category.category_name}</button>`;

        categoryList.appendChild(categoryLi);
        
    });
}
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

const loadCategoryId = (categoryId) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/0${categoryId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategoryId(data.data))
    .catch(error => console.log(error))
    
}

const displayCategoryId = categoryCards =>{
    const countNews = document.getElementById('total-news');
    countNews.textContent = ``;
    const size = categoryCards.length;
    const newCounter = document.createElement('p');
    newCounter.innerHTML = `<p><strong>${size}</strong> items found on this category</p>`;
    countNews.appendChild(newCounter);

    const categoryContainer = document.getElementById('category-card');
    categoryContainer.textContent = ``;
    categoryCards.forEach(card =>{
        const modalTitle = document.getElementById('ModalLabel');
        modalTitle.innerText = card.title;
        const modalAuthor = document.getElementById('author-name');
        modalAuthor.innerHTML = `
        <img src="${card.image_url}" class="img-fluid rounded-4 my-4 mx-4" style="height: 200px; width: auto;">`
        const modalDetails = document.getElementById('news-details');
        modalDetails.innerText = card.details;
        
        const categoryCardDiv = document.createElement('div');
        categoryCardDiv.classList.add('card');
        categoryCardDiv.innerHTML= `
        <div class="card mb-3 MT-4 container d-flex justify-content-between border border-0 rounded-3 shadow-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div class="d-flex">
          <div>
            <img src="${card.image_url}" class="img-fluid rounded-4 my-4 mx-4" style="height: 300px; width: 245px;">
          </div>
          <div class= "w-75 mt-4">
            <div class="card-body p-4">
              <h5 class="card-title">${card.title}</h5>
              <p class="card-text">${card.details.slice(0,500)}</p>
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
    toggleSpinner(false);
}


loadCategories();

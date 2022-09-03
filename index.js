const loadCategories = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
}
const displayCategories= categories =>{
    // console.log(categories);
    const categoriesContainer = document.getElementById('categoriesContainer');
    categories.forEach(category => {
        const categoryInput = document.createElement('label');
    categoryInput.innerHTML = `
                 <label class="btn d-inline mx-4 ps-3 pe-3" onclick ="loadNews(${category.category_name})">${category.category_name}</label>
                 
                            
    `;
    categoriesContainer.appendChild(categoryInput);
        
    });

}
const loadNews =async() =>{
    const url = `https://openapi.programming-hero.com/api/news`
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data);
        
}
const displayNews = newsDetails =>{
    const newsContainer = document.getElementById('news-container');
    newsDetails.forEach(News =>  {
     const newsDiv = document.createElement('div');
    newsDiv.innerHTML = `
          <div class="col-md-4 mt-2">
          <img src="${News.rating.thumbnail_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${News.rating.title}</h5>
            <p class="card-text">${News.details}</p>
            <p class="card-text">${News.details}<small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
                 
                            
    `;
    categoriesContainer.appendChild(categoryInput);
        
    });
}
 
loadCategories();

const loadCategories = async(category_id) =>{
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
                 <label class="btn d-inline mx-4 ps-3 pe-3" onclick ="loadNews('${category.category_id}')">${category.category_name}</label>
                 
                            
    `;
    categoriesContainer.appendChild(categoryInput);
        
    });

}
const loadNews =async(id) =>{
    const url = `https://openapi.programming-hero.com/api/news=${id}`
     fetch(url)
    .then (res=> res.json())
    .then (data => displayNews(data[0].data))
        
}
const displayNews = News =>{
    const newsContainer = document.getElementById('news-container');
   
        // console.log(News);
     
    newsContainer.innerHTML = `
          <div class="col-md-4 mt-2">
          <img src="${News.rating.thumbnail_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${News.rating.title}</h5>
            <p class="card-text">${News.author.details}</p>
            <p class="card-text">${News.author.details}<small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
                 
                            
    `;
   
   
        

}
 
loadCategories();

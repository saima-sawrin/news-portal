const loadCategories = () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then (res=> res.json())
    .then (data => displayCategories(data.data.news_category))
    .catch((e) => {
        console.log('Error:', e);
    });
    
}
    const displayCategories= categories =>{
    const categoriesContainer = document.getElementById('categoriesContainer');
    categories.forEach(category => {
        const categoryInput = document.createElement('label');
    categoryInput.innerHTML = `
                 <label class="btn d-inline mx-4 ps-3 pe-3" onclick ="loadNews()">${category.category_name}</label>
                               
    `;
    categoriesContainer.appendChild(categoryInput);
        
    });

}
// News Details

// const loadNews = async(newsId) =>{
//     const url = `https://openapi.programming-hero.com/api/news=${newsId}`
//     const res = await fetch(url)
//     const data = await res.json()
//     displayNews(data);

// }
const loadNews = () => { 
    fetch ( 'https://openapi.programming-hero.com/api/news/category/01' ) 
    . then ( res => res . json ()) 
    . then ( newsData => displayNews ( newsData ))
    .catch((e) => {
        console.log('Error:', e);
    });
 }
        const displayNews = newsData =>{
   
       const newsContainer = document.getElementById('news-container');
       // console.log(newsData);
       for ( const allNews of newsData.data )
       {
        // console.log(News.rating);
        const newsDiv =  document.createElement('div');
        newsDiv.classList.add('news-item');
        newsDiv.innerHTML = `
        <div class="card mb-3" >
         <div class="row g-0"> 
         <div class="col-md-4">
          <img src=" ${allNews.thumbnail_url} " class="img-fluid rounded- start" alt="..."> </div>
           <div class="col-md-8"> 
           <div class="card-body">
            <h5 class="card-title">${allNews.title}</h5> 
            <p class="card-text"> ${allNews.details}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> 
            </div> 
            </div> 
            </div> 
            </div>
                
        `;
        newsContainer.appendChild(newsDiv);
    }
}

// loadNews();
 
loadCategories();

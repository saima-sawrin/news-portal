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
const loadNews = (id) => { 
    fetch ( `https://openapi.programming-hero.com/api/news/category/03` ) 
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
        newsDiv.classList.add('news-item', 'authorImg');
        newsDiv.innerHTML = `
        <div class="card mb-3 mt-5 mx-5" >
         <div class="row g-0"> 
         <div class="col-md-3">
          <img src=" ${allNews.image_url} " class="img-fluid rounded- start px-3" alt="..."> 
          </div>
           <div class="col-md-8"> 
           <div class="card-body">
            <h5 class="card-title">${allNews.title}</h5> 
            <p class="card-text"> ${allNews.details}</p>
            <div class ="d-flex justify-content-around">
            <div >
            <img id ="authorImg" class="rounded mx-auto" src ="${allNews.author.img}"> <small class="text-muted">
            <p class="card-text"> ${allNews.author.name}</small></p> 
            <p class="card-text"> ${allNews.author.published_date}</small></p> 
            </div>
            <div>
            <img src ="image/eye.png"> <small class="text-muted">
            <p class="card-text> ${allNews.total_view }</p>
            </div>
            <div>
            <img src ="image/rating.png"> <small class="text-muted">
            <p> ${allNews.rating.badge}  <br> ${allNews.rating.number}  </p>
            </div>
            </div>
            
            </div>
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

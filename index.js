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
    // console.log(categories);
    const categoriesContainer = document.getElementById('categoriesContainer');
    categories.forEach(category => {
        const categoryInput = document.createElement('label');
    categoryInput.innerHTML = `
                 <label class="btn d-inline mx-4 ps-3 pe-3" onclick ="loadNews(${category.category_id})">${category.category_name}</label>
                               
    `;
    categoriesContainer.appendChild(categoryInput);
        
    });

}

const loadNews = async(newsId) =>{
    const url = `https://openapi.programming-hero.com/api/news=${newsId}`
    const res = await fetch(url)
    const data = await res.json()
    displayNews(data);

}

const displayNews = newsData =>{
    for(const allNews of newsData.data){
        console.log(allNews.rating);
    }
    // const newsContainer = document.getElementById('news-container');
    // console.log(totalNews);
    // totalNews.forEach(News.data =>{
    //     console.log(News.rating);
        // const newsDiv =  document.createElement('div');
        // newsDiv.innerHTML = `
        // <div class="col-md-4 mt-2">
         
        //     <h5 class="title">Nothing</h5>
           
        //   </div>
        // </div>
                
        // `;
        // newsContainer.appendChild(newsDiv);
    }
           


// loadNews();
 
loadCategories();

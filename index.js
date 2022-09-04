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
        categoryInput.classList.add('newsCat');
    categoryInput.innerHTML = `
                 <label id="${category.category_id}" class="btn d-inline mx-4 ps-3 pe-3" onclick ="loadNews(this.id)">${category.category_name}</label>
                               
    `;
    categoriesContainer.appendChild(categoryInput);
        
    });
    

}

const loadNews = id => { 
    toggleSpinner(true);
    fetch ( `https://openapi.programming-hero.com/api/news/category/${id}` ) 
    . then ( res => res . json ()) 
    . then ( newsData => displayNews ( newsData ))
    .catch((e) => {
        console.log('Error:', e);
    });
 }
        const displayNews = newsData =>{
   
       const newsContainer = document.getElementById('news-container');
       newsContainer.textContent = '';
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
          <img src=" ${allNews.image_url} " class="img-fluid rounded- start px-3 w-100 h-100 " alt="..."> 
          </div>
           <div class="col-md-8"> 
           <div class="card-body">
            <h5 class="card-title">${allNews.title}</h5> 
            <p class="card-text"> ${allNews.details.slice(0, 400)+ "......."}</p>
            <div class ="d-flex justify-content-around">
            <div>
            <img id ="authorImg" class="rounded mx-auto" src ="${allNews.author.img}"> <small class="text-muted">
            <p class="card-text"> ${allNews.author.name}</small></p> 
            <p class="card-text"> ${allNews.author.published_date}</small></p> 
            </div>
            <div>
            <img src ="image/eye.png"> 
            <p class="card-text> <small class="text-muted"> ${allNews.total_view }</small></p>
            </div>
            <div>
            <img src ="image/rating.png"> <small class="text-muted">
            <p> ${allNews.rating.badge}  <br> ${allNews.rating.number} </small>  </p>
            </div>
            <div>

            <small><button id ="${allNews._id}" onclick="showDetails('${allNews._id}')"  type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Details</button>
            </small>
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
    toggleSpinner(false);
}
// Spinner
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none');
    }
}
const showDetails = newsId => {
    fetch(`https://openapi.programming-hero.com/api/news/${newsId}`)
    .then(res => res.json())
    .then(detailsData => modalDetails(detailsData)  )
  }
  const modalDetails = detailsData =>{
    //console.log(detailsData.data[0].author.name)
    const modalTitle = document.getElementById('exampleModalLabel')
    modalTitle.innerText = detailsData.data[0].author.name? detailsData.data[0].author.name:'No Name Found'
    const modalBody = document.getElementById('modalbody')
    modalBody.innerHTML =`
      <p> Total Views : ${detailsData.data[0].total_view? detailsData.data[0].total_view:'No Data Found'} </P>
      <p> Rating : ${detailsData.data[0].rating.number? detailsData.data[0].rating.number:'No Data Found'} </P>
    `
  }  
loadCategories();

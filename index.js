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
const loadNews = code =>{
    const url = ``
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data.news_category);
        
}
 
loadCategories();

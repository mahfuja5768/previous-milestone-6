const loadCategories = async () =>{
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    try{
      const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category)
    }
    catch(e){
      console.log(e)
    }
};
const displayCategories = (categories) =>{
  // console.log(categories)
    categories.forEach(category =>{
        const categoriesName = document.getElementById('categories-name');
        const categoryLi = document.createElement('li');
        categoryLi.innerHTML= `
        <h3 onclick="loadCategory('${category.category_id}')" href="#" class="fw-medium fs-6 border-0 bg-transparent text-secondary" >${category.category_name}</h3>
        `;
        categoriesName.appendChild(categoryLi);
     })

};
loadCategories()

const loadSpinner = isLodding =>{
  const loderSection = document.getElementById('spinner');
  if(isLodding){
      loderSection.classList.remove('d-none')
  }
  else{
      loderSection.classList.add('d-none')
  }
}

const loadCategory = async category_id =>{
  //  console.log(category_id);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    try{
      const res = await fetch(url);
      const data = await res.json();
      displayCategory(data.data);
    // console.log(data.data)
    }
      catch(e){
      console.log(e)
    }
};
const displayCategory = (categori) =>{
    console.log(categori)
    const newsContainer = document.getElementById('news-container');
    newsContainer.textContent ='';
    loadSpinner(true);
    categori.forEach(news =>{
      const newsDiv = document.createElement('div');
    newsDiv.innerHTML = `
    <div class="row g-3 p-2 ">
  <div class="col-md-2 g-3">
    <img src="${news.thumbnail_url ? news.thumbnail_url : 'sorry'}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-10">
    <div class="card-body">
      <h4 class="card-title"><b>${news.title}</b></h4>
      <p class="card-text" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis">${news.details}</p>
      <div class="d-flex justify-content-between">
      <div class="d-flex">
         <div><img src="${news.author.img ? news.author.img : 'no image available'}" alt="" style="width:50px; height:50px; border-radius : 50%"></div>
          <div class="ps-2">
           <p><b>${news.author.name ? news.author.name : 'No author name available'}</b> <br>
            <small>${news.author.published_date}</small> </p>
          </div>
          </div>
          <div><b>Viewes : ${news.total_view ? news.total_view : 'Not available'}</b></div>
          <div><b>Rating : ${news.rating.number ? news.rating.number : 'Not available'}</b></div>
          <div><button onclick="loadNewsDetails('${news._id}')" href="#" id="detail-btn" type="button" class="btn btn-primary fw-bold" data-bs-toggle="modal" data-bs-target="#newsDetailModal">Show more</button></div>
         </div>
         </div>
      </div>
</div>
    `;
    newsContainer.appendChild(newsDiv);
    loadSpinner(false);
  })
};
const loadNewsDetails = async news_id =>{
  const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayNewsDetails(data.data[0])
};
const displayNewsDetails = (details) =>{
  // console.log(details);
  const modalTitle = document.getElementById('newsDetailModalLabel');
    modalTitle.innerText = details.title;
    const newsDetail = document.getElementById('news-detail');
    newsDetail.innerHTML = `
    <p>${details.details}</p>
    <div class="d-flex justify-content-between">
                <div class="d-flex">
                 <div><img src="${details.author.img ? details.author.img : 'no image available'}" alt="" style="width:50px; height:50px; border-radius : 50%"></div>
                  <div class="ps-2">
                   <p><b>${details.author.name ? details.author.name : 'No author name available'}</b> <br>
                    <small>${details.author.published_date}</small> </p>
                  </div>
                  </div>
                  <div><b>Viewes : ${details.total_view ? details.total_view : 'Not available'}</b></div>
                  `;

}

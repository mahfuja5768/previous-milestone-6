const loadMeals = (search) =>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
const displayMeals = meals =>{
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    meals.forEach(meal =>{
        console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML =`
        <div class="col">
              <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h3 class="card-title"><span class="fw-bold">Name</span>: ${meal.strMeal}</h3>
                  <p class="card-text"><span class="fw-bold">Description</span>: ${meal.strInstructions.slice(0, 200)}</p>
                </div>
              </div>
            </div>
        `;
        mealContainer.appendChild(mealDiv)
    })
}
const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadMeals(searchText);
    searchField.value = ''
};

document.getElementById('search-field').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    searchFood()
  }
});

const loadMealDetail = (idMeal) =>{
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayLoadMealDetail(data.meals[0]))
}
const displayLoadMealDetail = (meal) =>{
  const detailContainer = document.getElementById('detail-container');
  detailContainer.innerHTML = '';
  const mealDiv = document.createElement('div');
  mealDiv.classList.add('card');
  mealDiv.innerHTML = `
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h3 class="card-title"><span class="fw-bold">Name</span>: ${meal.strMeal}</h3>
                  <p class="card-text"><span class="fw-bold">Description</span>: ${meal.strInstructions.slice(0, 200)}</p>
                
  `;
  detailContainer.appendChild(mealDiv)
}
loadMeals('')
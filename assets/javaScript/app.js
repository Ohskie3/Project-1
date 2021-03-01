let app = {}

app.db = window.localStorage;

app.storeData = function(key, value) {
  // return JSON.parse(app.db.getItem(key))
  return app.db.setItem(key, JSON.stringify(value))
}

app.appendData = function(key,value) {
  let arr = app.readData(key) || []
  arr.push(value)
  return app.storeData(key, arr)
}

app.readData = function(key) {
  return JSON.parse(app.db.getItem(key))
}

function buildMealList(event) {
  if (Boolean(event)) event.preventDefault();

  let items = app.readData("mealList") || []

  let list = items.map((i) => {
    return `<li>${i}</li>`
  })


  document.querySelector('.card-content > ol').innerHTML = list.join('')
}

axios.get(`https://favqs.com/api/qotd`)
  .then(res => {
    console.log(res.data)
    let quote = res.data
    document.getElementById('quotes').innerHTML = `
            <p>${quote.quote.body}</p>
            <p> - ${quote.quote.author}</p>
          `

  })
  .catch(err => console.error(err))



document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()

  let name = document.getElementById('name').value
  let mealList = []

  document.getElementById('recipe').textContent = ''
  axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=f305efd996cc4fa489c91ad83e4232a4`)

    .then(res => {

      let ingredients = res.data.results
      app.storeData('resultSet', ingredients)

      console.log(ingredients)

      document.getElementById('ingredients').innerHTML = ''
      for (let i = 0; i < 5; i++) {

        console.log(i)

        document.getElementById('ingredients').innerHTML += `
            <h5>Dish: ${ingredients[i].title}</h5>
            <img src="${ingredients[i].image}" alt="${ingredients.title}">
            <button data-recipe_id="${ingredients[i].id}" class="recipeclass waves-effect waves-light btn">see recipe</button>
            <button data-recipe_id="${ingredients[i].id}" class="addBtn waves-effect waves-light btn" data-meal_name="${ingredients[i].title}"
            class="addBtn">Add to List</button>
            `

        document.getElementById('name').value = ''
        // document.getElementById('ingredients').value = ''
      }
    })
    .then(() => {
      let addBtn = document.querySelector('button.addBtn');
      addBtn.addEventListener('click', (evt) => {
        app.appendData('mealList', evt.target.dataset['meal_name'])
        app.appendData('mealListIds', evt.target.dataset['recipe_id'])
        // document.querySelector('.card-content > ol > li').innerHTML = evt.target.dataset['meal_name']

        buildMealList()
      });
    })

    .catch(err => {
      console.error(err)
    })

  document.addEventListener('click', event => {

    if (event.target.classList.contains('recipeclass')) {

      // console.log('hi')

      axios.get(`https://api.spoonacular.com/recipes/${event.target.dataset.recipe_id}/information?apiKey=f305efd996cc4fa489c91ad83e4232a4&includeNutrition=true`)


        .then(res => {

          let recipe = res.data
          let dish = recipe.title

          console.log(recipe.extendedIngredients.length)

          let items = []

          for (let i = 0; i < recipe.extendedIngredients.length; i++) {
            items.push(`<li>${recipe.extendedIngredients[i]?.original}</li>`)
          }

          let list = `
          <div>
              <h2 id = 'ingredientLeft'>Ingredients:</h2>
              <ul id = 'ingredientMarginLeft'>
                ${items.join('')}
              </ul>
              </div>
                <h2 id='instructionLeft'>Instructions:</h2>
                <h6 style="margin-left: 15%;" id='instructionRecipe'>${recipe.instructions}</h6>
                <ol id="recipeLi"></ol>
          `
          document.getElementById('recipe').innerHTML = list
        })
        .catch(err => {
          console.error(err)
        })
    } if (event.target.classList.contains('myFoodList')) {
      // console.log('hi')
      document.getElementById('myList').append(dish)

    }
  })
})

buildMealList()
document.getElementById('save').addEventListener('click', event => {
  event.preventDefault()

    let myCal = document.getElementById('calorieInput').value
    document.getElementById('calPerDay').innerHTML = `
    <p>calories/day: ${myCal} </p>
    `
    document.getElementById('calorieInput').value = localStorage.getItem('mySavedCalories')
    localStorage.setItem('mySavedCalories', document.getElementById('calorieInput').value)  
})

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


  axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=f305efd996cc4fa489c91ad83e4232a4`)

    .then(res => {

      let ingredients = res.data.results

      console.log(ingredients)

      for (let i = 0; i < 1; i++) {

        console.log(i)

        document.getElementById('ingredients').innerHTML += `
            <h5>dish: ${ingredients[i].title}</h5>
            <img src="${ingredients[i].image}" alt="${ingredients.title}"
            >
            <button data-recipe_id="${ingredients[i].id}" class="recipeclass">see recipe</button>
            <button data-meal_name="${ingredients.title} class = "myFoodList">Add to List</button> 
            `

        document.getElementById('name').value = ''

        document.getElementById('ingredients').value = ''
      }
    })

    .catch(err => {
      console.error(err)
    })

  document.addEventListener('click', event => {

    if (event.target.classList.contains('recipeclass')) {

      console.log('hi')

      axios.get(`https://api.spoonacular.com/recipes/${event.target.dataset.recipe_id}/information?apiKey=f305efd996cc4fa489c91ad83e4232a4&includeNutrition=true`)


        .then(res => {

          let recipe = res.data
          let dish = recipe.title

          console.log(recipe)

          for (let i = 0; i < recipe.extendedIngredients.length; i++) {

            document.getElementById('recipe').innerHTML = `
            <div>
              <h2>Ingredients:</h2>
              <ul>
                <li>${recipe.extendedIngredients[0].original}</li>
                <li>${recipe.extendedIngredients[1].original}</li>
                <li>${recipe.extendedIngredients[2].original}</li>
                <li>${recipe.extendedIngredients[3].original}</li>
                <li>${recipe.extendedIngredients[4].original}</li>
                <li>${recipe.extendedIngredients[5].original}</li>
                </ul>
              </div>
                <h2>Instructions:</h2>
                <p>${recipe.instructions}</p>
                `
          }
        })
        .catch(err => {
          console.error(err)
        })
    } else if (event.target.classList.contains('myFoodList')) {
      console.log(event.target)
      document.getElementById('myList').append(dish)

    }
  })
})

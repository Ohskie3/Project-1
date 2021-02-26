// document.getElementById('search').addEventListener('click', event => {
//   event.preventDefault()

//   let name = document.getElementById('name').value



//   //d7ef68f1acc34dedb93dd4613a30a40f


//   axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=d7ef68f1acc34dedb93dd4613a30a40f`)

//     // axios.get('https://api.spoonacular.com/recipes/716429/information?apiKey=d7ef68f1acc34dedb93dd4613a30a40f&includeNutrition=true')
//     .then(res => {

//       let ingredients = res.data.results

//       console.log(ingredients)


//       // for (let i = 0; i < ingredients.length; i++) {

//       for (let i = 0; i < 2; i++) {

//         document.getElementById('ingredients').innerHTML += `
//         <p id="shrink">dish: ${ingredients[i].title}</p>
//            <img src="${ingredients[i].image}" alt="${ingredients.title}" id="imagesFixed">`

//         document.getElementById('name').value = ''

//         document.getElementById('ingredients').value = ''


//       }


//     })

//     .catch(err => {
//       console.error(err)
//     })

// })



// document.addEventListener('click', event => {
//   if (event.target.className === 'ingredients')
//   console.log(event.target.textContent)

//   axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=a051a9fc0e464018b80480edf905b93d`)
//   .then(res => {
//     let ingredients = res.data.results
//     console.log(ingredients)

//     for (let i = 0; i < ingredients.length; i++) {
//       console.log(i)

//       document.getElementById('ingredients').innerHTML += `
//             <h5>dish: ${ingredients[i].title}</h5>
//             <img src="${ingredients[i].image}" alt="${ingredients.title}">`

//       document.getElementById('name').value = ''
//     document.getElementById('ingredients').value = ''

//     }
//     })
//     .catch(err => {
//       console.error(err)
//   })
// })
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

// Giphy Logic: 

// document.getElementById('ingredients').innerHTML = `
//     ingredients.forEach(ingredient => {
//       let foodElem = document.createElement('img')
//       foodElem.src = ${ingredients[i].image}
//       foodElem.alt = ${ingredients[i].title}
//       `

// document.getElementById('ingredients').append(foodElem)


// recipe.html javscript
document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()

  let name = document.getElementById('name').value
  let mealList = []

  //axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=d7ef68f1acc34dedb93dd4613a30a40f&includeNutrition=true`)
  axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=f305efd996cc4fa489c91ad83e4232a4`)

    // axios.get('https://api.spoonacular.com/recipes/extract?url=https://foodista.com/recipe/ZHK4KPB6/chocolate-crinkle-cookies&apiKey=f305efd996cc4fa489c91ad83e4232a4&includeNutrition=true')
    // axios.get('https://api.spoonacular.com/recipes/716429/information?apiKey=d7ef68f1acc34dedb93dd4613a30a40f&includeNutrition=true')
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

            //  < li > ${ recipe.extendedIngredients[i].original }</ >
            // <li>${recipe.extendedIngredients[i].original}</li>
            // <li>${recipe.extendedIngredients[i].original}</li>
            // <li>${recipe.extendedIngredients[4].original}</li>
            // <li>${recipe.extendedIngredients[5].original}</li>
            // <li>${recipe.extendedIngredients[6].original}</li>
            // <li>${recipe.extendedIngredients[7].original}</li>
            // <li>${recipe.extendedIngredients[8].original}</li>
            // <li>${recipe.extendedIngredients[9].original}</li>
            // document.getElementById('recipe').innerHTML = `
            //     <p>recipe: ${recipe.instructions}</p>
            //  
            //  `
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

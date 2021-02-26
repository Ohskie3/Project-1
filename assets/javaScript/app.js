document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()

  let name = document.getElementById('name').value



//   //d7ef68f1acc34dedb93dd4613a30a40f


//   axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=d7ef68f1acc34dedb93dd4613a30a40f`)

    axios.get('https://api.spoonacular.com/recipes/716429/information?apiKey=d7ef68f1acc34dedb93dd4613a30a40f&includeNutrition=true')
    .then(res => {

      let ingredients = res.data.results

      console.log(ingredients)


      for (let i = 0; i < ingredients.length; i++) {

      for (let i = 0; i < 2; i++) {

        document.getElementById('ingredients').innerHTML += `
        <p id="shrink">dish: ${ingredients[i].title}</p>
           <img src="${ingredients[i].image}" alt="${ingredients.title}" id="imagesFixed">`

        document.getElementById('name').value = ''

        document.getElementById('ingredients').value = ''


      }


    })

    .catch(err => {
      console.error(err)
    })

})









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
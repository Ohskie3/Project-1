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

// Giphy Logic: 

// document.getElementById('ingredients').innerHTML = `
//     ingredients.forEach(ingredient => {
//       let foodElem = document.createElement('img')
//       foodElem.src = ${ingredients[i].image}
//       foodElem.alt = ${ingredients[i].title}
//       `

// document.getElementById('ingredients').append(foodElem)
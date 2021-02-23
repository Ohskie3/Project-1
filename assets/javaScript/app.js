axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=chicken&apiKey=caecc410cdf7406d8f2804239ab94a67&includeNutrition=true`)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
  console.error(err)
  })


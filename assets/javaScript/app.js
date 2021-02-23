

axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=chicken&apiKey=f305efd996cc4fa489c91ad83e4232a4&includeNutrition=true`)
  .then(res => {
    let food = res.data

    console.log(food)


  })
  .catch(err => console.error(err))

axios.get('https://api.twitter.com/2/users/by/username/:spoonacular', {
  headers: {
    'Authorization': `Bearer ${AAAAAAAAAAAAAAAAAAAAAKw3NAEAAAAAoSP8jgHIVlfKe6dsTbPSxf641qI % 3DCcjr1eUzAVZ2M3PSqaLsVfYoNWncNUaoWyGrB5G16o8dlHnpK5}`
  }
})
.then((res) => {
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})


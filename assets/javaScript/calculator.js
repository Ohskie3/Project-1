document.getElementById('save').addEventListener('click', event => {
  event.preventDefault()

    let myCal = document.getElementById('calorieInput').value
    document.getElementById('calPerDay').innerHTML = `
    <p>calories/day: ${myCal} </p>
    `
    document.getElementById('calorieInput').value = localStorage.getItem('mySavedCalories')
    localStorage.setItem('mySavedCalories', document.getElementById('calorieInput').value)  
})

document.getElementById('calPerDay').value = localStorage.getItem('savedCalories')

document.getElementById('save').addEventListener('click', event => {
  event.preventDefault()

  let myNum = document.getElementById('calorieInput').value
  myNum.className = 'card-content white-text'
  document.getElementById('calPerDay').innerHTML = `
        <p>${myNum} </p>
    `
  document.getElementById('calorieInput').value = ''

  localStorage.setItem('savedCalories', myNum)

})
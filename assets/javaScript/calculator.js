document.getElementById('calorieInput').value = localStorage.getItem('mySavedCalories')
document.getElementById('calPerDay').innerHTML = `
  <p>calories/day: ${localStorage.getItem('mySavedCalories')} </p>
  `
  document.getElementById('calorieInput').value = ''


document.getElementById('save').addEventListener('click', event => {
  event.preventDefault()
  
  let myCal = document.getElementById('calorieInput').value
  document.getElementById('calPerDay').innerHTML = `
  <p>calories/day: ${myCal} </p>
  `
  
  localStorage.setItem('mySavedCalories', document.getElementById('calorieInput').value)  
  document.getElementById('calorieInput').value = localStorage.getItem('mySavedCalories')

  document.getElementById('calorieInput').value = ''
})
document.getElementById('btn1').addEventListener('click', event => {
  event.preventDefault()

  document.getElementById('currentWeight').innerHTML = `
    <p><label for="currentWeight">1st</label>
    <input type="text" id="d1">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">2nd</label>
    <input type="text" id="d2">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">3rd</label>
    <input type="text" id="d3">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">4th</label>
    <input type="text" id="d4">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">5th</label>
    <input type="text" id="d5">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">6th</label>
    <input type="text" id="d6">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">7th</label>
    <input type="text" id="d7">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">8th</label>
    <input type="text" id="d8">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">9th</label>
    <input type="text" id="d9">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">10th</label>
    <input type="text" id="d10">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">11th</label>
    <input type="text" id="d11">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">12th</label>
    <input type="text" id="d12">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">13th</label>
    <input type="text" id="d13">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">14th</label>
    <input type="text" id="d14">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">15th</label>
    <input type="text" id="d15">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">16th</label>
    <input type="text" id="d16">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">17th</label>
    <input type="text" id="d17">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">18th</label>
    <input type="text" id="d18">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">19th</label>
    <input type="text" id="d19">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">20th</label>
    <input type="text" id="d20">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">21st</label>
    <input type="text" id="d21">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">22nd</label>
    <input type="text" id="d22">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">23rd</label>
    <input type="text" id="d23">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">24th</label>
    <input type="text" id="d24">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">25th</label>
    <input type="text" id="d25">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">26th</label>
    <input type="text" id="d26">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">27th</label>
    <input type="text" id="d27">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">28th</label>
    <input type="text" id="d28">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">29th</label>
    <input type="text" id="d29">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">30th</label>
    <input type="text" id="d30">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">31st</label>
    <input type="text" id="d31">
    <button class="save">Save</button> </p>
    `


  document.getElementById('d1').value = localStorage.getItem('ad1')
  document.getElementById('d2').value = localStorage.getItem('ad2')
  document.getElementById('d3').value = localStorage.getItem('ad3')
  document.getElementById('d4').value = localStorage.getItem('ad4')
  document.getElementById('d5').value = localStorage.getItem('ad6')
  document.getElementById('d6').value = localStorage.getItem('ad7')
  document.getElementById('d7').value = localStorage.getItem('ad8')
  document.getElementById('d8').value = localStorage.getItem('ad9')
  document.getElementById('d9').value = localStorage.getItem('ad10')
  document.getElementById('d10').value = localStorage.getItem('ad11')
  document.getElementById('d11').value = localStorage.getItem('ad12')
  document.getElementById('d13').value = localStorage.getItem('ad13')
  document.getElementById('d14').value = localStorage.getItem('ad14')
  document.getElementById('d15').value = localStorage.getItem('ad15')
  document.getElementById('d16').value = localStorage.getItem('ad16')
  document.getElementById('d17').value = localStorage.getItem('ad17')
  document.getElementById('d18').value = localStorage.getItem('ad18')
  document.getElementById('d19').value = localStorage.getItem('ad19')
  document.getElementById('d20').value = localStorage.getItem('ad20')
  document.getElementById('d21').value = localStorage.getItem('ad21')
  document.getElementById('d22').value = localStorage.getItem('ad22')
  document.getElementById('d23').value = localStorage.getItem('ad23')
  document.getElementById('d24').value = localStorage.getItem('ad24')
  document.getElementById('d25').value = localStorage.getItem('ad25')
  document.getElementById('d26').value = localStorage.getItem('ad26')
  document.getElementById('d27').value = localStorage.getItem('ad27')
  document.getElementById('d28').value = localStorage.getItem('ad28')
  document.getElementById('d29').value = localStorage.getItem('ad29')
  document.getElementById('d30').value = localStorage.getItem('ad30')
  document.getElementById('d31').value = localStorage.getItem('ad31')

  document.addEventListener('click', event => {

    if (event.target.classList.contains('save')) {
      localStorage.setItem('ad1', document.getElementById('d1').value)
      localStorage.setItem('ad2', document.getElementById('d2').value)
      localStorage.setItem('ad3', document.getElementById('d3').value)
      localStorage.setItem('ad4', document.getElementById('d4').value)
      localStorage.setItem('ad5', document.getElementById('d5').value)
      localStorage.setItem('ad6', document.getElementById('d6').value)
      localStorage.setItem('ad7', document.getElementById('d7').value)
      localStorage.setItem('ad8', document.getElementById('d8').value)
      localStorage.setItem('ad9', document.getElementById('d9').value)
      localStorage.setItem('ad10', document.getElementById('d10').value)
      localStorage.setItem('ad11', document.getElementById('d11').value)
      localStorage.setItem('ad12', document.getElementById('d12').value)
      localStorage.setItem('ad13', document.getElementById('d13').value)
      localStorage.setItem('ad14', document.getElementById('d14').value)
      localStorage.setItem('ad15', document.getElementById('d15').value)
      localStorage.setItem('ad16', document.getElementById('d16').value)
      localStorage.setItem('ad17', document.getElementById('d17').value)
      localStorage.setItem('ad18', document.getElementById('d18').value)
      localStorage.setItem('ad19', document.getElementById('d19').value)
      localStorage.setItem('ad20', document.getElementById('d20').value)
      localStorage.setItem('ad21', document.getElementById('d21').value)
      localStorage.setItem('ad22', document.getElementById('d22').value)
      localStorage.setItem('ad23', document.getElementById('d23').value)
      localStorage.setItem('ad24', document.getElementById('d24').value)
      localStorage.setItem('ad25', document.getElementById('d25').value)
      localStorage.setItem('ad26', document.getElementById('d26').value)
      localStorage.setItem('ad27', document.getElementById('d27').value)
      localStorage.setItem('ad28', document.getElementById('d28').value)
      localStorage.setItem('ad29', document.getElementById('d29').value)
      localStorage.setItem('ad30', document.getElementById('d30').value)
      localStorage.setItem('ad31', document.getElementById('d31').value)
    }
  })
})

document.getElementById('btn2').addEventListener('click', event => {
  event.preventDefault()

  document.getElementById('currentWeight').innerHTML = `
    <p><label for="currentWeight">1st</label>
    <input type="text" id="d1">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">2nd</label>
    <input type="text" id="d2">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">3rd</label>
    <input type="text" id="d3">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">4th</label>
    <input type="text" id="d4">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">5th</label>
    <input type="text" id="d5">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">6th</label>
    <input type="text" id="d6">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">7th</label>
    <input type="text" id="d7">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">8th</label>
    <input type="text" id="d8">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">9th</label>
    <input type="text" id="d9">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">10th</label>
    <input type="text" id="d10">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">11th</label>
    <input type="text" id="d11">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">12th</label>
    <input type="text" id="d12">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">13th</label>
    <input type="text" id="d13">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">14th</label>
    <input type="text" id="d14">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">15th</label>
    <input type="text" id="d15">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">16th</label>
    <input type="text" id="d16">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">17th</label>
    <input type="text" id="d17">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">18th</label>
    <input type="text" id="d18">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">19th</label>
    <input type="text" id="d19">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">20th</label>
    <input type="text" id="d20">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">21st</label>
    <input type="text" id="d21">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">22nd</label>
    <input type="text" id="d22">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">23rd</label>
    <input type="text" id="d23">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">24th</label>
    <input type="text" id="d24">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">25th</label>
    <input type="text" id="d25">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">26th</label>
    <input type="text" id="d26">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">27th</label>
    <input type="text" id="d27">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">28th</label>
    <input type="text" id="d28">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">29th</label>
    <input type="text" id="d29">
    <button class="save">Save</button> </p>
    `


  document.getElementById('d1').value = localStorage.getItem('ad1')
  document.getElementById('d2').value = localStorage.getItem('ad2')
  document.getElementById('d3').value = localStorage.getItem('ad3')
  document.getElementById('d4').value = localStorage.getItem('ad4')
  document.getElementById('d5').value = localStorage.getItem('ad6')
  document.getElementById('d6').value = localStorage.getItem('ad7')
  document.getElementById('d7').value = localStorage.getItem('ad8')
  document.getElementById('d8').value = localStorage.getItem('ad9')
  document.getElementById('d9').value = localStorage.getItem('ad10')
  document.getElementById('d10').value = localStorage.getItem('ad11')
  document.getElementById('d11').value = localStorage.getItem('ad12')
  document.getElementById('d13').value = localStorage.getItem('ad13')
  document.getElementById('d14').value = localStorage.getItem('ad14')
  document.getElementById('d15').value = localStorage.getItem('ad15')
  document.getElementById('d16').value = localStorage.getItem('ad16')
  document.getElementById('d17').value = localStorage.getItem('ad17')
  document.getElementById('d18').value = localStorage.getItem('ad18')
  document.getElementById('d19').value = localStorage.getItem('ad19')
  document.getElementById('d20').value = localStorage.getItem('ad20')
  document.getElementById('d21').value = localStorage.getItem('ad21')
  document.getElementById('d22').value = localStorage.getItem('ad22')
  document.getElementById('d23').value = localStorage.getItem('ad23')
  document.getElementById('d24').value = localStorage.getItem('ad24')
  document.getElementById('d25').value = localStorage.getItem('ad25')
  document.getElementById('d26').value = localStorage.getItem('ad26')
  document.getElementById('d27').value = localStorage.getItem('ad27')
  document.getElementById('d28').value = localStorage.getItem('ad28')
  document.getElementById('d29').value = localStorage.getItem('ad29')

  document.addEventListener('click', event => {

    if (event.target.classList.contains('save')) {
      localStorage.setItem('ad1', document.getElementById('d1').value)
      localStorage.setItem('ad2', document.getElementById('d2').value)
      localStorage.setItem('ad3', document.getElementById('d3').value)
      localStorage.setItem('ad4', document.getElementById('d4').value)
      localStorage.setItem('ad5', document.getElementById('d5').value)
      localStorage.setItem('ad6', document.getElementById('d6').value)
      localStorage.setItem('ad7', document.getElementById('d7').value)
      localStorage.setItem('ad8', document.getElementById('d8').value)
      localStorage.setItem('ad9', document.getElementById('d9').value)
      localStorage.setItem('ad10', document.getElementById('d10').value)
      localStorage.setItem('ad11', document.getElementById('d11').value)
      localStorage.setItem('ad12', document.getElementById('d12').value)
      localStorage.setItem('ad13', document.getElementById('d13').value)
      localStorage.setItem('ad14', document.getElementById('d14').value)
      localStorage.setItem('ad15', document.getElementById('d15').value)
      localStorage.setItem('ad16', document.getElementById('d16').value)
      localStorage.setItem('ad17', document.getElementById('d17').value)
      localStorage.setItem('ad18', document.getElementById('d18').value)
      localStorage.setItem('ad19', document.getElementById('d19').value)
      localStorage.setItem('ad20', document.getElementById('d20').value)
      localStorage.setItem('ad21', document.getElementById('d21').value)
      localStorage.setItem('ad22', document.getElementById('d22').value)
      localStorage.setItem('ad23', document.getElementById('d23').value)
      localStorage.setItem('ad24', document.getElementById('d24').value)
      localStorage.setItem('ad25', document.getElementById('d25').value)
      localStorage.setItem('ad26', document.getElementById('d26').value)
      localStorage.setItem('ad27', document.getElementById('d27').value)
      localStorage.setItem('ad28', document.getElementById('d28').value)
      localStorage.setItem('ad29', document.getElementById('d29').value)
    }
  })
})

document.getElementById('btn3').addEventListener('click', event => {
  event.preventDefault()

  document.getElementById('currentWeight').innerHTML = `
    <p><label for="currentWeight">1st</label>
    <input type="text" id="d1">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">2nd</label>
    <input type="text" id="d2">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">3rd</label>
    <input type="text" id="d3">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">4th</label>
    <input type="text" id="d4">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">5th</label>
    <input type="text" id="d5">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">6th</label>
    <input type="text" id="d6">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">7th</label>
    <input type="text" id="d7">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">8th</label>
    <input type="text" id="d8">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">9th</label>
    <input type="text" id="d9">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">10th</label>
    <input type="text" id="d10">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">11th</label>
    <input type="text" id="d11">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">12th</label>
    <input type="text" id="d12">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">13th</label>
    <input type="text" id="d13">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">14th</label>
    <input type="text" id="d14">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">15th</label>
    <input type="text" id="d15">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">16th</label>
    <input type="text" id="d16">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">17th</label>
    <input type="text" id="d17">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">18th</label>
    <input type="text" id="d18">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">19th</label>
    <input type="text" id="d19">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">20th</label>
    <input type="text" id="d20">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">21st</label>
    <input type="text" id="d21">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">22nd</label>
    <input type="text" id="d22">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">23rd</label>
    <input type="text" id="d23">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">24th</label>
    <input type="text" id="d24">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">25th</label>
    <input type="text" id="d25">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">26th</label>
    <input type="text" id="d26">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">27th</label>
    <input type="text" id="d27">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">28th</label>
    <input type="text" id="d28">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">29th</label>
    <input type="text" id="d29">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">30th</label>
    <input type="text" id="d30">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">31st</label>
    <input type="text" id="d31">
    <button class="save">Save</button> </p>
    `


  document.getElementById('d1').value = localStorage.getItem('ad1')
  document.getElementById('d2').value = localStorage.getItem('ad2')
  document.getElementById('d3').value = localStorage.getItem('ad3')
  document.getElementById('d4').value = localStorage.getItem('ad4')
  document.getElementById('d5').value = localStorage.getItem('ad6')
  document.getElementById('d6').value = localStorage.getItem('ad7')
  document.getElementById('d7').value = localStorage.getItem('ad8')
  document.getElementById('d8').value = localStorage.getItem('ad9')
  document.getElementById('d9').value = localStorage.getItem('ad10')
  document.getElementById('d10').value = localStorage.getItem('ad11')
  document.getElementById('d11').value = localStorage.getItem('ad12')
  document.getElementById('d13').value = localStorage.getItem('ad13')
  document.getElementById('d14').value = localStorage.getItem('ad14')
  document.getElementById('d15').value = localStorage.getItem('ad15')
  document.getElementById('d16').value = localStorage.getItem('ad16')
  document.getElementById('d17').value = localStorage.getItem('ad17')
  document.getElementById('d18').value = localStorage.getItem('ad18')
  document.getElementById('d19').value = localStorage.getItem('ad19')
  document.getElementById('d20').value = localStorage.getItem('ad20')
  document.getElementById('d21').value = localStorage.getItem('ad21')
  document.getElementById('d22').value = localStorage.getItem('ad22')
  document.getElementById('d23').value = localStorage.getItem('ad23')
  document.getElementById('d24').value = localStorage.getItem('ad24')
  document.getElementById('d25').value = localStorage.getItem('ad25')
  document.getElementById('d26').value = localStorage.getItem('ad26')
  document.getElementById('d27').value = localStorage.getItem('ad27')
  document.getElementById('d28').value = localStorage.getItem('ad28')
  document.getElementById('d29').value = localStorage.getItem('ad29')
  document.getElementById('d30').value = localStorage.getItem('ad30')
  document.getElementById('d31').value = localStorage.getItem('ad31')

  document.addEventListener('click', event => {

    if (event.target.classList.contains('save')) {
      localStorage.setItem('ad1', document.getElementById('d1').value)
      localStorage.setItem('ad2', document.getElementById('d2').value)
      localStorage.setItem('ad3', document.getElementById('d3').value)
      localStorage.setItem('ad4', document.getElementById('d4').value)
      localStorage.setItem('ad5', document.getElementById('d5').value)
      localStorage.setItem('ad6', document.getElementById('d6').value)
      localStorage.setItem('ad7', document.getElementById('d7').value)
      localStorage.setItem('ad8', document.getElementById('d8').value)
      localStorage.setItem('ad9', document.getElementById('d9').value)
      localStorage.setItem('ad10', document.getElementById('d10').value)
      localStorage.setItem('ad11', document.getElementById('d11').value)
      localStorage.setItem('ad12', document.getElementById('d12').value)
      localStorage.setItem('ad13', document.getElementById('d13').value)
      localStorage.setItem('ad14', document.getElementById('d14').value)
      localStorage.setItem('ad15', document.getElementById('d15').value)
      localStorage.setItem('ad16', document.getElementById('d16').value)
      localStorage.setItem('ad17', document.getElementById('d17').value)
      localStorage.setItem('ad18', document.getElementById('d18').value)
      localStorage.setItem('ad19', document.getElementById('d19').value)
      localStorage.setItem('ad20', document.getElementById('d20').value)
      localStorage.setItem('ad21', document.getElementById('d21').value)
      localStorage.setItem('ad22', document.getElementById('d22').value)
      localStorage.setItem('ad23', document.getElementById('d23').value)
      localStorage.setItem('ad24', document.getElementById('d24').value)
      localStorage.setItem('ad25', document.getElementById('d25').value)
      localStorage.setItem('ad26', document.getElementById('d26').value)
      localStorage.setItem('ad27', document.getElementById('d27').value)
      localStorage.setItem('ad28', document.getElementById('d28').value)
      localStorage.setItem('ad29', document.getElementById('d29').value)
      localStorage.setItem('ad30', document.getElementById('d30').value)
      localStorage.setItem('ad31', document.getElementById('d31').value)
    }
  })
})

document.getElementById('btn4').addEventListener('click', event => {
  event.preventDefault()

  document.getElementById('currentWeight').innerHTML = `
    <p><label for="currentWeight">1st</label>
    <input type="text" id="d1">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">2nd</label>
    <input type="text" id="d2">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">3rd</label>
    <input type="text" id="d3">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">4th</label>
    <input type="text" id="d4">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">5th</label>
    <input type="text" id="d5">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">6th</label>
    <input type="text" id="d6">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">7th</label>
    <input type="text" id="d7">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">8th</label>
    <input type="text" id="d8">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">9th</label>
    <input type="text" id="d9">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">10th</label>
    <input type="text" id="d10">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">11th</label>
    <input type="text" id="d11">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">12th</label>
    <input type="text" id="d12">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">13th</label>
    <input type="text" id="d13">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">14th</label>
    <input type="text" id="d14">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">15th</label>
    <input type="text" id="d15">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">16th</label>
    <input type="text" id="d16">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">17th</label>
    <input type="text" id="d17">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">18th</label>
    <input type="text" id="d18">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">19th</label>
    <input type="text" id="d19">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">20th</label>
    <input type="text" id="d20">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">21st</label>
    <input type="text" id="d21">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">22nd</label>
    <input type="text" id="d22">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">23rd</label>
    <input type="text" id="d23">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">24th</label>
    <input type="text" id="d24">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">25th</label>
    <input type="text" id="d25">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">26th</label>
    <input type="text" id="d26">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">27th</label>
    <input type="text" id="d27">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">28th</label>
    <input type="text" id="d28">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">29th</label>
    <input type="text" id="d29">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">30th</label>
    <input type="text" id="d30">
    <button class="save">Save</button> </p>
    `


  document.getElementById('d1').value = localStorage.getItem('ad1')
  document.getElementById('d2').value = localStorage.getItem('ad2')
  document.getElementById('d3').value = localStorage.getItem('ad3')
  document.getElementById('d4').value = localStorage.getItem('ad4')
  document.getElementById('d5').value = localStorage.getItem('ad6')
  document.getElementById('d6').value = localStorage.getItem('ad7')
  document.getElementById('d7').value = localStorage.getItem('ad8')
  document.getElementById('d8').value = localStorage.getItem('ad9')
  document.getElementById('d9').value = localStorage.getItem('ad10')
  document.getElementById('d10').value = localStorage.getItem('ad11')
  document.getElementById('d11').value = localStorage.getItem('ad12')
  document.getElementById('d13').value = localStorage.getItem('ad13')
  document.getElementById('d14').value = localStorage.getItem('ad14')
  document.getElementById('d15').value = localStorage.getItem('ad15')
  document.getElementById('d16').value = localStorage.getItem('ad16')
  document.getElementById('d17').value = localStorage.getItem('ad17')
  document.getElementById('d18').value = localStorage.getItem('ad18')
  document.getElementById('d19').value = localStorage.getItem('ad19')
  document.getElementById('d20').value = localStorage.getItem('ad20')
  document.getElementById('d21').value = localStorage.getItem('ad21')
  document.getElementById('d22').value = localStorage.getItem('ad22')
  document.getElementById('d23').value = localStorage.getItem('ad23')
  document.getElementById('d24').value = localStorage.getItem('ad24')
  document.getElementById('d25').value = localStorage.getItem('ad25')
  document.getElementById('d26').value = localStorage.getItem('ad26')
  document.getElementById('d27').value = localStorage.getItem('ad27')
  document.getElementById('d28').value = localStorage.getItem('ad28')
  document.getElementById('d29').value = localStorage.getItem('ad29')
  document.getElementById('d30').value = localStorage.getItem('ad30')

  document.addEventListener('click', event => {

    if (event.target.classList.contains('save')) {
      localStorage.setItem('ad1', document.getElementById('d1').value)
      localStorage.setItem('ad2', document.getElementById('d2').value)
      localStorage.setItem('ad3', document.getElementById('d3').value)
      localStorage.setItem('ad4', document.getElementById('d4').value)
      localStorage.setItem('ad5', document.getElementById('d5').value)
      localStorage.setItem('ad6', document.getElementById('d6').value)
      localStorage.setItem('ad7', document.getElementById('d7').value)
      localStorage.setItem('ad8', document.getElementById('d8').value)
      localStorage.setItem('ad9', document.getElementById('d9').value)
      localStorage.setItem('ad10', document.getElementById('d10').value)
      localStorage.setItem('ad11', document.getElementById('d11').value)
      localStorage.setItem('ad12', document.getElementById('d12').value)
      localStorage.setItem('ad13', document.getElementById('d13').value)
      localStorage.setItem('ad14', document.getElementById('d14').value)
      localStorage.setItem('ad15', document.getElementById('d15').value)
      localStorage.setItem('ad16', document.getElementById('d16').value)
      localStorage.setItem('ad17', document.getElementById('d17').value)
      localStorage.setItem('ad18', document.getElementById('d18').value)
      localStorage.setItem('ad19', document.getElementById('d19').value)
      localStorage.setItem('ad20', document.getElementById('d20').value)
      localStorage.setItem('ad21', document.getElementById('d21').value)
      localStorage.setItem('ad22', document.getElementById('d22').value)
      localStorage.setItem('ad23', document.getElementById('d23').value)
      localStorage.setItem('ad24', document.getElementById('d24').value)
      localStorage.setItem('ad25', document.getElementById('d25').value)
      localStorage.setItem('ad26', document.getElementById('d26').value)
      localStorage.setItem('ad27', document.getElementById('d27').value)
      localStorage.setItem('ad28', document.getElementById('d28').value)
      localStorage.setItem('ad29', document.getElementById('d29').value)
      localStorage.setItem('ad30', document.getElementById('d30').value)
    }
  })
})

document.getElementById('btn5').addEventListener('click', event => {
  event.preventDefault()

  document.getElementById('currentWeight').innerHTML = `
    <p><label for="currentWeight">1st</label>
    <input type="text" id="d1">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">2nd</label>
    <input type="text" id="d2">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">3rd</label>
    <input type="text" id="d3">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">4th</label>
    <input type="text" id="d4">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">5th</label>
    <input type="text" id="d5">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">6th</label>
    <input type="text" id="d6">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">7th</label>
    <input type="text" id="d7">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">8th</label>
    <input type="text" id="d8">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">9th</label>
    <input type="text" id="d9">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">10th</label>
    <input type="text" id="d10">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">11th</label>
    <input type="text" id="d11">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">12th</label>
    <input type="text" id="d12">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">13th</label>
    <input type="text" id="d13">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">14th</label>
    <input type="text" id="d14">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">15th</label>
    <input type="text" id="d15">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">16th</label>
    <input type="text" id="d16">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">17th</label>
    <input type="text" id="d17">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">18th</label>
    <input type="text" id="d18">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">19th</label>
    <input type="text" id="d19">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">20th</label>
    <input type="text" id="d20">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">21st</label>
    <input type="text" id="d21">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">22nd</label>
    <input type="text" id="d22">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">23rd</label>
    <input type="text" id="d23">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">24th</label>
    <input type="text" id="d24">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">25th</label>
    <input type="text" id="d25">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">26th</label>
    <input type="text" id="d26">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">27th</label>
    <input type="text" id="d27">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">28th</label>
    <input type="text" id="d28">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">29th</label>
    <input type="text" id="d29">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">30th</label>
    <input type="text" id="d30">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">31st</label>
    <input type="text" id="d31">
    <button class="save">Save</button> </p>
    `


  document.getElementById('d1').value = localStorage.getItem('ad1')
  document.getElementById('d2').value = localStorage.getItem('ad2')
  document.getElementById('d3').value = localStorage.getItem('ad3')
  document.getElementById('d4').value = localStorage.getItem('ad4')
  document.getElementById('d5').value = localStorage.getItem('ad6')
  document.getElementById('d6').value = localStorage.getItem('ad7')
  document.getElementById('d7').value = localStorage.getItem('ad8')
  document.getElementById('d8').value = localStorage.getItem('ad9')
  document.getElementById('d9').value = localStorage.getItem('ad10')
  document.getElementById('d10').value = localStorage.getItem('ad11')
  document.getElementById('d11').value = localStorage.getItem('ad12')
  document.getElementById('d13').value = localStorage.getItem('ad13')
  document.getElementById('d14').value = localStorage.getItem('ad14')
  document.getElementById('d15').value = localStorage.getItem('ad15')
  document.getElementById('d16').value = localStorage.getItem('ad16')
  document.getElementById('d17').value = localStorage.getItem('ad17')
  document.getElementById('d18').value = localStorage.getItem('ad18')
  document.getElementById('d19').value = localStorage.getItem('ad19')
  document.getElementById('d20').value = localStorage.getItem('ad20')
  document.getElementById('d21').value = localStorage.getItem('ad21')
  document.getElementById('d22').value = localStorage.getItem('ad22')
  document.getElementById('d23').value = localStorage.getItem('ad23')
  document.getElementById('d24').value = localStorage.getItem('ad24')
  document.getElementById('d25').value = localStorage.getItem('ad25')
  document.getElementById('d26').value = localStorage.getItem('ad26')
  document.getElementById('d27').value = localStorage.getItem('ad27')
  document.getElementById('d28').value = localStorage.getItem('ad28')
  document.getElementById('d29').value = localStorage.getItem('ad29')
  document.getElementById('d30').value = localStorage.getItem('ad30')
  document.getElementById('d31').value = localStorage.getItem('ad31')

  document.addEventListener('click', event => {

    if (event.target.classList.contains('save')) {
      localStorage.setItem('ad1', document.getElementById('d1').value)
      localStorage.setItem('ad2', document.getElementById('d2').value)
      localStorage.setItem('ad3', document.getElementById('d3').value)
      localStorage.setItem('ad4', document.getElementById('d4').value)
      localStorage.setItem('ad5', document.getElementById('d5').value)
      localStorage.setItem('ad6', document.getElementById('d6').value)
      localStorage.setItem('ad7', document.getElementById('d7').value)
      localStorage.setItem('ad8', document.getElementById('d8').value)
      localStorage.setItem('ad9', document.getElementById('d9').value)
      localStorage.setItem('ad10', document.getElementById('d10').value)
      localStorage.setItem('ad11', document.getElementById('d11').value)
      localStorage.setItem('ad12', document.getElementById('d12').value)
      localStorage.setItem('ad13', document.getElementById('d13').value)
      localStorage.setItem('ad14', document.getElementById('d14').value)
      localStorage.setItem('ad15', document.getElementById('d15').value)
      localStorage.setItem('ad16', document.getElementById('d16').value)
      localStorage.setItem('ad17', document.getElementById('d17').value)
      localStorage.setItem('ad18', document.getElementById('d18').value)
      localStorage.setItem('ad19', document.getElementById('d19').value)
      localStorage.setItem('ad20', document.getElementById('d20').value)
      localStorage.setItem('ad21', document.getElementById('d21').value)
      localStorage.setItem('ad22', document.getElementById('d22').value)
      localStorage.setItem('ad23', document.getElementById('d23').value)
      localStorage.setItem('ad24', document.getElementById('d24').value)
      localStorage.setItem('ad25', document.getElementById('d25').value)
      localStorage.setItem('ad26', document.getElementById('d26').value)
      localStorage.setItem('ad27', document.getElementById('d27').value)
      localStorage.setItem('ad28', document.getElementById('d28').value)
      localStorage.setItem('ad29', document.getElementById('d29').value)
      localStorage.setItem('ad30', document.getElementById('d30').value)
      localStorage.setItem('ad31', document.getElementById('d31').value)
    }
  })
})

document.getElementById('btn6').addEventListener('click', event => {
  event.preventDefault()

  document.getElementById('currentWeight').innerHTML = `
    <p><label for="currentWeight">1st</label>
    <input type="text" id="d1">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">2nd</label>
    <input type="text" id="d2">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">3rd</label>
    <input type="text" id="d3">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">4th</label>
    <input type="text" id="d4">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">5th</label>
    <input type="text" id="d5">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">6th</label>
    <input type="text" id="d6">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">7th</label>
    <input type="text" id="d7">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">8th</label>
    <input type="text" id="d8">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">9th</label>
    <input type="text" id="d9">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">10th</label>
    <input type="text" id="d10">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">11th</label>
    <input type="text" id="d11">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">12th</label>
    <input type="text" id="d12">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">13th</label>
    <input type="text" id="d13">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">14th</label>
    <input type="text" id="d14">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">15th</label>
    <input type="text" id="d15">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">16th</label>
    <input type="text" id="d16">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">17th</label>
    <input type="text" id="d17">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">18th</label>
    <input type="text" id="d18">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">19th</label>
    <input type="text" id="d19">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">20th</label>
    <input type="text" id="d20">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">21st</label>
    <input type="text" id="d21">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">22nd</label>
    <input type="text" id="d22">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">23rd</label>
    <input type="text" id="d23">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">24th</label>
    <input type="text" id="d24">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">25th</label>
    <input type="text" id="d25">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">26th</label>
    <input type="text" id="d26">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">27th</label>
    <input type="text" id="d27">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">28th</label>
    <input type="text" id="d28">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">29th</label>
    <input type="text" id="d29">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">30th</label>
    <input type="text" id="d30">
    <button class="save">Save</button> </p>
    `


  document.getElementById('d1').value = localStorage.getItem('ad1')
  document.getElementById('d2').value = localStorage.getItem('ad2')
  document.getElementById('d3').value = localStorage.getItem('ad3')
  document.getElementById('d4').value = localStorage.getItem('ad4')
  document.getElementById('d5').value = localStorage.getItem('ad6')
  document.getElementById('d6').value = localStorage.getItem('ad7')
  document.getElementById('d7').value = localStorage.getItem('ad8')
  document.getElementById('d8').value = localStorage.getItem('ad9')
  document.getElementById('d9').value = localStorage.getItem('ad10')
  document.getElementById('d10').value = localStorage.getItem('ad11')
  document.getElementById('d11').value = localStorage.getItem('ad12')
  document.getElementById('d13').value = localStorage.getItem('ad13')
  document.getElementById('d14').value = localStorage.getItem('ad14')
  document.getElementById('d15').value = localStorage.getItem('ad15')
  document.getElementById('d16').value = localStorage.getItem('ad16')
  document.getElementById('d17').value = localStorage.getItem('ad17')
  document.getElementById('d18').value = localStorage.getItem('ad18')
  document.getElementById('d19').value = localStorage.getItem('ad19')
  document.getElementById('d20').value = localStorage.getItem('ad20')
  document.getElementById('d21').value = localStorage.getItem('ad21')
  document.getElementById('d22').value = localStorage.getItem('ad22')
  document.getElementById('d23').value = localStorage.getItem('ad23')
  document.getElementById('d24').value = localStorage.getItem('ad24')
  document.getElementById('d25').value = localStorage.getItem('ad25')
  document.getElementById('d26').value = localStorage.getItem('ad26')
  document.getElementById('d27').value = localStorage.getItem('ad27')
  document.getElementById('d28').value = localStorage.getItem('ad28')
  document.getElementById('d29').value = localStorage.getItem('ad29')
  document.getElementById('d30').value = localStorage.getItem('ad30')

  document.addEventListener('click', event => {

    if (event.target.classList.contains('save')) {
      localStorage.setItem('ad1', document.getElementById('d1').value)
      localStorage.setItem('ad2', document.getElementById('d2').value)
      localStorage.setItem('ad3', document.getElementById('d3').value)
      localStorage.setItem('ad4', document.getElementById('d4').value)
      localStorage.setItem('ad5', document.getElementById('d5').value)
      localStorage.setItem('ad6', document.getElementById('d6').value)
      localStorage.setItem('ad7', document.getElementById('d7').value)
      localStorage.setItem('ad8', document.getElementById('d8').value)
      localStorage.setItem('ad9', document.getElementById('d9').value)
      localStorage.setItem('ad10', document.getElementById('d10').value)
      localStorage.setItem('ad11', document.getElementById('d11').value)
      localStorage.setItem('ad12', document.getElementById('d12').value)
      localStorage.setItem('ad13', document.getElementById('d13').value)
      localStorage.setItem('ad14', document.getElementById('d14').value)
      localStorage.setItem('ad15', document.getElementById('d15').value)
      localStorage.setItem('ad16', document.getElementById('d16').value)
      localStorage.setItem('ad17', document.getElementById('d17').value)
      localStorage.setItem('ad18', document.getElementById('d18').value)
      localStorage.setItem('ad19', document.getElementById('d19').value)
      localStorage.setItem('ad20', document.getElementById('d20').value)
      localStorage.setItem('ad21', document.getElementById('d21').value)
      localStorage.setItem('ad22', document.getElementById('d22').value)
      localStorage.setItem('ad23', document.getElementById('d23').value)
      localStorage.setItem('ad24', document.getElementById('d24').value)
      localStorage.setItem('ad25', document.getElementById('d25').value)
      localStorage.setItem('ad26', document.getElementById('d26').value)
      localStorage.setItem('ad27', document.getElementById('d27').value)
      localStorage.setItem('ad28', document.getElementById('d28').value)
      localStorage.setItem('ad29', document.getElementById('d29').value)
      localStorage.setItem('ad30', document.getElementById('d30').value)
    }
  })
})

document.getElementById('btn7').addEventListener('click', event => {
  event.preventDefault()

  document.getElementById('currentWeight').innerHTML = `
    <p><label for="currentWeight">1st</label>
    <input type="text" id="d1">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">2nd</label>
    <input type="text" id="d2">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">3rd</label>
    <input type="text" id="d3">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">4th</label>
    <input type="text" id="d4">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">5th</label>
    <input type="text" id="d5">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">6th</label>
    <input type="text" id="d6">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">7th</label>
    <input type="text" id="d7">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">8th</label>
    <input type="text" id="d8">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">9th</label>
    <input type="text" id="d9">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">10th</label>
    <input type="text" id="d10">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">11th</label>
    <input type="text" id="d11">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">12th</label>
    <input type="text" id="d12">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">13th</label>
    <input type="text" id="d13">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">14th</label>
    <input type="text" id="d14">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">15th</label>
    <input type="text" id="d15">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">16th</label>
    <input type="text" id="d16">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">17th</label>
    <input type="text" id="d17">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">18th</label>
    <input type="text" id="d18">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">19th</label>
    <input type="text" id="d19">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">20th</label>
    <input type="text" id="d20">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">21st</label>
    <input type="text" id="d21">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">22nd</label>
    <input type="text" id="d22">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">23rd</label>
    <input type="text" id="d23">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">24th</label>
    <input type="text" id="d24">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">25th</label>
    <input type="text" id="d25">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">26th</label>
    <input type="text" id="d26">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">27th</label>
    <input type="text" id="d27">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">28th</label>
    <input type="text" id="d28">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">29th</label>
    <input type="text" id="d29">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">30th</label>
    <input type="text" id="d30">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">31st</label>
    <input type="text" id="d31">
    <button class="save">Save</button> </p>
    `


  document.getElementById('d1').value = localStorage.getItem('ad1')
  document.getElementById('d2').value = localStorage.getItem('ad2')
  document.getElementById('d3').value = localStorage.getItem('ad3')
  document.getElementById('d4').value = localStorage.getItem('ad4')
  document.getElementById('d5').value = localStorage.getItem('ad6')
  document.getElementById('d6').value = localStorage.getItem('ad7')
  document.getElementById('d7').value = localStorage.getItem('ad8')
  document.getElementById('d8').value = localStorage.getItem('ad9')
  document.getElementById('d9').value = localStorage.getItem('ad10')
  document.getElementById('d10').value = localStorage.getItem('ad11')
  document.getElementById('d11').value = localStorage.getItem('ad12')
  document.getElementById('d13').value = localStorage.getItem('ad13')
  document.getElementById('d14').value = localStorage.getItem('ad14')
  document.getElementById('d15').value = localStorage.getItem('ad15')
  document.getElementById('d16').value = localStorage.getItem('ad16')
  document.getElementById('d17').value = localStorage.getItem('ad17')
  document.getElementById('d18').value = localStorage.getItem('ad18')
  document.getElementById('d19').value = localStorage.getItem('ad19')
  document.getElementById('d20').value = localStorage.getItem('ad20')
  document.getElementById('d21').value = localStorage.getItem('ad21')
  document.getElementById('d22').value = localStorage.getItem('ad22')
  document.getElementById('d23').value = localStorage.getItem('ad23')
  document.getElementById('d24').value = localStorage.getItem('ad24')
  document.getElementById('d25').value = localStorage.getItem('ad25')
  document.getElementById('d26').value = localStorage.getItem('ad26')
  document.getElementById('d27').value = localStorage.getItem('ad27')
  document.getElementById('d28').value = localStorage.getItem('ad28')
  document.getElementById('d29').value = localStorage.getItem('ad29')
  document.getElementById('d30').value = localStorage.getItem('ad30')
  document.getElementById('d31').value = localStorage.getItem('ad31')

  document.addEventListener('click', event => {

    if (event.target.classList.contains('save')) {
      localStorage.setItem('ad1', document.getElementById('d1').value)
      localStorage.setItem('ad2', document.getElementById('d2').value)
      localStorage.setItem('ad3', document.getElementById('d3').value)
      localStorage.setItem('ad4', document.getElementById('d4').value)
      localStorage.setItem('ad5', document.getElementById('d5').value)
      localStorage.setItem('ad6', document.getElementById('d6').value)
      localStorage.setItem('ad7', document.getElementById('d7').value)
      localStorage.setItem('ad8', document.getElementById('d8').value)
      localStorage.setItem('ad9', document.getElementById('d9').value)
      localStorage.setItem('ad10', document.getElementById('d10').value)
      localStorage.setItem('ad11', document.getElementById('d11').value)
      localStorage.setItem('ad12', document.getElementById('d12').value)
      localStorage.setItem('ad13', document.getElementById('d13').value)
      localStorage.setItem('ad14', document.getElementById('d14').value)
      localStorage.setItem('ad15', document.getElementById('d15').value)
      localStorage.setItem('ad16', document.getElementById('d16').value)
      localStorage.setItem('ad17', document.getElementById('d17').value)
      localStorage.setItem('ad18', document.getElementById('d18').value)
      localStorage.setItem('ad19', document.getElementById('d19').value)
      localStorage.setItem('ad20', document.getElementById('d20').value)
      localStorage.setItem('ad21', document.getElementById('d21').value)
      localStorage.setItem('ad22', document.getElementById('d22').value)
      localStorage.setItem('ad23', document.getElementById('d23').value)
      localStorage.setItem('ad24', document.getElementById('d24').value)
      localStorage.setItem('ad25', document.getElementById('d25').value)
      localStorage.setItem('ad26', document.getElementById('d26').value)
      localStorage.setItem('ad27', document.getElementById('d27').value)
      localStorage.setItem('ad28', document.getElementById('d28').value)
      localStorage.setItem('ad29', document.getElementById('d29').value)
      localStorage.setItem('ad30', document.getElementById('d30').value)
      localStorage.setItem('ad31', document.getElementById('d31').value)
    }
  })
})

document.getElementById('btn8').addEventListener('click', event => {
  event.preventDefault()

  document.getElementById('currentWeight').innerHTML = `
    <p><label for="currentWeight">1st</label>
    <input type="text" id="d1">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">2nd</label>
    <input type="text" id="d2">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">3rd</label>
    <input type="text" id="d3">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">4th</label>
    <input type="text" id="d4">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">5th</label>
    <input type="text" id="d5">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">6th</label>
    <input type="text" id="d6">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">7th</label>
    <input type="text" id="d7">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">8th</label>
    <input type="text" id="d8">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">9th</label>
    <input type="text" id="d9">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">10th</label>
    <input type="text" id="d10">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">11th</label>
    <input type="text" id="d11">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">12th</label>
    <input type="text" id="d12">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">13th</label>
    <input type="text" id="d13">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">14th</label>
    <input type="text" id="d14">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">15th</label>
    <input type="text" id="d15">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">16th</label>
    <input type="text" id="d16">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">17th</label>
    <input type="text" id="d17">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">18th</label>
    <input type="text" id="d18">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">19th</label>
    <input type="text" id="d19">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">20th</label>
    <input type="text" id="d20">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">21st</label>
    <input type="text" id="d21">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">22nd</label>
    <input type="text" id="d22">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">23rd</label>
    <input type="text" id="d23">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">24th</label>
    <input type="text" id="d24">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">25th</label>
    <input type="text" id="d25">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">26th</label>
    <input type="text" id="d26">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">27th</label>
    <input type="text" id="d27">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">28th</label>
    <input type="text" id="d28">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">29th</label>
    <input type="text" id="d29">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">30th</label>
    <input type="text" id="d30">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">31st</label>
    <input type="text" id="d31">
    <button class="save">Save</button> </p>
    `


  document.getElementById('d1').value = localStorage.getItem('ad1')
  document.getElementById('d2').value = localStorage.getItem('ad2')
  document.getElementById('d3').value = localStorage.getItem('ad3')
  document.getElementById('d4').value = localStorage.getItem('ad4')
  document.getElementById('d5').value = localStorage.getItem('ad6')
  document.getElementById('d6').value = localStorage.getItem('ad7')
  document.getElementById('d7').value = localStorage.getItem('ad8')
  document.getElementById('d8').value = localStorage.getItem('ad9')
  document.getElementById('d9').value = localStorage.getItem('ad10')
  document.getElementById('d10').value = localStorage.getItem('ad11')
  document.getElementById('d11').value = localStorage.getItem('ad12')
  document.getElementById('d13').value = localStorage.getItem('ad13')
  document.getElementById('d14').value = localStorage.getItem('ad14')
  document.getElementById('d15').value = localStorage.getItem('ad15')
  document.getElementById('d16').value = localStorage.getItem('ad16')
  document.getElementById('d17').value = localStorage.getItem('ad17')
  document.getElementById('d18').value = localStorage.getItem('ad18')
  document.getElementById('d19').value = localStorage.getItem('ad19')
  document.getElementById('d20').value = localStorage.getItem('ad20')
  document.getElementById('d21').value = localStorage.getItem('ad21')
  document.getElementById('d22').value = localStorage.getItem('ad22')
  document.getElementById('d23').value = localStorage.getItem('ad23')
  document.getElementById('d24').value = localStorage.getItem('ad24')
  document.getElementById('d25').value = localStorage.getItem('ad25')
  document.getElementById('d26').value = localStorage.getItem('ad26')
  document.getElementById('d27').value = localStorage.getItem('ad27')
  document.getElementById('d28').value = localStorage.getItem('ad28')
  document.getElementById('d29').value = localStorage.getItem('ad29')
  document.getElementById('d30').value = localStorage.getItem('ad30')
  document.getElementById('d31').value = localStorage.getItem('ad31')

  document.addEventListener('click', event => {

    if (event.target.classList.contains('save')) {
      localStorage.setItem('ad1', document.getElementById('d1').value)
      localStorage.setItem('ad2', document.getElementById('d2').value)
      localStorage.setItem('ad3', document.getElementById('d3').value)
      localStorage.setItem('ad4', document.getElementById('d4').value)
      localStorage.setItem('ad5', document.getElementById('d5').value)
      localStorage.setItem('ad6', document.getElementById('d6').value)
      localStorage.setItem('ad7', document.getElementById('d7').value)
      localStorage.setItem('ad8', document.getElementById('d8').value)
      localStorage.setItem('ad9', document.getElementById('d9').value)
      localStorage.setItem('ad10', document.getElementById('d10').value)
      localStorage.setItem('ad11', document.getElementById('d11').value)
      localStorage.setItem('ad12', document.getElementById('d12').value)
      localStorage.setItem('ad13', document.getElementById('d13').value)
      localStorage.setItem('ad14', document.getElementById('d14').value)
      localStorage.setItem('ad15', document.getElementById('d15').value)
      localStorage.setItem('ad16', document.getElementById('d16').value)
      localStorage.setItem('ad17', document.getElementById('d17').value)
      localStorage.setItem('ad18', document.getElementById('d18').value)
      localStorage.setItem('ad19', document.getElementById('d19').value)
      localStorage.setItem('ad20', document.getElementById('d20').value)
      localStorage.setItem('ad21', document.getElementById('d21').value)
      localStorage.setItem('ad22', document.getElementById('d22').value)
      localStorage.setItem('ad23', document.getElementById('d23').value)
      localStorage.setItem('ad24', document.getElementById('d24').value)
      localStorage.setItem('ad25', document.getElementById('d25').value)
      localStorage.setItem('ad26', document.getElementById('d26').value)
      localStorage.setItem('ad27', document.getElementById('d27').value)
      localStorage.setItem('ad28', document.getElementById('d28').value)
      localStorage.setItem('ad29', document.getElementById('d29').value)
      localStorage.setItem('ad30', document.getElementById('d30').value)
      localStorage.setItem('ad31', document.getElementById('d31').value)
    }
  })
})

document.getElementById('btn9').addEventListener('click', event => {
  event.preventDefault()

  document.getElementById('currentWeight').innerHTML = `
    <p><label for="currentWeight">1st</label>
    <input type="text" id="d1">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">2nd</label>
    <input type="text" id="d2">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">3rd</label>
    <input type="text" id="d3">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">4th</label>
    <input type="text" id="d4">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">5th</label>
    <input type="text" id="d5">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">6th</label>
    <input type="text" id="d6">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">7th</label>
    <input type="text" id="d7">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">8th</label>
    <input type="text" id="d8">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">9th</label>
    <input type="text" id="d9">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">10th</label>
    <input type="text" id="d10">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">11th</label>
    <input type="text" id="d11">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">12th</label>
    <input type="text" id="d12">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">13th</label>
    <input type="text" id="d13">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">14th</label>
    <input type="text" id="d14">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">15th</label>
    <input type="text" id="d15">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">16th</label>
    <input type="text" id="d16">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">17th</label>
    <input type="text" id="d17">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">18th</label>
    <input type="text" id="d18">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">19th</label>
    <input type="text" id="d19">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">20th</label>
    <input type="text" id="d20">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">21st</label>
    <input type="text" id="d21">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">22nd</label>
    <input type="text" id="d22">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">23rd</label>
    <input type="text" id="d23">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">24th</label>
    <input type="text" id="d24">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">25th</label>
    <input type="text" id="d25">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">26th</label>
    <input type="text" id="d26">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">27th</label>
    <input type="text" id="d27">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">28th</label>
    <input type="text" id="d28">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">29th</label>
    <input type="text" id="d29">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">30th</label>
    <input type="text" id="d30">
    <button class="save">Save</button> </p>
    `


  document.getElementById('d1').value = localStorage.getItem('ad1')
  document.getElementById('d2').value = localStorage.getItem('ad2')
  document.getElementById('d3').value = localStorage.getItem('ad3')
  document.getElementById('d4').value = localStorage.getItem('ad4')
  document.getElementById('d5').value = localStorage.getItem('ad6')
  document.getElementById('d6').value = localStorage.getItem('ad7')
  document.getElementById('d7').value = localStorage.getItem('ad8')
  document.getElementById('d8').value = localStorage.getItem('ad9')
  document.getElementById('d9').value = localStorage.getItem('ad10')
  document.getElementById('d10').value = localStorage.getItem('ad11')
  document.getElementById('d11').value = localStorage.getItem('ad12')
  document.getElementById('d13').value = localStorage.getItem('ad13')
  document.getElementById('d14').value = localStorage.getItem('ad14')
  document.getElementById('d15').value = localStorage.getItem('ad15')
  document.getElementById('d16').value = localStorage.getItem('ad16')
  document.getElementById('d17').value = localStorage.getItem('ad17')
  document.getElementById('d18').value = localStorage.getItem('ad18')
  document.getElementById('d19').value = localStorage.getItem('ad19')
  document.getElementById('d20').value = localStorage.getItem('ad20')
  document.getElementById('d21').value = localStorage.getItem('ad21')
  document.getElementById('d22').value = localStorage.getItem('ad22')
  document.getElementById('d23').value = localStorage.getItem('ad23')
  document.getElementById('d24').value = localStorage.getItem('ad24')
  document.getElementById('d25').value = localStorage.getItem('ad25')
  document.getElementById('d26').value = localStorage.getItem('ad26')
  document.getElementById('d27').value = localStorage.getItem('ad27')
  document.getElementById('d28').value = localStorage.getItem('ad28')
  document.getElementById('d29').value = localStorage.getItem('ad29')
  document.getElementById('d30').value = localStorage.getItem('ad30')

  document.addEventListener('click', event => {

    if (event.target.classList.contains('save')) {
      localStorage.setItem('ad1', document.getElementById('d1').value)
      localStorage.setItem('ad2', document.getElementById('d2').value)
      localStorage.setItem('ad3', document.getElementById('d3').value)
      localStorage.setItem('ad4', document.getElementById('d4').value)
      localStorage.setItem('ad5', document.getElementById('d5').value)
      localStorage.setItem('ad6', document.getElementById('d6').value)
      localStorage.setItem('ad7', document.getElementById('d7').value)
      localStorage.setItem('ad8', document.getElementById('d8').value)
      localStorage.setItem('ad9', document.getElementById('d9').value)
      localStorage.setItem('ad10', document.getElementById('d10').value)
      localStorage.setItem('ad11', document.getElementById('d11').value)
      localStorage.setItem('ad12', document.getElementById('d12').value)
      localStorage.setItem('ad13', document.getElementById('d13').value)
      localStorage.setItem('ad14', document.getElementById('d14').value)
      localStorage.setItem('ad15', document.getElementById('d15').value)
      localStorage.setItem('ad16', document.getElementById('d16').value)
      localStorage.setItem('ad17', document.getElementById('d17').value)
      localStorage.setItem('ad18', document.getElementById('d18').value)
      localStorage.setItem('ad19', document.getElementById('d19').value)
      localStorage.setItem('ad20', document.getElementById('d20').value)
      localStorage.setItem('ad21', document.getElementById('d21').value)
      localStorage.setItem('ad22', document.getElementById('d22').value)
      localStorage.setItem('ad23', document.getElementById('d23').value)
      localStorage.setItem('ad24', document.getElementById('d24').value)
      localStorage.setItem('ad25', document.getElementById('d25').value)
      localStorage.setItem('ad26', document.getElementById('d26').value)
      localStorage.setItem('ad27', document.getElementById('d27').value)
      localStorage.setItem('ad28', document.getElementById('d28').value)
      localStorage.setItem('ad29', document.getElementById('d29').value)
      localStorage.setItem('ad30', document.getElementById('d30').value)
    }
  })
})

document.getElementById('btn10').addEventListener('click', event => {
  event.preventDefault()

  document.getElementById('currentWeight').innerHTML = `
    <p><label for="currentWeight">1st</label>
    <input type="text" id="d1">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">2nd</label>
    <input type="text" id="d2">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">3rd</label>
    <input type="text" id="d3">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">4th</label>
    <input type="text" id="d4">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">5th</label>
    <input type="text" id="d5">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">6th</label>
    <input type="text" id="d6">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">7th</label>
    <input type="text" id="d7">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">8th</label>
    <input type="text" id="d8">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">9th</label>
    <input type="text" id="d9">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">10th</label>
    <input type="text" id="d10">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">11th</label>
    <input type="text" id="d11">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">12th</label>
    <input type="text" id="d12">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">13th</label>
    <input type="text" id="d13">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">14th</label>
    <input type="text" id="d14">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">15th</label>
    <input type="text" id="d15">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">16th</label>
    <input type="text" id="d16">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">17th</label>
    <input type="text" id="d17">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">18th</label>
    <input type="text" id="d18">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">19th</label>
    <input type="text" id="d19">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">20th</label>
    <input type="text" id="d20">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">21st</label>
    <input type="text" id="d21">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">22nd</label>
    <input type="text" id="d22">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">23rd</label>
    <input type="text" id="d23">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">24th</label>
    <input type="text" id="d24">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">25th</label>
    <input type="text" id="d25">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">26th</label>
    <input type="text" id="d26">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">27th</label>
    <input type="text" id="d27">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">28th</label>
    <input type="text" id="d28">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">29th</label>
    <input type="text" id="d29">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">30th</label>
    <input type="text" id="d30">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">31st</label>
    <input type="text" id="d31">
    <button class="save">Save</button> </p>
    `


  document.getElementById('d1').value = localStorage.getItem('ad1')
  document.getElementById('d2').value = localStorage.getItem('ad2')
  document.getElementById('d3').value = localStorage.getItem('ad3')
  document.getElementById('d4').value = localStorage.getItem('ad4')
  document.getElementById('d5').value = localStorage.getItem('ad6')
  document.getElementById('d6').value = localStorage.getItem('ad7')
  document.getElementById('d7').value = localStorage.getItem('ad8')
  document.getElementById('d8').value = localStorage.getItem('ad9')
  document.getElementById('d9').value = localStorage.getItem('ad10')
  document.getElementById('d10').value = localStorage.getItem('ad11')
  document.getElementById('d11').value = localStorage.getItem('ad12')
  document.getElementById('d13').value = localStorage.getItem('ad13')
  document.getElementById('d14').value = localStorage.getItem('ad14')
  document.getElementById('d15').value = localStorage.getItem('ad15')
  document.getElementById('d16').value = localStorage.getItem('ad16')
  document.getElementById('d17').value = localStorage.getItem('ad17')
  document.getElementById('d18').value = localStorage.getItem('ad18')
  document.getElementById('d19').value = localStorage.getItem('ad19')
  document.getElementById('d20').value = localStorage.getItem('ad20')
  document.getElementById('d21').value = localStorage.getItem('ad21')
  document.getElementById('d22').value = localStorage.getItem('ad22')
  document.getElementById('d23').value = localStorage.getItem('ad23')
  document.getElementById('d24').value = localStorage.getItem('ad24')
  document.getElementById('d25').value = localStorage.getItem('ad25')
  document.getElementById('d26').value = localStorage.getItem('ad26')
  document.getElementById('d27').value = localStorage.getItem('ad27')
  document.getElementById('d28').value = localStorage.getItem('ad28')
  document.getElementById('d29').value = localStorage.getItem('ad29')
  document.getElementById('d30').value = localStorage.getItem('ad30')
  document.getElementById('d31').value = localStorage.getItem('ad31')

  document.addEventListener('click', event => {

    if (event.target.classList.contains('save')) {
      localStorage.setItem('ad1', document.getElementById('d1').value)
      localStorage.setItem('ad2', document.getElementById('d2').value)
      localStorage.setItem('ad3', document.getElementById('d3').value)
      localStorage.setItem('ad4', document.getElementById('d4').value)
      localStorage.setItem('ad5', document.getElementById('d5').value)
      localStorage.setItem('ad6', document.getElementById('d6').value)
      localStorage.setItem('ad7', document.getElementById('d7').value)
      localStorage.setItem('ad8', document.getElementById('d8').value)
      localStorage.setItem('ad9', document.getElementById('d9').value)
      localStorage.setItem('ad10', document.getElementById('d10').value)
      localStorage.setItem('ad11', document.getElementById('d11').value)
      localStorage.setItem('ad12', document.getElementById('d12').value)
      localStorage.setItem('ad13', document.getElementById('d13').value)
      localStorage.setItem('ad14', document.getElementById('d14').value)
      localStorage.setItem('ad15', document.getElementById('d15').value)
      localStorage.setItem('ad16', document.getElementById('d16').value)
      localStorage.setItem('ad17', document.getElementById('d17').value)
      localStorage.setItem('ad18', document.getElementById('d18').value)
      localStorage.setItem('ad19', document.getElementById('d19').value)
      localStorage.setItem('ad20', document.getElementById('d20').value)
      localStorage.setItem('ad21', document.getElementById('d21').value)
      localStorage.setItem('ad22', document.getElementById('d22').value)
      localStorage.setItem('ad23', document.getElementById('d23').value)
      localStorage.setItem('ad24', document.getElementById('d24').value)
      localStorage.setItem('ad25', document.getElementById('d25').value)
      localStorage.setItem('ad26', document.getElementById('d26').value)
      localStorage.setItem('ad27', document.getElementById('d27').value)
      localStorage.setItem('ad28', document.getElementById('d28').value)
      localStorage.setItem('ad29', document.getElementById('d29').value)
      localStorage.setItem('ad30', document.getElementById('d30').value)
      localStorage.setItem('ad31', document.getElementById('d31').value)
    }
  })
})

document.getElementById('btn11').addEventListener('click', event => {
  event.preventDefault()

  document.getElementById('currentWeight').innerHTML = `
    <p><label for="currentWeight">1st</label>
    <input type="text" id="d1">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">2nd</label>
    <input type="text" id="d2">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">3rd</label>
    <input type="text" id="d3">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">4th</label>
    <input type="text" id="d4">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">5th</label>
    <input type="text" id="d5">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">6th</label>
    <input type="text" id="d6">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">7th</label>
    <input type="text" id="d7">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">8th</label>
    <input type="text" id="d8">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">9th</label>
    <input type="text" id="d9">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">10th</label>
    <input type="text" id="d10">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">11th</label>
    <input type="text" id="d11">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">12th</label>
    <input type="text" id="d12">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">13th</label>
    <input type="text" id="d13">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">14th</label>
    <input type="text" id="d14">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">15th</label>
    <input type="text" id="d15">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">16th</label>
    <input type="text" id="d16">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">17th</label>
    <input type="text" id="d17">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">18th</label>
    <input type="text" id="d18">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">19th</label>
    <input type="text" id="d19">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">20th</label>
    <input type="text" id="d20">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">21st</label>
    <input type="text" id="d21">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">22nd</label>
    <input type="text" id="d22">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">23rd</label>
    <input type="text" id="d23">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">24th</label>
    <input type="text" id="d24">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">25th</label>
    <input type="text" id="d25">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">26th</label>
    <input type="text" id="d26">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">27th</label>
    <input type="text" id="d27">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">28th</label>
    <input type="text" id="d28">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">29th</label>
    <input type="text" id="d29">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">30th</label>
    <input type="text" id="d30">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">31st</label>
    `


  document.getElementById('d1').value = localStorage.getItem('ad1')
  document.getElementById('d2').value = localStorage.getItem('ad2')
  document.getElementById('d3').value = localStorage.getItem('ad3')
  document.getElementById('d4').value = localStorage.getItem('ad4')
  document.getElementById('d5').value = localStorage.getItem('ad6')
  document.getElementById('d6').value = localStorage.getItem('ad7')
  document.getElementById('d7').value = localStorage.getItem('ad8')
  document.getElementById('d8').value = localStorage.getItem('ad9')
  document.getElementById('d9').value = localStorage.getItem('ad10')
  document.getElementById('d10').value = localStorage.getItem('ad11')
  document.getElementById('d11').value = localStorage.getItem('ad12')
  document.getElementById('d13').value = localStorage.getItem('ad13')
  document.getElementById('d14').value = localStorage.getItem('ad14')
  document.getElementById('d15').value = localStorage.getItem('ad15')
  document.getElementById('d16').value = localStorage.getItem('ad16')
  document.getElementById('d17').value = localStorage.getItem('ad17')
  document.getElementById('d18').value = localStorage.getItem('ad18')
  document.getElementById('d19').value = localStorage.getItem('ad19')
  document.getElementById('d20').value = localStorage.getItem('ad20')
  document.getElementById('d21').value = localStorage.getItem('ad21')
  document.getElementById('d22').value = localStorage.getItem('ad22')
  document.getElementById('d23').value = localStorage.getItem('ad23')
  document.getElementById('d24').value = localStorage.getItem('ad24')
  document.getElementById('d25').value = localStorage.getItem('ad25')
  document.getElementById('d26').value = localStorage.getItem('ad26')
  document.getElementById('d27').value = localStorage.getItem('ad27')
  document.getElementById('d28').value = localStorage.getItem('ad28')
  document.getElementById('d29').value = localStorage.getItem('ad29')
  document.getElementById('d30').value = localStorage.getItem('ad30')

  document.addEventListener('click', event => {

    if (event.target.classList.contains('save')) {
      localStorage.setItem('ad1', document.getElementById('d1').value)
      localStorage.setItem('ad2', document.getElementById('d2').value)
      localStorage.setItem('ad3', document.getElementById('d3').value)
      localStorage.setItem('ad4', document.getElementById('d4').value)
      localStorage.setItem('ad5', document.getElementById('d5').value)
      localStorage.setItem('ad6', document.getElementById('d6').value)
      localStorage.setItem('ad7', document.getElementById('d7').value)
      localStorage.setItem('ad8', document.getElementById('d8').value)
      localStorage.setItem('ad9', document.getElementById('d9').value)
      localStorage.setItem('ad10', document.getElementById('d10').value)
      localStorage.setItem('ad11', document.getElementById('d11').value)
      localStorage.setItem('ad12', document.getElementById('d12').value)
      localStorage.setItem('ad13', document.getElementById('d13').value)
      localStorage.setItem('ad14', document.getElementById('d14').value)
      localStorage.setItem('ad15', document.getElementById('d15').value)
      localStorage.setItem('ad16', document.getElementById('d16').value)
      localStorage.setItem('ad17', document.getElementById('d17').value)
      localStorage.setItem('ad18', document.getElementById('d18').value)
      localStorage.setItem('ad19', document.getElementById('d19').value)
      localStorage.setItem('ad20', document.getElementById('d20').value)
      localStorage.setItem('ad21', document.getElementById('d21').value)
      localStorage.setItem('ad22', document.getElementById('d22').value)
      localStorage.setItem('ad23', document.getElementById('d23').value)
      localStorage.setItem('ad24', document.getElementById('d24').value)
      localStorage.setItem('ad25', document.getElementById('d25').value)
      localStorage.setItem('ad26', document.getElementById('d26').value)
      localStorage.setItem('ad27', document.getElementById('d27').value)
      localStorage.setItem('ad28', document.getElementById('d28').value)
      localStorage.setItem('ad29', document.getElementById('d29').value)
      localStorage.setItem('ad30', document.getElementById('d30').value)
    }
  })
})

document.getElementById('btn12').addEventListener('click', event => {
  event.preventDefault()

  document.getElementById('currentWeight').innerHTML = `
    <p><label for="currentWeight">1st</label>
    <input type="text" id="d1">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">2nd</label>
    <input type="text" id="d2">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">3rd</label>
    <input type="text" id="d3">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">4th</label>
    <input type="text" id="d4">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">5th</label>
    <input type="text" id="d5">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">6th</label>
    <input type="text" id="d6">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">7th</label>
    <input type="text" id="d7">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">8th</label>
    <input type="text" id="d8">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">9th</label>
    <input type="text" id="d9">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">10th</label>
    <input type="text" id="d10">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">11th</label>
    <input type="text" id="d11">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">12th</label>
    <input type="text" id="d12">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">13th</label>
    <input type="text" id="d13">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">14th</label>
    <input type="text" id="d14">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">15th</label>
    <input type="text" id="d15">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">16th</label>
    <input type="text" id="d16">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">17th</label>
    <input type="text" id="d17">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">18th</label>
    <input type="text" id="d18">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">19th</label>
    <input type="text" id="d19">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">20th</label>
    <input type="text" id="d20">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">21st</label>
    <input type="text" id="d21">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">22nd</label>
    <input type="text" id="d22">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">23rd</label>
    <input type="text" id="d23">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">24th</label>
    <input type="text" id="d24">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">25th</label>
    <input type="text" id="d25">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">26th</label>
    <input type="text" id="d26">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">27th</label>
    <input type="text" id="d27">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">28th</label>
    <input type="text" id="d28">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">29th</label>
    <input type="text" id="d29">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">30th</label>
    <input type="text" id="d30">
    <button class="save">Save</button> </p>
    <p><label for="currentWeight">31st</label>
    <input type="text" id="d31">
    <button class="save">Save</button> </p>
    `


  document.getElementById('d1').value = localStorage.getItem('ad1')
  document.getElementById('d2').value = localStorage.getItem('ad2')
  document.getElementById('d3').value = localStorage.getItem('ad3')
  document.getElementById('d4').value = localStorage.getItem('ad4')
  document.getElementById('d5').value = localStorage.getItem('ad6')
  document.getElementById('d6').value = localStorage.getItem('ad7')
  document.getElementById('d7').value = localStorage.getItem('ad8')
  document.getElementById('d8').value = localStorage.getItem('ad9')
  document.getElementById('d9').value = localStorage.getItem('ad10')
  document.getElementById('d10').value = localStorage.getItem('ad11')
  document.getElementById('d11').value = localStorage.getItem('ad12')
  document.getElementById('d13').value = localStorage.getItem('ad13')
  document.getElementById('d14').value = localStorage.getItem('ad14')
  document.getElementById('d15').value = localStorage.getItem('ad15')
  document.getElementById('d16').value = localStorage.getItem('ad16')
  document.getElementById('d17').value = localStorage.getItem('ad17')
  document.getElementById('d18').value = localStorage.getItem('ad18')
  document.getElementById('d19').value = localStorage.getItem('ad19')
  document.getElementById('d20').value = localStorage.getItem('ad20')
  document.getElementById('d21').value = localStorage.getItem('ad21')
  document.getElementById('d22').value = localStorage.getItem('ad22')
  document.getElementById('d23').value = localStorage.getItem('ad23')
  document.getElementById('d24').value = localStorage.getItem('ad24')
  document.getElementById('d25').value = localStorage.getItem('ad25')
  document.getElementById('d26').value = localStorage.getItem('ad26')
  document.getElementById('d27').value = localStorage.getItem('ad27')
  document.getElementById('d28').value = localStorage.getItem('ad28')
  document.getElementById('d29').value = localStorage.getItem('ad29')
  document.getElementById('d30').value = localStorage.getItem('ad30')
  document.getElementById('d31').value = localStorage.getItem('ad31')

  document.addEventListener('click', event => {

    if (event.target.classList.contains('save')) {
      localStorage.setItem('ad1', document.getElementById('d1').value)
      localStorage.setItem('ad2', document.getElementById('d2').value)
      localStorage.setItem('ad3', document.getElementById('d3').value)
      localStorage.setItem('ad4', document.getElementById('d4').value)
      localStorage.setItem('ad5', document.getElementById('d5').value)
      localStorage.setItem('ad6', document.getElementById('d6').value)
      localStorage.setItem('ad7', document.getElementById('d7').value)
      localStorage.setItem('ad8', document.getElementById('d8').value)
      localStorage.setItem('ad9', document.getElementById('d9').value)
      localStorage.setItem('ad10', document.getElementById('d10').value)
      localStorage.setItem('ad11', document.getElementById('d11').value)
      localStorage.setItem('ad12', document.getElementById('d12').value)
      localStorage.setItem('ad13', document.getElementById('d13').value)
      localStorage.setItem('ad14', document.getElementById('d14').value)
      localStorage.setItem('ad15', document.getElementById('d15').value)
      localStorage.setItem('ad16', document.getElementById('d16').value)
      localStorage.setItem('ad17', document.getElementById('d17').value)
      localStorage.setItem('ad18', document.getElementById('d18').value)
      localStorage.setItem('ad19', document.getElementById('d19').value)
      localStorage.setItem('ad20', document.getElementById('d20').value)
      localStorage.setItem('ad21', document.getElementById('d21').value)
      localStorage.setItem('ad22', document.getElementById('d22').value)
      localStorage.setItem('ad23', document.getElementById('d23').value)
      localStorage.setItem('ad24', document.getElementById('d24').value)
      localStorage.setItem('ad25', document.getElementById('d25').value)
      localStorage.setItem('ad26', document.getElementById('d26').value)
      localStorage.setItem('ad27', document.getElementById('d27').value)
      localStorage.setItem('ad28', document.getElementById('d28').value)
      localStorage.setItem('ad29', document.getElementById('d29').value)
      localStorage.setItem('ad30', document.getElementById('d30').value)
      localStorage.setItem('ad31', document.getElementById('d31').value)
    }
  })
})

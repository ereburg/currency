export default function post() {
  let date 

  let currentdate = () => {
    let currentDay = new Date().getDate() 
    let currentMonth = new Date().getMonth() 
    let currentYear = new Date().getFullYear() 
    if (currentMonth < 9) {
      date = `${currentDay}.0${currentMonth + 1}.${currentYear}` 
    } else {
      date = `${currentDay}.${currentMonth + 1}.${currentYear}` 
    }
  } 

  currentdate() 

  const textDate = document.querySelector('.current-date') 
  textDate.textContent = date

  // Stats
  let rates = {} 
  let USD, EUR, RUB, BYN, GBP 

  const part1 = 'ce26fb4b5968ebce' 
  const part2 = '6f7cabefb6b4a' 
  const part3 = 'f94&symbols=USD,RUB,EUR,BYN,GBP' 
  fetch(`http://data.fixer.io/api/latest?access_key=${part1}${part2}${part3}`)
    .then((resp) => resp.json())
    .then((data) => rates = data.rates)
    .then(currency) 


  function currency() {
    USD = 1.11 
    EUR = 1 
    RUB = 68.32 
    BYN = 2.35 
    GBP = 0.85 


    for (let key in rates) {
      if (key.toString() == 'USD') {
        USD = Math.round(rates[key] * 100) / 100 || 1.11 
      } else if (key.toString() == 'EUR') {
        EUR = Math.round(rates[key] * 100) / 100 || 1 
      } else if (key.toString() == 'RUB') {
        RUB = Math.round(rates[key] * 100) / 100 || 68.32 
      } else if (key.toString() == 'BYN') {
        BYN = Math.round(rates[key] * 100) / 100 || 2.35 
      } else if (key.toString() == 'GBP') {
        GBP = Math.round(rates[key] * 100) / 100 || 0.85 
      }
    }

    const inputs = document.querySelectorAll('.form-input') 
    const inputUSD = document.querySelector('.form-input.usd') 
    const inputEUR = document.querySelector('.form-input.eur') 
    const inputRUB = document.querySelector('.form-input.rub') 
    const inputBYN = document.querySelector('.form-input.byn') 
    const inputGBP = document.querySelector('.form-input.gbp') 

    inputs.forEach(item => {
      item.addEventListener('input', () => {
        let input_eur = item.classList.contains('eur') 
        let input_usd = item.classList.contains('usd') 
        let input_rub = item.classList.contains('rub') 
        let input_byn = item.classList.contains('byn') 
        let input_gbp = item.classList.contains('gbp') 
        let ratio 

        if (input_eur) {
          inputUSD.value = (Math.floor((item.value * USD) * 100) / 100) 
          inputRUB.value = (Math.floor((item.value * RUB) * 100) / 100) 
          inputBYN.value = (Math.floor((item.value * BYN) * 100) / 100) 
          inputGBP.value = (Math.floor((item.value * GBP) * 100) / 100) 
        }

        if (input_usd) {
          ratio = EUR / USD 
          inputEUR.value = (Math.floor((item.value * (ratio)) * 100) / 100) 
          inputRUB.value = (Math.floor((item.value * (ratio * RUB)) * 100) / 100) 
          inputGBP.value = (Math.floor((item.value * (ratio * GBP)) * 100) / 100) 
          inputBYN.value = (Math.floor((item.value * (ratio * BYN)) * 100) / 100) 
        }

        if (input_rub) {
          ratio = EUR / RUB 
          inputEUR.value = (Math.floor((item.value * (ratio)) * 100) / 100) 
          inputUSD.value = (Math.floor((item.value * (ratio * USD)) * 100) / 100) 
          inputGBP.value = (Math.floor((item.value * (ratio * GBP)) * 100) / 100) 
          inputBYN.value = (Math.floor((item.value * (ratio * BYN)) * 100) / 100) 
        }

        if (input_byn) {
          ratio = EUR / BYN 
          inputEUR.value = (Math.floor((item.value * (ratio)) * 100) / 100) 
          inputUSD.value = (Math.floor((item.value * (ratio * USD)) * 100) / 100) 
          inputGBP.value = (Math.floor((item.value * (ratio * GBP)) * 100) / 100) 
          inputRUB.value = (Math.floor((item.value * (ratio * RUB)) * 100) / 100) 
        }

        if (input_gbp) {
          ratio = EUR / GBP 
          inputEUR.value = (Math.floor((item.value * (ratio)) * 100) / 100) 
          inputUSD.value = (Math.floor((item.value * (ratio * USD)) * 100) / 100) 
          inputRUB.value = (Math.floor((item.value * (ratio * RUB)) * 100) / 100) 
          inputBYN.value = (Math.floor((item.value * (ratio * BYN)) * 100) / 100) 
        }

      }, false) 
    }) 

    const currentCourseToUSD = document.querySelector('.currency__converse--usd') 
    const currentCourseToEUR = document.querySelector('.currency__converse--eur') 
    const currentCourseToRUB = document.querySelector('.currency__converse--rub') 
    const currentCourseToGBP = document.querySelector('.currency__converse--gbp') 

    let ratio_byn = EUR / BYN 
    currentCourseToUSD.textContent = (Math.floor((1 * (ratio_byn * USD)) * 100) / 100) 
    currentCourseToRUB.textContent = (Math.floor((1 * (ratio_byn * RUB)) * 100) / 100) 
    currentCourseToEUR.textContent = (Math.floor((1 * (ratio_byn * EUR)) * 100) / 100) 
    currentCourseToGBP.textContent = (Math.floor((1 * (ratio_byn * GBP)) * 100) / 100) 

  }

  if (Object.keys(rates).length == 0) {
    currency() 
  }


  const goUp = document.querySelector('.go-up') 
  const centerWrapper = document.querySelector('.center-wrapper') 
  const formWrapper = document.querySelector('.form-wrapper') 
  const previewWrapper = document.querySelector('.preview-wrapper') 

  goUp.addEventListener('click', () => {
    centerWrapper.classList.toggle('active') 
    formWrapper.classList.toggle('active') 
    goUp.classList.toggle('active') 
    previewWrapper.classList.toggle('active') 
  }) 
}

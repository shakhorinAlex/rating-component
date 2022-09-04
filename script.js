const mainContainer = document.querySelector('.rating-box');
const thankYouContainer = document.querySelector('.thank-you');
const submitButton = document.getElementById('submit');
const rateAgainBtn = document.getElementById('rate-again');
const rating = document.getElementById('result')
const rates = document.querySelectorAll('.rtn-btn')

submitButton.addEventListener("click", () => {
    thankYouContainer.classList.remove('hidden')
    mainContainer.style.display = 'none'
})

rateAgainBtn.addEventListener("click", () => {
    thankYouContainer.classList.add('hidden')
    mainContainer.style.display = 'block'
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    })
})

$(document).ready(function() {
  $('.rating button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
});
// const radioInputs = outerForm.getElementsByName('radio');
// const ticketsTypeFS = outerForm.querySelector('.tickets__type');
const outerForm = document.querySelector('.tickets__form');
const inputs = outerForm.elements;
const outerCounter = document.getElementById('amount_count');
const radioLabels = outerForm.querySelectorAll('.tickets__radio_container');
const amountButtons = outerForm.querySelectorAll('.tickets__button');
const prices = {
  permanent: 20,
  temporary: 25,
  combined: 40
}
let inputsRadio = inputs['radio'];
let basicInput = inputs['basicAmont'];
let seniorInput = inputs['seniorAmont'];

let basicAmont = basicInput.value;
let seniorAmont = seniorInput.value;
let type = inputsRadio.value;
let basicPrice = basicAmont * prices[type];
let seniorPrice = seniorAmont * prices[type] / 2;

const formCallBtn = outerForm.querySelector('.btn.btn--black')
const innerForm = document.querySelector('.book');
const ticketsType = innerForm.querySelector('.select__name_dispay');
const typeNames = {
  permanent: 'Permanent exhibition',
  temporary: 'Temporary exhibition',
  combined: 'Combined Admission',
}
const amountInner = innerForm.elements['amount_inner'];
const overviewAmount = innerForm.querySelectorAll('.overview__count');
const basicPriceSpan = innerForm.querySelectorAll('.price_basic');
const seniorPriceSpan = innerForm.querySelectorAll('.price_senior');
const priceTotalBasic = innerForm.querySelector('.price__total--basic');
const priceTotalSenior = innerForm.querySelector('.price__total--senior');
const priceTotal = innerForm.querySelector('.overview__total');


// Functions


function toggleForm() {
  document.body.classList.toggle('active_form');
}
function updatePrices () {
  basicAmont = basicInput.value;
  seniorAmont = seniorInput.value;
  type = inputsRadio.value;
  basicPrice = basicAmont * prices[type];
  seniorPrice = seniorAmont * prices[type] / 2;

  outerCounter.innerHTML = seniorPrice + basicPrice;
}

function updateBookForm(bsAm, snAm, typ) {
  ticketsType.innerText = typeNames[typ];
  amountInner[0].value = bsAm;
  amountInner[1].value = snAm;
  overviewAmount[0].innerText = bsAm;
  overviewAmount[1].innerText = snAm;
  basicPriceSpan.forEach(i => i.innerText = prices[typ]);
  seniorPriceSpan.forEach(i => i.innerText = prices[typ]/2);
  priceTotalBasic.innerText = `${prices[typ] * bsAm} €`;
  priceTotalSenior.innerText = `${prices[typ]/2 * snAm} €`;
  priceTotal.innerText = `${(prices[typ] * bsAm) + (prices[typ] / 2 * snAm)} €`;
}


// Event listeners


radioLabels.forEach(function(item) {
  item.addEventListener('input', function (e) {
    updatePrices();
  });
});

amountButtons.forEach(function(item) {
  item.addEventListener('click', function (e) {
    updatePrices();
  });
});

window.addEventListener('load', updatePrices());

formCallBtn.addEventListener('click', () => {
  updateBookForm(basicAmont, seniorAmont, type);
});
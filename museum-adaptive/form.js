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
const overviewType = innerForm.querySelector('.overview__type');
const bookAmountBtns = innerForm.querySelectorAll('.book__amount_button')

const selectTypeItems = innerForm.querySelectorAll('.type_item');

const nameInput = innerForm.querySelector('.input__name');
const emailInput = innerForm.querySelector('.input__email');
const phoneInput = innerForm.querySelector('.input__phone');






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
  let price = prices[typ];
  ticketsType.innerText = typeNames[typ];
  amountInner[0].value = bsAm;
  amountInner[1].value = snAm;
  overviewAmount[0].innerText = bsAm;
  overviewAmount[1].innerText = snAm;
  basicPriceSpan.forEach((i) => (i.innerText = price));
  seniorPriceSpan.forEach((i) => (i.innerText = price / 2));
  priceTotalBasic.innerText = `${price * bsAm} €`;
  priceTotalSenior.innerText = `${(price / 2) * snAm} €`;
  priceTotal.innerText = `${price * bsAm + (price / 2) * snAm} €`;
  overviewType.innerHTML = typeNames[typ];
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

selectTypeItems.forEach(i => i.addEventListener('click', (e) => {
  type = e.target.innerText.split(' ')[0].toLowerCase();
  basicAmont = amountInner[0].value;
  seniorAmont = amountInner[1].value;

  updateBookForm(basicAmont, seniorAmont, type);
}));

bookAmountBtns.forEach(i => i.addEventListener('click', () => {
  type = ticketsType.innerText.split(' ')[0].toLowerCase();
  basicAmont = amountInner[0].value;
  seniorAmont = amountInner[1].value;

  updateBookForm(basicAmont, seniorAmont, type);
}));

nameInput.addEventListener('input', e => {
  if (!/^[a-zа-я ]{3,15}$/gi.test(nameInput.value)) {
    nameInput.parentElement.classList.add('invalid');
  } else {
    nameInput.parentElement.classList.remove('invalid');
  }
})
emailInput.addEventListener('input', e => {
  if (!/^[\w-_]+@([\w-]{4,}\.)+[\w-]{2,}$/g.test(emailInput.value)) {
    emailInput.parentElement.classList.add('invalid');
  } else {
    emailInput.parentElement.classList.remove('invalid');
  }
})
phoneInput.addEventListener("input", (e) => {
  if (
    !/^[0-9]{3}[-\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2}$/g.test(
      phoneInput.value
    )
  ) {
    phoneInput.parentElement.classList.add("invalid");
  } else {
    phoneInput.parentElement.classList.remove("invalid");
  }
});
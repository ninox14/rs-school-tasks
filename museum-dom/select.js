const select = document.querySelector(".book__select");
const options = document.querySelectorAll("option");
const selectArrow = document.querySelector(".book__arrow");
const dateContainer = document.querySelector('.book__input--date');
const timeContainer = document.querySelector('.book__input--time');

let selectDiv;
let selectSpan;
let selectList;

function customizeSelect() {
  select.style.display = "none";

  let div = document.createElement('div');

  let span = document.createElement('span'); //1

  span.innerText = options[0].innerText; //div.inner....
  span.classList.add('select__name_dispay'); //2
  div.append(span);
  div.classList.add("select", "input");
  select.after(div);

  selectSpan = document.querySelector('.select__name_dispay');
  selectDiv = document.querySelector(".select");

  let ul = document.createElement('ul');
  ul.classList.add("select__list");
  selectDiv.append(ul);

  selectList = document.querySelector(".select__list");

  for (let i = 1; i < options.length; i++) {
    let li = document.createElement("li");
    li.innerText = options[i].innerText;
    li.classList.add("select__list_item");
    selectList.append(li);
  }
}

function toggleSelect() {
  selectList.classList.toggle("active");
  selectArrow.classList.toggle("active");
}

function pickOption(e) {
  selectSpan.innerText = e.target.innerText;
  // selectDiv.append(selectList);
}

function hideMask(e) {
  e.currentTarget.children[1].style.display = "none";
  e.currentTarget.children[2].style.color = "inherit";
  e.removeEventListener('click', hideMask);
}

customizeSelect();




// Event listeners
dateContainer.addEventListener('click', hideMask);
timeContainer.addEventListener('click', hideMask);

selectList.addEventListener("click", pickOption);
document.querySelector('.book__input--select').addEventListener("click", toggleSelect);


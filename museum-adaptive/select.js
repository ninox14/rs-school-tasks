const select = document.querySelector(".book__select");
const options = document.querySelectorAll("option");
const selectArrow = document.querySelector(".book__arrow");

let selectDiv;
let selectList;

function customizeSelect() {
  select.style.display = "none";

  let div = document.createElement('div');
  div.innerText = options[0].innerText;
  div.classList.add("select", "input");
  select.after(div);

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
  selectDiv.innerText = e.target.innerText;
  selectDiv.append(selectList);
}

customizeSelect();
selectList.addEventListener("click", pickOption);
document.querySelector('.book__input--select').addEventListener("click", toggleSelect);
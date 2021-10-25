// const options = document.querySelectorAll("option");
// const select = document.querySelector(".book__select");
// const selectArrow = document.querySelector(".book__arrow");
// const timeContainer = document.querySelector('.book__input--time');
const dateContainer = document.querySelector('.book__input--date');
const selectTime = document.querySelector(".select__time_list");
const selectType = document.querySelector(".select__type_list");
const dateInput = dateContainer.querySelector('.input__date')
let today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

const overviewTime = document.querySelector('.overview__time');
const overviewDate = document.querySelector('.overview__date')




function customizeSelect() {
  select.style.display = "none";

  let div = document.createElement('div');

  let span = document.createElement('span'); //1

  span.innerText = options[0].innerText; //div.inner....
  span.classList.add('select__name_dispay'); //2
  div.append(span);
  div.classList.add("select", "input", "select__type");
  select.after(div);

  selectSpan = document.querySelector('.select__name_dispay');
  selectDiv = document.querySelector(".select__type");

  let ul = document.createElement('ul');
  ul.classList.add("select__list","select__type_list");
  selectDiv.append(ul);

  selectList = document.querySelector(".select__type_list");

  for (let i = 1; i < options.length; i++) {
    let li = document.createElement("li");
    li.innerText = options[i].innerText;
    li.classList.add("select__list_item", "type_item");
    selectList.append(li);
  }
}

function toggleSelect(e) {
/*   selectList.classList.toggle("active");
  selectArrow.classList.toggle("active"); */
  e.currentTarget.querySelector('.book__arrow').classList.toggle('active');
  e.currentTarget.querySelector('.select__list').classList.toggle('active');
}



function hideMask(e) {
  e.currentTarget.children[1].style.display = "none";
  e.currentTarget.children[2].style.color = "inherit";
  e.target.removeEventListener('click', hideMask);

}

// customizeSelect();




// Event listeners
dateContainer.addEventListener('click', hideMask);
// timeContainer.addEventListener('click', hideMask);

// selectList.addEventListener("click", pickOption);

selectType.addEventListener('click', (e) => {
  document.querySelector('.select__name_dispay').innerText = e.target.innerText;
})
selectTime.addEventListener('click', (e) => {
  document.querySelector('.select__time_display').innerText = e.target.innerText;
  let timeArr = e.target.innerText.split(':');
  overviewTime.innerText = `${timeArr[0]} : ${timeArr[1]}`;
})

document.querySelector('.book__input--select').addEventListener("click", toggleSelect);
document.querySelector('.book__input--time').addEventListener("click", toggleSelect);


dateInput.addEventListener('input', e => {
  let today = new Date();
  let date = dateInput.valueAsDate;
  overviewDate.innerText = `${new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)}, ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date)} ${date.getDate()}`;
  if (today.getDate() > date.getDate() && today.getMonth() >= date.getMonth()) {
    dateInput.parentElement.classList.add('invalid');
  } else dateInput.parentElement.classList.remove('invalid');
})

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const quoteBtn = document.querySelector(".change-quote");
async function getQuote(lang='en') {
  if (lang == 'en') {
    const url = "https://favqs.com/api/qotd";
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    return new Promise(resolve => {
      resolve(data);
    })
  }
}
function printQuote(data) {
  quote.textContent = data.quote.body;
  author.textContent = data.quote.author;
}

async function printOnResponse() {
  const data = await getQuote();
  printQuote(data);
}
printOnResponse();

quoteBtn.onclick =  function () {
  printOnResponse();
  quoteBtn.disabled = true;
  setTimeout(function () {
    quoteBtn.disabled = false;
  }, 1000);
};
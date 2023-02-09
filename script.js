function myFunction() {
  document.getElementById("myList").style.listStyle = "decimal";
}

const infoEl = document.getElementsByClassName("info")[0];
infoEl.classList.add("hide");

//infoEl.classList.add("hide");

const liElement = document.querySelector("li");
const liElements = document.querySelectorAll("li");

console.log(liElement);
console.log(liElements);
console.log(liElements[0]);

const bodyEl = document.querySelector("body");
const bodyStyles = window.getComputedStyle(bodyEl);
const bodyMargin = bodyStyles.getPropertyValue("margin");
let bodyMarginValue = parseInt(bodyMargin);
let isReverse = false;

setInterval(() => {
  if (isReverse) {
    bodyMarginValue--;
  } else {
    bodyMarginValue++;
  }

  if (bodyMarginValue === 300) {
    isReverse = true;
  }

  if (bodyMarginValue === 0) {
    isReverse = false;
  }

  bodyEl.style.margin = bodyMarginValue + "px";
}, 100);

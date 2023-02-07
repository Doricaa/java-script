const descriptionEl = document.querySelector(".description");
const footerEl = document.querySelector("#footer");
const ulEl = document.querySelector("ul");

const h1 = document.createElement("h1");
h1.innerText = "Zbilja smo jako smo pametni!";
descriptionEl.parentNode.prepend(h1);

const infoDiv = document.createElement("div");
infoDiv.classList.add("info");
footerEl.parentNode.insertBefore(infoDiv, footerEl);

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  ulEl.appendChild(li);
}

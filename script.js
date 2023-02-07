const descriptionEl = document.querySelector("description");

const h1 = document.createElement("h1");
h1.innerText = "Zbilja smo jako pametni";

const infoDiv = document.createElement("div");
infoDiv.classList.add("info");
footerEl.parentNode.insertBefore(infoDiv, footerEl);

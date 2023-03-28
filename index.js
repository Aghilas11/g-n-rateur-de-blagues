// https://api.blablagues.net/?rub=blagues
const header = document.getElementById("header");
const jock = document.getElementById("content");
const body = document.querySelector("body");

function getJock() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      header.textContent = data.data.content.text_head;
      jock.textContent =
        data.data.content.text !== "" // si il y'a oas de dontenu dans text
          ? data.data.content.text // tu m'affiche ca
          : data.data.content.text_hidden; // sinon tu m'affiche ca
    });
}

getJock();

body.addEventListener("click", getJock);

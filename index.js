function onHover(event) {
  const element = event.srcElement;
  setRndCords(element);
}

function onClick(event) {
  displayMessage(event.srcElement);
}

function setRndCords(element) {
  const perentWidth = element.parentElement.clientWidth;
  const perentHigh = element.parentElement.clientHeight;

  const x = Math.random() * perentWidth;
  const y = Math.random() * perentHigh;

  element.style.position = "absolute";
  element.style.left = x + "px";
  element.style.top = y + "px";
}

function displayMessage(element) {
  const parent = element.parentElement;
  const gif = document.createElement("img");
  gif.src = "./88149b0400750578f4d07d9bc3fb0fee.gif";

  parent.replaceWith(gif);

  runCongrats();
}

function createWord() {
  const wordElement = document.createElement("div");
  wordElement.classList.add("word");
  wordElement.textContent = "Ура!";

  wordElement.style.left = Math.random() * window.innerWidth + "px";

  document.body.appendChild(wordElement);

  setTimeout(() => {
    wordElement.remove();
  }, 5000);
}

function createImage() {
  const img = document.createElement("img");
  img.src = "./pngtree-penis-icon-masculine-moving-pixel-png-image_5164900.png";
  img.classList.add("image");

  img.style.left = Math.random() * window.innerWidth + "px";

  document.body.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 5000);
}

function runSad() {
  setInterval(createImage, 500);
}

function runCongrats() {
  setInterval(createWord, 100);
}

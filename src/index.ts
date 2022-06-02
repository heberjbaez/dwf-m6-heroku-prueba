const container = document.querySelector(".root");

fetch("/env")
  .then((res) => res.json())
  .then((data) => (container.textContent = JSON.stringify(data)));

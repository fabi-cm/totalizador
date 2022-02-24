const cantidad_item = document.querySelector("#cantidad-item");
const form = document.querySelector("#totalizador-form");
const div_cantidad_item = document.querySelector("#cantidad-item-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div_cantidad_item.innerHTML = "<p> Cantidad de item:" + cantidad_item.value + "</p>";
});

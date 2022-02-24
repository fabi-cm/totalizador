const cantidad_item = document.querySelector("#cantidad-item");
const form = document.querySelector("#totalizador-form");
const div_cantidad_item = document.querySelector("#cantidad-item-div");

const precio_item = document.querySelector("#precio-item");
const div_precio_item = document.querySelector("#precio-item-div");

const codigo_estado = document.querySelector("#codigo-estado");
const div_codigo_estado = document.querySelector("#codigo-item-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div_cantidad_item.innerHTML = "<p> Cantidad de item: " + cantidad_item.value + "</p>";
  div_precio_item.innerHTML = "<p> Precio de item: " + precio_item.value + "</p>";
  div_codigo_estado.innerHTML = "<p> Codigo del Estado: " + codigo_estado.value + "</p>";
});
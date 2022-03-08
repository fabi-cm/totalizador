// import porcentaje_estado from './impuesto';

const form = document.querySelector("#totalizador-form");

const cantidad_item = document.querySelector("#cantidad-item");
const div_cantidad_item = document.querySelector("#cantidad-item-div");

const precio_item = document.querySelector("#precio-item");
const div_precio_item = document.querySelector("#precio-item-div");

const codigo_estado = document.querySelector("#codigo-estado");
const div_codigo_estado = document.querySelector("#codigo-item-div"); 

const div_precio_neto = document.querySelector("#precio-neto-div");
const div_descuento = document.querySelector("#precio-descuento-div");

const div_total = document.querySelector("#precio-total-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();
   
  var precio_neto = precio_item.value * cantidad_item.value;
  div_cantidad_item.innerHTML = "<p> Cantidad de item: " + cantidad_item.value + "</p>";
  div_precio_item.innerHTML = "<p> Precio de item: " + precio_item.value + "</p>";
  div_precio_neto.innerHTML = "<p> Precio Neto: " + precio_neto + "</p>";

  var cantidad_impuesto = porcentaje_estado(codigo_estado.value)
  div_codigo_estado.innerHTML = "<p> Codigo del Estado de "+ codigo_estado.value +": " + cantidad_impuesto + "%</p>";

  var cantidad_descuento = Descuento(cantidad_item.value);
  div_descuento.innerHTML = "<p> Porcentaje de Descuento: "+ cantidad_descuento + "%</p>";

  div_total.innerHTML = "<p> Total: " + PrecioTotal(precio_neto, cantidad_impuesto, cantidad_descuento) + "</p>";

});


function porcentaje_estado(estado) {
  switch(estado){
    case 'UT': return 6.65;break;
    case 'NV': return 8;break;
    case 'TX': return 6.25;break;
    case 'AL': return 4; break;
    case 'CA': return 8.25;break;
  }
}

function Descuento(cantidad) {
  if (cantidad < 1000) {
    return 0;
  }else if ((cantidad => 1000) && (cantidad < 3000)) {
    return 3;
  }else if ((cantidad => 3000) && (cantidad < 7000)) {
    return 5;
  }else if ((cantidad => 7000) && (cantidad < 10000)) {
    return 7;
  }else if ((cantidad => 10000) && (cantidad < 30000)) {
    return 10;
  }else if (cantidad => 30000) {
    return 15;
  }
}

function PrecioTotal(neto, imp, des){
  var total = 0;

  if (des != 0){
    var cantDes = (neto * des)/100;
    total = neto - cantDes;
  }else{
    total = neto;
  }
  cantImp = (neto * imp)/100;
  total = neto + cantImp;

  return total;
} 

function PrecioTotal(neto, imp, des) {
  var total = 0;
  var cantDes = 0;
  var cantImp = 0;

  if (des == 0) {
    total = neto;
  }else{
    cantDes = (neto * des)/100;
    total = neto - cantDes;
  }
  cantImp = (total * imp)/100;
  total = total + cantImp;

  return total;
}
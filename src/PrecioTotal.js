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

// console.log(PrecioTotal(60,6.25,7));
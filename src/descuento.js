function Descuento(cantidad) {
    if (cantidad < 1000) {
        return 0;
    }
    if ((cantidad) => 1000 && cantidad < 3000) {
        return 3;
    }
    if ((cantidad) => 3000 && cantidad < 7000) {
        return 5;
    }
    if ((cantidad) => 7000 && cantidad < 10000) {
        return 7;
    }
    if ((cantidad) => 10000 && cantidad < 30000) {
        return 10;
    }
    if ((cantidad) => 30000) {
        return 15;
    }
}

// console.log(Descuento(2000));

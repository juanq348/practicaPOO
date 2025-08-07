String.prototype.concatenarPalabra = function(palabra){
        return `${this} ${palabra}`;
}

const primero = "Hola";
const segundo = primero.concatenarPalabra("soy Juan Q");

console.log(segundo);
class CuentaBancaria{
    #saldo;

    constructor (titular, saldoInicial){
        this.titular = titular;
        this.#saldo = saldoInicial >= 0 ? saldoInicial : 0;
    }

    get saldo(){
        return this.#saldo;
    }

    set saldo(nuevoSaldo){
        if (nuevoSaldo >= 0){
            this.#saldo = nuevoSaldo;
        }else{
            console.log("El saldo no puede ser negativo");
        }
    }

    depositar(monto) {
        if (monto > 0){
            this.#saldo += monto;    
            console.log("Dinero depositado con éxito")
        } else {
            console.log("Debe ser mayor a 0");
        }
    }

    extraer(monto) {
        if(monto <= this.#saldo){
            this.#saldo -= monto;
        } else {
            console.log("Fondos insuficientes");
        }
    }

    consultarSaldo(){
        console.log(`Saldo actual: $${this.#saldo}`);
    }
}

const cuenta = new CuentaBancaria("Juan q", 1000);

console.log(cuenta.saldo);
cuenta.saldo = 5000;
console.log(cuenta.saldo);

cuenta.saldo = -1000;
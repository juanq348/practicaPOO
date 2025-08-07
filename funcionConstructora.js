function CuentaBancaria(titular, saldoInicial){
    this.titular = titular;
    this.saldo = saldoInicial;
}

CuentaBancaria.prototype.depositar = function(monto){
    this.saldo += monto;
    console.log(`Dinero depositado con éxito`)
}

CuentaBancaria.prototype.extraer = function(monto){
    if(monto <= this.saldo){
        this.saldo -= monto;
        console.log(`Dinero retirado con éxito`)
    }else{
        console.log("Saldo insuficiente");
    }   
}

CuentaBancaria.prototype.consultarSaldo = function(){
    console.log(`Saldo actual: $${this.saldo}`);
}

const cuenta = new CuentaBancaria("Juan q", 5000);
cuenta.consultarSaldo();
cuenta.depositar(4000);
cuenta.consultarSaldo();
cuenta.extraer(7000);
cuenta.consultarSaldo();
cuenta.extraer(10000);
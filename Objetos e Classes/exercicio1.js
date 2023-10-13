class Carro{
    marca;
    cor;
    gastoMedioKm;   

    //marca, cor e gastomedio sao atributos do carro

    constructor(marca, cor, gastoMedioKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;      
    }

    calcularValor(distancia, preco){        
        return (distancia/this.gastoMedioKm)*preco;           
    }
}

const uno = new Carro('Fiat', 'Azul', 10);

const corsa = new Carro('Chevrolet', 'Branco', 15);
 
console.log(uno.calcularValor(170, 5.57));
console.log(corsa.calcularValor(170, 5.57));


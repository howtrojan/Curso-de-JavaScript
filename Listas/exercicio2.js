let numeros = [];

for (let index = 1; index <= 100; index++) {    
    numero = numeros.push(index);
    
    if (numero % 2 === 0){
        console.log(numero);        
    }    
}
console.log(numeros);

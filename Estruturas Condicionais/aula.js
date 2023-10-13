const numero = 10;

const numeroPar = (numero % 2) === 0;

if(numero === 0){
    console.log('O Numero é inválido');
}else if  ((numero % 2) === 0){
    console.log(numero);
}else {    
    console.log('Não é par');
}



function calcularjuros(valor , juros){
    let vFinal = (valor + ((valor/100) * juros));
    return vFinal;
}


function main(){
 console.log('Programa principal');
 console.log(calcularjuros(100, 40));
}

main();
/*
Faça um programa para calcular o valor de uma viagem.

Voce terá 5 variaveis. Sendo elas:
1 - Preço do Etanol;
2 - Preço da Gasolina;
3 - O Tipo do combustivel que está no seu carro;
4 - Gasto médiode combustível do carro por KM;
5 - Distancia por KM da Viagem;

Imprima no console o valor que será gasto para realizar essa viagem
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = ('Etanol');
const consumoPorLitro = 8;
const distanciaViagem = 100;

let valorGastoParaViagem;

if (tipoCombustivel === ('Gasolina')) {
    valorGastoParaViagem = (distanciaViagem / consumoPorLitro) * precoGasolina;
    console.log('O valor gasto para viajar foi de RS', valorGastoParaViagem.toFixed(2));
} else {
    valorGastoParaViagem = (distanciaViagem / consumoPorLitro) * precoEtanol;
    console.log('O valor gasto para viajar foi de RS', valorGastoParaViagem.toFixed(2));
}




/* 
Faça um programa para calcular o valor de uma viagem

Voce tera 3 variaveis. Sendo elas de uma viagem
1- Preço do combustivel
2- Gasto medio de combustivel do carro por KM.
3- Distancia de Km de viagem;

*/

const precoCombustivel = 5.79; /*Preço do combustivel */
const gastoPorkm = 1; /*gasto por km do carro */
const distanciaKm = 100; /*Distancia da Viagem*/

let viagem = ((distanciaKm/gastoPorkm)*precoCombustivel);

console.log('O valor em Reais gasto nessa viagem foi de R$',viagem.toFixed(2));
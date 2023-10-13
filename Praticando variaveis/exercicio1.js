/*1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

let nota1 = 10;
let nota2 = 4;
let nota3 = 8;

let media = (nota1 + nota2 + nota3) / 3;
console.log('A media foi',media.toFixed(1));

if (media < 5) {
    console.log('Aluno reprovado. A nota foi inferior a 5');
} else if (media >= 5 && media <= 7) {
    console.log('Aluno em recuperação. A nota ficou entre 5 e 7');
} else{
    console.log('Aluno aprovado. A nota foi maior que 7');
}
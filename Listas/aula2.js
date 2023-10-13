const notas = [];
let nota = 0;

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);



notas.length; // mostra o tamanho da lista

for (let cont = 0; cont < notas.length; cont++) {    
    nota = nota + notas[cont];  
}



console.log(nota / notas.length);
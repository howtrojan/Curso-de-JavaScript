class Pessoa {
    nome;
    idade;
}

let andre = new Pessoa();
andre.nome = 'André';
andre.idade = 31;

let diever = new Pessoa();
diever.nome = 'Diever';
diever.idade = 26;

function compararPessoa(p1,p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome} `);
        }else if(p2.idade > p1.idade){
            console.log(`${p2.nome} é mais velho que ${p1.nome} `);
        }else{
            console.log(`${p2.nome} e ${p1.nome} tem a mesma idade`);
        }
}

compararPessoa(andre, diever);
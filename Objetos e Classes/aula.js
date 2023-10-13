class Pessoa{
    nome;
    sobrenome;
    idade;

    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    descrever(){
        console.log(`O nome é ${this.nome} e meu sobrenome é ${this.sobrenome}`)
    }
}

//classe é a definição do que deve ser o objeto
//instancia é a ocorrencia do objeto

const kleber = new Pessoa();

const andre = new Pessoa();
andre.nome = 'André';
andre.sobrenome = 'Braga';
andre.idade = 31;

const diever = new Pessoa();
diever.nome = 'Diever';
diever.sobrenome = 'Caldeira';
diever.idade = 26;

console.log(andre);
console.log(diever);

andre.descrever();
diever.descrever();
kleber.descrever();






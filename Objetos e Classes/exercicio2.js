class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularimc(){
         return this.peso/(this.altura*this.altura);         
    }
}

//funcao dentro da classe sao metodos
//atributos sao as caracteristicas de uma classe
//instancia é quando eu faço uma nova coisa da minha classe
//construtor é tudo que eu quero obrigatorio, forma que eu entendi.

function classificarIMC(imc){
    if (imc < 18.5){
        return ('Abaixo do peso');
    }
    else if ((imc > 18.5) && (imc < 25)){
        return ('Peso Normal');
    }
    else if ((imc > 25) && (imc < 30)){
        return ('Acima do peso');
    }
    else if ((imc > 30) && (imc < 40)){
        return ('Obeso');
    }else{ return ('Obesidade Grave');}
}

const andre = new Pessoa('André', 70, 1.84);
const diever = new Pessoa('Diever', 130, 1.65);
const jose = new Pessoa('Jose', 70, 1.75);

console.log(andre.nome,'tem o IMC de ', andre.calcularimc());
console.log(classificarIMC(andre.calcularimc()));
console.log(diever.nome,'tem o IMC de ', diever.calcularimc());
console.log(classificarIMC(diever.calcularimc()));
console.log(jose.nome,'tem o IMC de ', jose.calcularimc());
console.log(classificarIMC(jose.calcularimc()));


function gets(){
    let nota1 = 5;
    let nota2 = 1;
    let nota3 = 0;
    media = (nota1 + nota2 + nota3) / 3;
    return media;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};
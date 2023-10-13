const { gets, print } = require('./funcoes-auxiliares');

media = gets();
if (media < 5) {
    print('Reprovado');
} else if (media >= 5 && media < 7) {
    print('Recuperação');
} else if (media >= 7) {
    print('Aprovado');
} 
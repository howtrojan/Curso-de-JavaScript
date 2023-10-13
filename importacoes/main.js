const { gets , print } =  require('./funcoes-auxiliares');


let qualMaiorPar = [];
let maiorPar = 0;

for (let index = 0; index < 6; index++) {
    qualMaiorPar = gets();
    if ( (qualMaiorPar > maiorPar) && qualMaiorPar % 0 ){
        maiorPar = qualMaiorPar ;
    }
         
}


print(maiorPar);





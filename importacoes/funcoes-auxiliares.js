


function gets (entradas , beneficio){
    if (entradas >= 0 && entradas <= 1100){
        entradas = entradas - (entradas * 0.5);
        entradas = entradas + beneficio;
        return entradas;
    }else if (entradas >1100 && entradas <= 2500){
        entradas = entradas - (entradas * 0.10);
        entradas = entradas + beneficio;
        return entradas;
    }else if (entradas >2500 && entradas <= 15000){
        entradas = entradas - (entradas * 0.15);
        entradas = entradas + beneficio;
        return entradas;
    }       
}

function print (texto){
    console.log(texto);
}

module.exports = {gets,print};
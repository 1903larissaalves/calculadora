
function valores(valor) {
    
    document.getElementById("resultado").value += valor;
}

function calculo() {
    let digitado = document.getElementById("resultado").value;
    
    let posicaoSimbolo = digitado.indexOf('%');
    if(posicaoSimbolo >= 0){
        porcento();
    }else{
        let converteNumero = eval(digitado);
        document.getElementById("resultado").value = converteNumero;
    }
}

function apaga() {
    document.getElementById("resultado").value = "";
}

function porcento() {
    let digitado = document.getElementById("resultado").value;

    let posicaoSimbolo = digitado.indexOf('-');

    if(posicaoSimbolo < 0){
        posicaoSimbolo = digitado.indexOf('+');
    }
    if (posicaoSimbolo < 0) {
        posicaoSimbolo = digitado.indexOf('/');
    }
    if (posicaoSimbolo < 0) {
        posicaoSimbolo = digitado.indexOf('*');
    }

    let valorAntesSinal = digitado.substring(0, posicaoSimbolo);
    let porcento = digitado.length -1   ;
    let valorDepoisSinal = digitado.substring(posicaoSimbolo +1, porcento);
    let resultado = eval((valorDepoisSinal * 100)/ valorAntesSinal);
    let resultadoFinal = resultado / 100;
    let result = eval(valorAntesSinal) + eval(digitado.substring(posicaoSimbolo, 1)) + eval(resultadoFinal);

    document.getElementById("resultado").value = result;
}

function mensagemEscondida(){
    console.log("Não tem nada ai");
}


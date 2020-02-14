
function obterTeclaDigitada(valor) {

    document.getElementById("resultado").value += valor;
}

function calcularResultado() {
    let digitado = document.getElementById("resultado").value;

    if (operacaoPorcentagem(digitado)) {
        calculoPorcentagem(digitado);
    } else {
        calculoNormal(digitado);
    }
}

function operacaoPorcentagem(digitado) {
    let posicaoSimbolo = digitado.indexOf('%');
    if (posicaoSimbolo >= 0) {
        return true;
    } else {
        return false;
    }
    // return (posicaoSimbolo >= 0); 
}

function calculoNormal(digitado) {
    let resultadoCalculo = eval(digitado);
    if (resultadoCalculo == Infinity) {
        document.getElementById("resultado").value = "Não é possível fazer divisão por 0"
    } else {
        document.getElementById("resultado").value = resultadoCalculo;
    }
}

function limparCampo() {
    document.getElementById("resultado").value = "";
}

function encontrarPosicaoSimbolo(digitado) {
    let posicaoSimbolo = digitado.indexOf('-');

    if (posicaoSimbolo < 0) {
        posicaoSimbolo = digitado.indexOf('+');
    }
    if (posicaoSimbolo < 0) {
        posicaoSimbolo = digitado.indexOf('/');
    }
    if (posicaoSimbolo < 0) {
        posicaoSimbolo = digitado.indexOf('*');
    }
    return posicaoSimbolo;
}


function calculoPorcentagem(digitado) {

    let posicaoSimbolo = encontrarPosicaoSimbolo(digitado);

    let valorAntesSinal = digitado.substring(0, posicaoSimbolo);
    let posicaoPorcento = digitado.length - 1;
    let valorDepoisSinal = (digitado.substring(posicaoSimbolo + 1, posicaoPorcento));
    let multi = valorAntesSinal * valorDepoisSinal;
    let divisao = multi / 100;

    obterResultado(posicaoSimbolo, digitado, valorAntesSinal, divisao)
}


function obterResultado(posicaoSimbolo, digitado, valorAntesSinal, divisao) {

    let result;
    if (posicaoSimbolo == digitado.indexOf('+')) {
        result = eval(valorAntesSinal) + eval(divisao);
    }
    if (posicaoSimbolo == digitado.indexOf('-')) {
        result = eval(valorAntesSinal) - eval(divisao);
    }

    document.getElementById("resultado").value = result;
}

function mensagemEscondida() {
    console.log("Não tem nada ai");
}


atual = document.querySelector(".atual");
conta = document.querySelector(".conta");

function number(n) {
    numero = atual.innerHTML;
    atual.innerHTML = numero + n;
}

function operator(n) {
    conta.innerHTML = atual.innerHTML + " =";
    let resultado = eval(atual.innerHTML);
    atual.innerHTML = resultado + n;
}

function cleanAll() {
    atual.innerHTML = "";
    conta.innerHTML = "";
}

function clean() {
    
}

function backspace() {
    let resultado = atual.innerHTML;
    atual.innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    conta.innerHTML = atual.innerHTML + " =";
    let resultado = eval(atual.innerHTML);
    atual.innerHTML = resultado;
}
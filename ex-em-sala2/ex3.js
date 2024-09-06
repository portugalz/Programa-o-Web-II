// adicionar a média dos números, a quantidade de números digitados, e um botão para limpar
const btAdic = document.getElementById("btAdic");
const inputNumero = document.getElementById("inputNumero");
const inputSoma = document.getElementById("inputSoma");
let somatorio = 0;

btAdic.onclick = () => {
    let numero = parseInt(inputNumero.value);
    if (isNaN(numero)) {
        alert("Por favor, digite um número inteiro.");
        return;
    }
    somatorio += numero;
    inputSoma.value = somatorio;
    inputNumero.value = "";
    inputNumero.focus(); 
};
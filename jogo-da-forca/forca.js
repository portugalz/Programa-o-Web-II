const palavras = ["javascript", "programacao", "web", "forca", "computador"];
let palavra = "";
let letrasAdvinhadas = [];
let erros = 0;
const maxErros = 6;
const alfabeto = "abcdefghijklmnopqrstuvwxyz";

function iniciarJogo() {
    palavra = palavras[Math.floor(Math.random() * palavras.length)];
    letrasAdvinhadas = Array(palavra.length).fill("_");
    erros = 0;
    atualizarDisplay();
    criarBotoesAlfabeto();
    document.getElementById('wrongGuesses').textContent = erros;
    limparBoneco();
}

function criarBotoesAlfabeto() {
    const alphabetButtons = document.getElementById('alphabetButtons');
    alphabetButtons.innerHTML = '';

    for (let i = 0; i < alfabeto.length; i++) {
        const letra = alfabeto[i];
        const button = document.createElement('button');
        button.textContent = letra;
        button.onclick = () => tentarLetra(letra);
        alphabetButtons.appendChild(button);
    }
}

function tentarLetra(letra) {
    if (palavra.includes(letra)) {
        for (let i = 0; i < palavra.length; i++) {
            if (palavra[i] === letra) {
                letrasAdvinhadas[i] = letra;
            }
        }
    } else {
        erros++;
        document.getElementById('wrongGuesses').textContent = erros;
        desenharBoneco(erros);
    }
    atualizarDisplay();
    verificarFimDeJogo();
}

function atualizarDisplay() {
    document.getElementById('wordDisplay').textContent = letrasAdvinhadas.join(" ");
}

function desenharBoneco(erro) {
    const bonecoPartes = document.querySelectorAll('#hangman div');
    if (erro <= maxErros) {
        bonecoPartes[erro - 1].style.display = 'block';
    }
}

function limparBoneco() {
    const bonecoPartes = document.querySelectorAll('#hangman div');
    bonecoPartes.forEach(parte => parte.style.display = 'none');
}

function verificarFimDeJogo() {
    if (!letrasAdvinhadas.includes("_")) {
        alert("Parabéns, você venceu!");
        resetGame();
    } else if (erros >= maxErros) {
        alert(`Você perdeu! A palavra era "${palavra}".`);
        resetGame();
    }
}

function resetGame() {
    iniciarJogo();
}

window.onload = iniciarJogo;

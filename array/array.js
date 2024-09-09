// Vetor para armazenar os valores
const valores = [];

// Referências aos elementos do DOM
const inputValor = document.getElementById('inputValor');
const btnAdicionar = document.getElementById('btnAdicionar');
const valoresInseridos = document.getElementById('valoresInseridos');
const mediaValores = document.getElementById('mediaValores');

// Função para atualizar a exibição dos valores e da média
function atualizarExibicao() {
    // Exibir valores
    if (valores.length > 0) {
        valoresInseridos.textContent = valores.join(', ');
    } else {
        valoresInseridos.textContent = 'Nenhum valor adicionado ainda.';
    }

    // Calcular e exibir a média
    if (valores.length > 0) {
        const soma = valores.reduce((a, b) => a + b, 0);
        const media = soma / valores.length;
        mediaValores.textContent = media.toFixed(2);
    } else {
        mediaValores.textContent = 'Nenhuma média calculada ainda.';
    }
}

// Adicionar valor ao vetor ao clicar no botão
btnAdicionar.addEventListener('click', () => {
    const valor = parseFloat(inputValor.value);

    if (!isNaN(valor)) {
        valores.push(valor);
        inputValor.value = ''; // Limpar o input
        atualizarExibicao(); // Atualizar a exibição
    } else {
        alert('Por favor, insira um número válido.');
    }
});

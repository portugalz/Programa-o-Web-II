const valores = [];

const inputValor = document.getElementById('inputValor');
const btnAdicionar = document.getElementById('btnAdicionar');
const valoresInseridos = document.getElementById('valoresInseridos');
const mediaValores = document.getElementById('mediaValores');


function atualizarExibicao() {
    // Exibir valores
    if (valores.length > 0) {
        valoresInseridos.textContent = valores.join(', ');
    } else {
        valoresInseridos.textContent = 'Nenhum valor adicionado ainda.';
    }

 
    if (valores.length > 0) {
        const soma = valores.reduce((a, b) => a + b, 0);
        const media = soma / valores.length;
        mediaValores.textContent = media.toFixed(2);
    } else {
        mediaValores.textContent = 'Nenhuma média calculada ainda.';
    }
}


btnAdicionar.addEventListener('click', () => {
    const valor = parseFloat(inputValor.value);

    if (!isNaN(valor)) {
        valores.push(valor);
        inputValor.value = ''; 
        atualizarExibicao(); 
    } else {
        alert('Por favor, insira um número válido.');
    }
});

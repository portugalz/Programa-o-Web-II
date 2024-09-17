function separarPalavra() {
    const palavra = document.getElementById('wordInput').value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; 

    for (let i = 0; i < palavra.length; i++) {
        const letraDiv = document.createElement('div');
        letraDiv.classList.add('letter-box');
        letraDiv.textContent = palavra[i];
        outputDiv.appendChild(letraDiv);
    }
}

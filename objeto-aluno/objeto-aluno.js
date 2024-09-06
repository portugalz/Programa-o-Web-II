function transformarEmJSON() {
    const mat = document.getElementById('mat').value;
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cpf = document.getElementById('cpf').value;

    if (!mat || !nome || !idade || !cpf) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!Number.isInteger(Number(idade)) || idade <= 0) {
        alert('A idade deve ser um número inteiro válido.');
        return;
    }


    const aluno = {
        mat: mat,
        nome: nome,
        idade: parseInt(idade),
        cpf: cpf
    };

    
    document.getElementById('resultado').textContent = JSON.stringify(aluno, null, 4);
}

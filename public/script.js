document.getElementById('entrevistaForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;
    
    if (senha !== confirmaSenha) {
        document.getElementById('mensagem').textContent = 'As senhas não coincidem!';
        document.getElementById('mensagem').classList.add('error');
        return;
    }

    const dados = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        cargo: document.getElementById('cargo').value,
        senha: senha
    };

    try {
        const response = await fetch('http://localhost:3000/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados)
        });

        if (response.ok) {
            document.getElementById('mensagem').textContent = 'Cadastro enviado com sucesso!';
            document.getElementById('mensagem').classList.remove('error');
            this.reset();
        } else {
            document.getElementById('mensagem').textContent = 'Erro ao enviar cadastro!';
            document.getElementById('mensagem').classList.add('error');
        }
    } catch (error) {
        console.error('Erro:', error);
        document.getElementById('mensagem').textContent = 'Erro na conexão com o servidor!';
        document.getElementById('mensagem').classList.add('error');
    }
});

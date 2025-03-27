const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Configurar pasta para arquivos estáticos
app.use(express.static('public'));

// Rota para receber os dados do formulário
app.post('/cadastro', (req, res) => {
    const { nome, email, telefone, cargo, senha } = req.body;
    
    // Exibir os dados no terminal
    console.log('Novo Cadastro Recebido:');
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
    console.log('Cargo:', cargo);
    console.log('Senha:', senha);
    console.log('------------------------');
    
    res.status(200).send('Cadastro recebido com sucesso');
});

// Iniciar o servidor
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://0.0.0.0:${port}`);
    console.log(`Acesse localmente em: http://localhost:${port}`);
    console.log(`Acesse na rede local em: http://<seu-ip-local>:${port}`);
});

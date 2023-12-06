var loginButton = document.getElementById('buttonLogin');
var emailInput = document.querySelector('input[type="email"]');
var passwordInput = document.querySelector('input[type="password"]');
var registerButton = document.getElementById('registerLink');


document.addEventListener('DOMContentLoaded', function() {
    if (registerButton) {
        registerButton.addEventListener('click', function() {
            window.location.href = '/pages/register/index.html';
        });
    }
});

async function fazerLogin(){
    var email = emailInput.value;
    var password = passwordInput.value;
    if (email === '' || password === '') {
        console.log('Preencha todos os campos.');
        return;
    }
    var dados = {
        email: email,
        password: password
    };
    var url = 'http://localhost:8495/auth/signin';
    try {
        var resposta = await fazerRequisicaoPost(url, dados);
        if (!resposta.token) {
            console.log('Erro na resposta da requisição:', resposta);
            return;
        }
        window.location.href = '/pages/home/index.html';
    } catch (error) {
        console.error('Erro no processamento da resposta:', error);
    }
}

async function fazerRequisicaoPost(url, dados) {
    const configuracao = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
    };

    try {
        const response = await fetch(url, configuracao);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        const resposta = await response.json();
        return resposta;
    } catch (error) {
        console.error('Erro na requisição:', error.message);
        throw error;
    }
}
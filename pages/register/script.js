var loginButton = document.getElementById('loginLink');
var emailInput = document.querySelector('input[type="email"]');
var passwordInput = document.querySelector('input[type="password"]');
var usernameInput = document.querySelector('input[type="text"]');
var birthDateInput = document.querySelector('input[type="date"]');
var buttonRegister = document.querySelector('#buttonRegister');

function pageLogin(){
    window.location.href = '/pages/login/index.html';
}

async function createUser() {
    var url = 'http://localhost:8494/api/users/create';
    var dados = {
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        birthDate: new Date(birthDateInput.value)
    };
    fazerRequisicaoPost(url, dados)
        .then(function(resposta) {
            console.log('Resposta:', resposta);
            window.location.href = '/pages/login/index.html';
        })  
        .catch(function(error) {
            console.error('Erro na requisição:', error);
        });
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

let produtos = [
    { id: 1, nome: "Geladeira", preco: 1800 },
    { id: 2, nome: "Televisão 50\"", preco: 2200 },
    { id: 3, nome: "Sofá 3 lugares", preco: 1200 },
    { id: 4, nome: "Microondas", preco: 450 },
    { id: 5, nome: "Cama Box", preco: 900 }
];
let carrinho = [];
let clientes = [];
let logado = null;

function renderProdutos() {
    const div = document.querySelector(".lista-produtos");
    div.innerHTML = "";
    produtos.forEach(p => {
        div.innerHTML += `<div class="produto">
            <h3>${p.nome}</h3>
            <p>R$ ${p.preco}</p>
            <button onclick="addCarrinho(${p.id})">Adicionar</button>
        </div>`;
    });
}
function addCarrinho(id) {
    let prod = produtos.find(p => p.id === id);
    carrinho.push(prod);
    renderCarrinho();
}
function renderCarrinho() {
    const ul = document.getElementById("lista-carrinho");
    ul.innerHTML = "";
    carrinho.forEach((p, i) => {
        ul.innerHTML += `<li>${p.nome} - R$ ${p.preco} <button onclick="removeCarrinho(${i})">Remover</button></li>`;
    });
}
function removeCarrinho(index) {
    carrinho.splice(index, 1);
    renderCarrinho();
}
function finalizarCompra() {
    if (logado) {
        alert("Compra finalizada! Obrigado, " + logado.nome);
        carrinho = [];
        renderCarrinho();
    } else {
        alert("Faça login ou cadastre-se para finalizar a compra!");
    }
}
document.getElementById("form-cadastro").onsubmit = function(e) {
    e.preventDefault();
    const nome = document.getElementById("cad-nome").value;
    const email = document.getElementById("cad-email").value;
    const senha = document.getElementById("cad-senha").value;
    clientes.push({ nome, email, senha });
    alert("Cliente cadastrado com sucesso!");
}
document.getElementById("form-login").onsubmit = function(e) {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const senha = document.getElementById("login-senha").value;
    const cliente = clientes.find(c => c.email === email && c.senha === senha);
    if (cliente) {
        logado = cliente;
        alert("Login realizado! Bem-vindo, " + cliente.nome);
    } else {
        alert("Usuário ou senha incorretos!");
    }
}
renderProdutos();
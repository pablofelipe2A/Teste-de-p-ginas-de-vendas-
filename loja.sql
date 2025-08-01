CREATE TABLE produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco REAL NOT NULL
);

CREATE TABLE clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    senha TEXT NOT NULL
);

CREATE TABLE pedidos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cliente_id INTEGER,
    data_pedido DATE NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE pedidos_produtos (
    pedido_id INTEGER,
    produto_id INTEGER,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

CREATE TABLE vendas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    produto_id INTEGER,
    quantidade INTEGER,
    data_venda DATE,
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- Exemplos de dados
INSERT INTO produtos (nome, preco) VALUES ('Geladeira', 1800);
INSERT INTO produtos (nome, preco) VALUES ('Televisão 50"', 2200);
INSERT INTO produtos (nome, preco) VALUES ('Sofá 3 lugares', 1200);
INSERT INTO produtos (nome, preco) VALUES ('Microondas', 450);
INSERT INTO produtos (nome, preco) VALUES ('Cama Box', 900);

INSERT INTO clientes (nome, email, senha) VALUES ('João', 'joao@email.com', '123456');
INSERT INTO clientes (nome, email, senha) VALUES ('Maria', 'maria@email.com', 'senha123');

INSERT INTO vendas (produto_id, quantidade, data_venda) VALUES (1, 2, '2025-08-01');
INSERT INTO vendas (produto_id, quantidade, data_venda) VALUES (2, 1, '2025-08-01');
INSERT INTO vendas (produto_id, quantidade, data_venda) VALUES (3, 1, '2025-08-01');
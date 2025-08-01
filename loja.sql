CREATE TABLE produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco REAL NOT NULL
);

CREATE TABLE vendas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    produto_id INTEGER,
    quantidade INTEGER,
    data_venda DATE,
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- Exemplos de inserção
INSERT INTO produtos (nome, preco) VALUES ('Geladeira', 1800);
INSERT INTO produtos (nome, preco) VALUES ('Televisão 50"', 2200);
INSERT INTO produtos (nome, preco) VALUES ('Sofá 3 lugares', 1200);

INSERT INTO vendas (produto_id, quantidade, data_venda) VALUES (1, 2, '2025-08-01');
INSERT INTO vendas (produto_id, quantidade, data_venda) VALUES (2, 1, '2025-08-01');
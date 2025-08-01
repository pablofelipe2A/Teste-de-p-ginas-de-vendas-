import sqlite3

# Conecta ao banco de dados
conn = sqlite3.connect('loja.db')
cursor = conn.cursor()

# Consulta vendas por produto
cursor.execute("""
    SELECT produtos.nome, SUM(vendas.quantidade) as total_vendido
    FROM vendas
    JOIN produtos ON vendas.produto_id = produtos.id
    GROUP BY produtos.nome
""")

for row in cursor.fetchall():
    print(f"Produto: {row[0]}, Total Vendido: {row[1]}")

conn.close()
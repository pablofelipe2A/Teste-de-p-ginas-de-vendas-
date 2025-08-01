import sqlite3
import pandas as pd

conn = sqlite3.connect('loja.db')
vendas = pd.read_sql_query("""
    SELECT produtos.nome, SUM(vendas.quantidade) as total_vendido
    FROM vendas
    JOIN produtos ON vendas.produto_id = produtos.id
    GROUP BY produtos.nome
""", conn)
print("Relatório de vendas por produto:")
print(vendas)
conn.close()
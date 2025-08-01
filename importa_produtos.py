import sqlite3
import pandas as pd

df = pd.read_csv('produtos.csv')
conn = sqlite3.connect('loja.db')

for _, row in df.iterrows():
    conn.execute(
        "INSERT INTO produtos (nome, preco) VALUES (?, ?)",
        (row['nome'], row['preco'])
    )
conn.commit()
conn.close()
print("Produtos importados com sucesso!")
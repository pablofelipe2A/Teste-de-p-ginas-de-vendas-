import sqlite3
import pandas as pd

conn = sqlite3.connect('loja.db')
clientes = pd.read_sql_query("SELECT * FROM clientes", conn)
clientes.to_csv('clientes_exportados.csv', index=False)
conn.close()
print("Clientes exportados!")
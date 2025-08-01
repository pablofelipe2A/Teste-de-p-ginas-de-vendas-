import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
public class LojaController {
    private List<Produto> produtos = new ArrayList<>();
    private List<Cliente> clientes = new ArrayList<>();
    private List<Pedido> pedidos = new ArrayList<>();

    public LojaController() {
        produtos.add(new Produto(1, "Geladeira", 1800));
        produtos.add(new Produto(2, "Televisão 50\"", 2200));
        produtos.add(new Produto(3, "Sofá 3 lugares", 1200));
        produtos.add(new Produto(4, "Microondas", 450));
        produtos.add(new Produto(5, "Cama Box", 900));
    }

    @GetMapping("/produtos")
    public List<Produto> listarProdutos() {
        return produtos;
    }

    @PostMapping("/clientes")
    public Cliente cadastrarCliente(@RequestBody Cliente cliente) {
        cliente.setId(clientes.size() + 1);
        clientes.add(cliente);
        return cliente;
    }

    @PostMapping("/login")
    public Cliente login(@RequestBody Cliente credenciais) {
        for (Cliente c : clientes) {
            if (c.getEmail().equals(credenciais.getEmail()) && c.getSenha().equals(credenciais.getSenha())) {
                return c;
            }
        }
        return null;
    }

    @PostMapping("/pedidos")
    public Pedido criarPedido(@RequestBody Pedido pedido) {
        pedido.setId(pedidos.size() + 1);
        pedidos.add(pedido);
        return pedido;
    }

    @GetMapping("/pedidos")
    public List<Pedido> listarPedidos() {
        return pedidos;
    }
}

class Produto {
    private int id;
    private String nome;
    private double preco;
    // getters e setters
    public Produto(int id, String nome, double preco) { this.id = id; this.nome = nome; this.preco = preco; }
    public int getId() { return id; } public void setId(int id) { this.id = id; }
    public String getNome() { return nome; } public void setNome(String nome) { this.nome = nome; }
    public double getPreco() { return preco; } public void setPreco(double preco) { this.preco = preco; }
}

class Cliente {
    private int id;
    private String nome;
    private String email;
    private String senha;
    // getters e setters
    public int getId() { return id; } public void setId(int id) { this.id = id; }
    public String getNome() { return nome; } public void setNome(String nome) { this.nome = nome; }
    public String getEmail() { return email; } public void setEmail(String email) { this.email = email; }
    public String getSenha() { return senha; } public void setSenha(String senha) { this.senha = senha; }
}

class Pedido {
    private int id;
    private int clienteId;
    private List<Integer> produtosIds;
    private Date dataPedido;
    // getters e setters
    public int getId() { return id; } public void setId(int id) { this.id = id; }
    public int getClienteId() { return clienteId; } public void setClienteId(int clienteId) { this.clienteId = clienteId; }
    public List<Integer> getProdutosIds() { return produtosIds; } public void setProdutosIds(List<Integer> produtosIds) { this.produtosIds = produtosIds; }
    public Date getDataPedido() { return dataPedido; } public void setDataPedido(Date dataPedido) { this.dataPedido = dataPedido; }
}
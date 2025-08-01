import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {
    private List<Produto> produtos = new ArrayList<>();

    public ProdutoController() {
        produtos.add(new Produto(1, "Geladeira", 1800));
        produtos.add(new Produto(2, "Televisão 50\"", 2200));
        produtos.add(new Produto(3, "Sofá 3 lugares", 1200));
    }

    @GetMapping
    public List<Produto> getProdutos() {
        return produtos;
    }

    @PostMapping
    public Produto addProduto(@RequestBody Produto produto) {
        produto.setId(produtos.size() + 1);
        produtos.add(produto);
        return produto;
    }
}

class Produto {
    private int id;
    private String nome;
    private double preco;

    public Produto(int id, String nome, double preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    // Getters e Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public double getPreco() { return preco; }
    public void setPreco(double preco) { this.preco = preco; }
}
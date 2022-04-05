class Produto {    
    nome;
    preco;
    emEstoque;
    quantidade;

    constructor (nome, preco, emEstoque, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    };
};

class Pedido{
    numeroPedido;
    dataPedido = new Date().toLocaleDateString()
    estaPago = false
    listaProduto = [];
    nomeCliente;

    constructor (numeroPedido, nomeCliente) {
        this.numeroPedido = numeroPedido;        
        this.nomeCliente = nomeCliente;
    };

    adicionaProduto(produto) {
        if(produto instanceof Produto){
         this.listaProduto.push(produto);
        }
    }
    calcularTotal () {
        let valorTotal = 0
        this.listaProduto.forEach(produto => {
            valorTotal += produto.quantidade * produto.preco;
        });
        
        return valorTotal;
    }
}
let bola = new Produto("Bola", 30, true, 2);
let chuteira = new Produto("Chuteira", 300, true, 1);
let camiseta = new Produto("Camiseta", 50, false, 1);
let meiao = new Produto("Meiao", 5, true, 1);
let tenis = new Produto("Tenis", 200, true, 2);

let cliente1 = new Pedido(20220001, "Benicio");
let cliente2 = new Pedido(20220002, "Alice");

cliente1.adicionaProduto(bola);
cliente1.adicionaProduto(camiseta);
cliente1.adicionaProduto(chuteira);
cliente2.adicionaProduto(tenis);
cliente2.adicionaProduto(meiao);


cliente1.listaProduto.forEach(produto => {
    console.log(`Produto: ${produto.nome} | Valor un: R$${produto.preco} | Qtde do Pedido: ${produto.quantidade} | Total: R$${produto.preco*produto.quantidade} `);
})


cliente2.listaProduto.forEach(produto => {
    console.log(`Produto: ${produto.nome} | Valor un: R$${produto.preco} | Total: R$${produto.preco * produto.quantidade} `);
})

console.log(`Preço total do Pedido do ${cliente1.nomeCliente}: R$${cliente1.calcularTotal()}`);

console.log(`Preço total do Pedido do ${cliente2.nomeCliente}: R$${cliente2.calcularTotal()}`);

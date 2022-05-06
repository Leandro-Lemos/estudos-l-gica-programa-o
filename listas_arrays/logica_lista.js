/*Essa é a classe produto com as caracteristicas e métodos/funções ligadas a ela */
class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = []; // criada uma array vazia
    }


    salvar() {
        let produto = this.lerDados(); //método de leitura ao clicar no botão inserido dentro da varável let produto
        
        if (this.validaCampos(produto)==true) {//para chamar a função passando o produto, por padrão considerar ( se validaCampos for verdadeiro true )
            this.adicionar(produto); // se validou o campo chama o método adicionar
        }
        console.log(this.arrayProdutos);
    }

    adicionar(produto) {//metodo que é chamado ao validar e salvar
        this.arrayProdutos.push(produto); //adicionar elemento produto dentro do array vazio
        this.id++; //incrementa o id a cada salvar
    }
    
    lerDados() {
        let produto = {}

        produto.id = this.id; // cria a propriedade id
        produto.nomeProduto = document.getElementById('campoNomeProduto').value; // produto.NomeProduto está criando o atributo do objeto e capturando dado do input
        produto.valorProduto = document.getElementById('campoValorProduto').value;
        produto.quantidadeProduto = document.getElementById('campoQuantidadeProduto').value;

        return produto;
    }

   validaCampos(produto) {// objeto produto entra como parametro na função
        let msg = ''; // para controlar as msg na tela (inicia vazia)
        if(produto.nomeProduto == ''){
            msg += ' - Informe o nome do Produto \n'; // mensagem + ela mesmo (+=) recebe a string
        }
        if(produto.valorProduto == ''){
            msg += ' - Informe o valor do Produto \n'; // mensagem + ela mesmo (+=) recebe a string
        }

        if(produto.quantidadeProduto == ''){
            msg += ' - Informe a quantidade do Produto \n'; // mensagem + ela mesmo (+=) recebe a string
        }

        if (msg != '') {
            alert(msg);
            return false;
        }
        return true; // se não cair em nenhuma das validações, ou seja msg permaneceu vazia como no começo. 

    }

    excluir() {
        alert('excluiu o produto');
    }  
}

var produto = new Produto(); /* váriavel para criar um novo produto e que é passada no evento onclick para acessar a classe produto*/
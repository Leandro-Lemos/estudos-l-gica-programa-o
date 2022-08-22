
//copiar cep botão
function copiarTexto() {
    let textoCopiado = document.getElementById("texto");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");

}



const cep = document.querySelector("#cep")

// capturando dados do objeto para inserir nos campos do form 

const showData = (result) => {
    // para cada elemento armazena em variável campo
    for (const campo in result) {
        // se existe concatena com campo, se não ignora
        if (document.querySelector("#" + campo)) {
            //preencher o campo do form
            document.querySelector("#" + campo).value = result[campo]
        }
    }
}



cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "")
    //constantes de acesso a url
    const options = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        //isso é uma promisse assincrona, se der certo .then 
        .then((response) => {
            response.json()
                .then(data => showData(data))

        })

        //se der erro .catch
        .catch(e => console.log("Deu erro" + e, message))


})

// funções salvar item de forma dinamica

const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
// para agregar os itens de localstorage. Consulta, converte para objeto com o parser ou retorna um array vazio se ainda não houver nada. Item chave dentro do localstorage
const arrayItens = JSON.parse(localStorage.getItem("itens")) || []

//percorrendo o array retornado como object (parse) do localstorage >> chama o cria elemento. Recebe apenas mesmo o objeto elemento
arrayItens.forEach((elemento) => {
    criaEndereco(elemento)
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    // console.log(evento)
    // variáveis que capturam dados do target
    const cep = evento.target.elements['cep']
    const logradouro = evento.target.elements['logradouro']
    const bairro = evento.target.elements['bairro']
    const localidade = evento.target.elements['localidade']
    const uf = evento.target.elements['uf']

    // validação se cep já existe localizando no array e identificando se é igual ao valor do input CEP
    const existeitem = arrayItens.find(elemento => elemento.cep === cep.value)
    if (existeitem) {
        alert('O cadastro já existe. Confira a lista.')
    } else {
        // criando o objeto
        //na refatoração começou a capturar o .value
        const itemAtual = {
            "cep": cep.value,
            "logradouro": logradouro.value,
            "bairro": bairro.value,
            "localidade": localidade.value,
            "uf": uf.value
        }

        //na refatoração recebe o objeto como param
        criaEndereco(itemAtual)
        // operações localStorage


        arrayItens.push(itemAtual) //inserindo dentro do array
        //JSON.stringfy transforma o objeto em texto
        localStorage.setItem("itens", JSON.stringify(arrayItens))

        this.limparCamposForm()
    }
})

function criaEndereco(item) {
    // cria o elemento li do html
    const novoItem = document.createElement('li')
    novoItem.classList.add('item', 'itemLista', 'itemLi')
    //insere um elemento dentro do elemento object para manipular
    const numCep = document.createElement('p')
    numCep.innerHTML = item.cep // elemento item na posição cep (chave)

    //  criar  id dentro de li com cep para comparar com cep localstorage
    novoItem.setAttribute("id", item.cep)

    novoItem.appendChild(numCep)
    numCep.innerHTML += " (CEP), " + item.logradouro + ", " + item.bairro + ", " + item.localidade + ", " + item.uf + "." // elemento captura da chave "bairro" do objeto

    //cria botão delete chamando a função que cria o botão
    novoItem.appendChild(botaoDeletar())

    lista.appendChild(novoItem)

}

function limparCamposForm() {

    document.getElementById('cep').value = '';
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('uf').value = '';
}

const Modal = {
    open(){
        //abrir modal
        //adicionar classe active
        document.querySelector('.modal-overlay')
        .classList.add('active')
    },
    close(){
        //fechar modal
        //remover classe active do modal
        document.querySelector('.modal-overlay')
        .classList.remove('active')
    }
} 

function botaoDeletar() {
    let imgdelete = document.createElement('img')
    imgdelete.classList.add('btndeletar')
    imgdelete.src = './imagens/deletemedia.png'
    imgdelete.width = 30
    imgdelete.height = 30
    imgdelete.setAttribute("onclick", "Modal.open()") //conferir
    imgdelete.addEventListener("click", function(){
        del= this.parentNode
        console.log (del)
        delid = del.id
        console.log(delid)
      
    })     
    return imgdelete
}

function confirmaDeletar() {
    del.remove()
    Modal.close()
    //remover item do array
    arrayItens.splice(arrayItens.findIndex(elemento => elemento.cep === delid),1)
    //escrever alteração no localstorage
    localStorage.setItem("itens", JSON.stringify(arrayItens))
}







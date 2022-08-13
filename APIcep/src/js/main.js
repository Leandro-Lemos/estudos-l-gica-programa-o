
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
    for (const campo in result){
        // se existe concatena com campo, se não ignora
        if (document.querySelector("#"+campo)){
            //preencher o campo do form
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}



cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-","")
    //constantes de acesso a url
    const options = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    //isso é uma promisse assincrona, se der certo .then 
        .then((response)=> {response.json()
            .then(data => showData(data))
    
    })

    //se der erro .catch
    .catch(e => console.log("Deu erro" + e, message))

    
} )

// funções salvar item de forma dinamica

const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const arrayItens = [] // para agregar os itens de localstorage

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
   // console.log(evento)
    // variáveis que capturam dados do target
    const cep = evento.target.elements['cep']
    const logradouro = evento.target.elements['logradouro']
    const bairro = evento.target.elements['bairro']
    const localidade = evento.target.elements['localidade']
    const uf = evento.target.elements['uf']
    //capturando dados de target> elements do console (envio form) e inserindo como param. da função
    criaEndereco(cep.value, logradouro.value, bairro.value, localidade.value, uf.value)
    this.limparCamposForm()
})

function criaEndereco (cep,logradouro,bairro,localidade,uf) {
// cria o elemento li do html
const novoItem = document.createElement('li')
novoItem.classList.add('item', 'itemLista', 'itemLi')
//insere um elemento dentro do elemento object para manipular
const numCep = document.createElement('strong')
numCep.innerHTML = cep

novoItem.appendChild(numCep)
novoItem.innerHTML += "(CEP), " + logradouro + ", " + bairro + ", " + localidade + ", " + uf + "."

lista.appendChild(novoItem)

// operações localStorage
// criando o objeto
const itemAtual = {
    "cep":cep,
    "logradouro": logradouro,
    "bairro": bairro,
    "localidade": localidade,
    "uf": uf
}
arrayItens.push(itemAtual) //inserindo dentro do array
//JSON.stringfy transforma o objeto em texto
localStorage.setItem("item", JSON.stringify(arrayItens))



}

function limparCamposForm() {

    document.getElementById('cep').value = '';
    document.getElementById('logradouro').value = ''; 
    document.getElementById('bairro').value = ''; 
    document.getElementById('localidade').value = '';
    document.getElementById('uf').value = ''; 
}  




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

// funções salvar localstorage

const form = document.getElementById("novoItem")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
   // console.log(evento)

    //capturando dados de target> elements do console (envio form) e inserindo como param. da função
    criaEndereco(evento.target.elements['cep'].value, evento.target.elements['logradouro'].value, evento.target.elements['bairro'].value, evento.target.elements['localidade'].value, evento.target.elements['uf'].value)
})

function criaEndereco (cep,logradouro,bairro,localidade,uf) {

const novoItem = document.createElement('li')
novoItem.classList.add('item', 'itemLista', 'itemLi')
//insere um elemento dentro do elemento object para manipular
const numCep = document.createElement('strong')
numCep.innerHTML = cep

novoItem.appendChild(numCep)
novoItem.innerHTML += ", " + logradouro + ", " + bairro + ", " + localidade + ", " + uf

const lista = document.getElementById("lista")
lista.appendChild(novoItem)

/* criando o novo item do li
const novoItem = document.createElement('li')
novoItem.classList.add('item')
novoItem.appendChild(cep,logradouro, bairro,localidade, uf)
novoItem.innerHTML
console.log(novoItem)

const lista = document.getElementById('lista')
lista.appendChild(novoItem) */
}
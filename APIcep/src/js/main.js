
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
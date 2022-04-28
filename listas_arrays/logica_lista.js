const listaCompras = []

function InserirProduto() {
    var nomeProduto= (document.getElementById("campoNomeProduto").value);
    var agregarProdutoLista = listaCompras.push(nomeProduto);
}

function imprimirLista() {
var listaCompleta= document.getElementById("listaCompleta");
    listaCompleta.innerHTML = "O resultado é" + listaCompras;
}








function ConverterArea() {
    var valorMetros = parseFloat(document.getElementById("valor").value);
    var valorAlqueires = Math.floor(valorMetros / 24200);
    var valorLitros = (valorMetros % 24200)/605;
    var valorHectare = valorMetros/10000;
    
    var resultadoAlqueire = document.getElementById("valorConvertidoAlqueire");
    var resultadoLitros = document.getElementById("valorConvertidoLitros");
    var resultadoConversão = " O resultado de " + "<br>"+ valorMetros + " m² é " + valorAlqueires + " alqueires e " + valorLitros.toFixed(1) + " litros ou " + valorHectare.toFixed(2) + " hectares";
    if (valorAlqueires >= 1) {
    resultadoAlqueire.innerHTML = resultadoConversão}
    else {
        resultadoAlqueire.innerHTML= "O resultado de " + valorMetros + " m² é " + valorLitros.toFixed(2) + " litros ou " + valorHectare.toFixed(2) + " hectares"
    }

 
}
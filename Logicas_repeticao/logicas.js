function Converter() {
    var valorMetros = parseFloat(document.getElementById("valor").value);
    var valorAlqueires = Math.floor(valorMetros / 24200);
    var valorLitros = (valorMetros % 24200)/605;
    
    var resultadoAlqueire = document.getElementById("valorConvertidoAlqueire");
    var resultadoLitros = document.getElementById("valorConvertidoLitros");
    var resultadoConversão = " O resultado de " + "<br>"+ valorMetros + " m² é " + valorAlqueires + " alqueire e " + valorLitros.toFixed(1) + " litros";
    if (valorAlqueires >= 1) {
    resultadoAlqueire.innerHTML = resultadoConversão}
    else {
        resultadoAlqueire.innerHTML= "O resultado de " + valorMetros + " m² é " + valorLitros.toFixed(2) + " litros"
    }

 
}
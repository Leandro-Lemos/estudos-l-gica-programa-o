function Converter() {
    var valorMetros = parseFloat(document.getElementById("valor").value);
    var valorAlqueires = valorMetros / 24200;
    var valorLitros = valorMetros / 605;
    var resultadoAlqueire = document.getElementById("valorConvertidoalqueire");
    var resultadoConversão = " O resultado de " + "<br>"+ valorMetros + " m² em alqueire é " + valorAlqueires.toFixed(3);
    resultadoAlqueire.innerHTML = resultadoConversão


}
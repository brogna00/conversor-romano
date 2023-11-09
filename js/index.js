import romanoParaDecimal from "./conversor-romano.js";
import decimalParaRomano from "./conversor-decimal.js";

let romano = document.getElementById("romano-id")
let decimal = document.getElementById("decimal-id")


let btnConverteRomano = document.getElementById("btn-converter-romano")
let btnConverteDecimal = document.getElementById("btn-converter-decimal")


function exibeNumeroDecimal(){
    romanoParaDecimal(romano.value);

}

function exibeNumeroRomano(){
    decimalParaRomano(decimal.value)

}

btnConverteDecimal.addEventListener("click", exibeNumeroRomano);

btnConverteRomano.addEventListener("click", exibeNumeroDecimal)



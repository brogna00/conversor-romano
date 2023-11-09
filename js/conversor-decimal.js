export default function decimalParaRomano(numero) {
    let resultadoDecimal = document.getElementById("resultado-decimal")
    let resultado = '';
    let divisao = 0;
    let resto = numero;
    let vetorNumeros = [1000,500,100,50,10];
    let vetorRomanos = ['M','D','C','L','X'];
    let vetorDezena = ['I','II','III','IV','V','VI','VII','VIII','IX'];

    for (let i = 0; i < vetorNumeros.length; i++) {
        divisao = parseInt(resto/vetorNumeros[i]);
        resto = numero % vetorNumeros[i];
        if (divisao > 0) {
            for (let x = 0; x < divisao; x++) {
                resultado = resultado + vetorRomanos[i];
            }
        } else if (resto < 10) {
            if (vetorDezena[resto-1] !== undefined) {
                resultado = resultado + vetorDezena[resto-1];
            }
            break;
        }
    }
    if(numero >= 4000){
        resultadoDecimal.value = "Erro: Número maior que o permitido";
    }else{
        resultadoDecimal.value = resultado;

    }
  }
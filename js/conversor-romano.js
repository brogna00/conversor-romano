export default function romanoParaDecimal(numero) {
    let resultadoRomano = document.getElementById("resultado-romano")
    let resultado = 0;
    let ln = null;
    let algarismos = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000 }
    numero = numero.toUpperCase();
    for (let i = numero.length-1; i >= 0; i--) {
        let char = numero.charAt(i);
        for (let chave in algarismos) {
            if( char === chave){
                let nc = parseInt(algarismos[chave]);
                if (ln !== null) {
                    if (nc < ln) {
                        nc = nc*-1;
                    }
                }
                resultado = resultado + nc;
                ln = nc;
            }
        }
    }
    if(resultado >= 4000){
        resultadoRomano.value = "Erro: Número maior que o permitido"

    }else{
        resultadoRomano.value = resultado;

        
    }


} 

// Fazendo a tabuada

let multiplicador = 7
let n = 10
let i = 1

while (i <= n) {
    let resultadoTabuada = multiplicador * i
    let textoDeExibicao = `${multiplicador} X ${i} = ${resultadoTabuada}`
    console.log (textoDeExibicao)
    i++
}
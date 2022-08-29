//Dada essa situação, ele contratou você para criar um programa que, ao receber o mapa de um produto, verifica se ele é nacional ou internacional e aplica 20% de impostos caso seja de outro país e 12% caso seja brasileiro. Uma vez aplicado o imposto, o programa imprime na tela o valor total do produto.

let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true}
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};


if (produtoA.internacional == true ) {
    let valorImpostos = produtoA.valor*1.2
    console.log ("Camiseta internacional")
    console.log(valorImpostos)
} else {
    let valorImpostos = produtoA.valor * 1.12
    console.log("Camiseta nacional")
    console.log(valorImpostos)

}
if (produtoB.internacional == true) {
    let valorImpostos = produtoB.valor*1.2
    console.log ("Perfume internacional")
    console.log(valorImpostos)
}else {
    let valorImpostos = produtoB.valor * 1.12
    console.log ("Perfume nacional")
    console.log(valorImpostos)   
}

if (produtoC.internacional == true) {
    let valorImpostos = produtoC.valor*1.2
    console.log("Sandália internacional")
    console.log(valorImpostos)
}else {
    let valorImpostos = produtoC.valor * 1.12
    console.log("Sandália nacional")
    console.log(valorImpostos)   
}
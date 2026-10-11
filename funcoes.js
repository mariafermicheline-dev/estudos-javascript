function darBomDia(nome){
    console.log("Bom Dia", nome)
} // definir a função

//nome é um parâmetro

darBomDia("Maria") //chamando a função

function somar (numero1, numero2){
    return(numero1+numero2)
}
let resultado = somar(1,5)
console.log(resultado)

function calculadora(numA, numB, op){
    switch(op){
        case '+':
            return numA+numB
        case '-':
            return numA-numB
        case '*':
            return numA*numB
        case '/':
            return numA/numB
        default:
            console.log("Operador inválido")
            return
    }
}
let result = calculadora(12,5,'-')
console.log(result)
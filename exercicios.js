const usuario = {
    nome: "maria",
    idade: 20,
    email: 'maria@gmail.com'
}
//console.log(usuario)

//rest
function somar(...numeros){
let total = 0 
numeros.forEach(numero => total += numero)
return total

}
let total = somar(1,2,3,4,5)
console.log(total)

//spread expandir/espalhar
/*const numeros = [1,2,3]
const numeros2 =[4,5,6]
const soma = [...numeros, ...numeros2]
console.log(soma)*/

//rest
function somar(...numeros){
let total = 0 
numeros.forEach(numero => total += numero)
return total

}
let total = somar(1,2,3,4,5)
console.log(total)
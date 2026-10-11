const numeros = [1,2,3,4,5,6,7,8]

 for (const numero of numeros) {
    //console.log(numero)
 }

const produto = {
    nome: 'Notebook',
    preco: 1500,
    temEstoque: true,
    marca: 'Lenovo'
}

for (const propriedade in produto){
    console.log(propriedade,  produto[propriedade])
    
}
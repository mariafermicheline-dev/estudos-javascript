// const numeros = [1,2,3,4,5]
// //numeros.forEach(() => {
//   //  console.log(elemento)

// //})

// const arrayDob = numeros.map((elemento) => {
//     return elemento*2

// })

// const arrayFilter = numeros.filter((elemento)=>{
//     return elemento % 2 === 0
// })

// const pesquisa = numeros.find((elemento)=>{
//     return elemento === 3
// })

// const some = numeros.some((elemento)=>{
//     return elemento === 2
// })

// const every = numeros.every((elemento)=>{
//     return elemento === 1
// })

// =>DESAFIO:
const produtos = [
    {nome: 'Notebook', preco: 3000},
    {nome: 'Teclado', preco: 100},
    {nome: 'Mouse', preco: 49},
    {nome: 'Monitor', preco: 800}
]

const produtoMenos50 = produtos.filter((produto) =>{
    return produto.preco < 500
})

const novaLista = produtos.map((produto)=>{
    return{
        ...produto,
        nome: produto.nome.toUpperCase()
    }
})
novaLista.forEach((produto)=>{
    console.log(`Nome: ${produto.nome},Preço: R$ ${produto.preco}`)
})

const custaMaisDe100 = produto.every((produto)=>{
    return produto.preco > 100
})





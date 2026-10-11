const pessoa={
    nome:  'maria',
    idade: 20,
    cidade: 'Uberlândia'
}

function apresentar({nome,idade}){
    console.log(`
        Meu nome é ${nome} e tenho ${idade} anos
        `)
}

apresentar(pessoa)

function somarEMulti(a,b){
    return[a+b,a*b]
}

const [soma, multi] = somarEMulti(4,5)
console.log(soma,multi)

/*const {idade: anos} = pessoa
console.log(anos)

const numeros =[1,2,3,4,5]
const [,segundo,terceiro] = numeros
console.log(segundo,terceiro)*/

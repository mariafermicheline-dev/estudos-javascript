class Animal {
    constructor(nome){
        this.nome = nome
    }

    comer(){
        console.log(`${this.nome} esta comendo` )
    }
}


class Gato extends Animal{
    constructor(nome,cor){
        super(nome)
        this.cor = cor

    }

    miar(){
        console.log(`${this.nome}, que é da cor ${this.cor}, esta miando`)
    }

    comer() {
        console.log(`O gatinho ${this.nome} esta comendo`)
    }
}

const gato = new Gato('Garfield','laranja')

gato.comer()
gato.miar()

class Cachorro extends Animal{
    latir(){
        console.log('Auau')
    }
}

const cachorro = new Cachorro('San')
cachorro.comer()
cachorro.latir()


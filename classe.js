class Pessoa{
    constructor(nome,idade, profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }

    falar(){
     console.log(`Ola meu nome é ${this.nome}`)

    }

    apresentacao(){
        console.log(`
            Nome: ${this.nome},
            Idade: ${this.idade},
            Profissao: ${this.profissao}
            `)
    }

    aniversario(){
        this.idade += 1
        console.log(`${this.nome} fez aniversario, e agora tem ${this.idade} anos`)
    }
}

const pessoa1 = new Pessoa("Joao", 15, "Jornalismo")
const pessoa2 = new Pessoa("Maria", 20, "Dev Web")
const pessoa3 = new Pessoa("Maysa", 19, "Medica")

pessoa1.apresentacao()
pessoa2.apresentacao()
pessoa3.apresentacao()

pessoa1.aniversario()

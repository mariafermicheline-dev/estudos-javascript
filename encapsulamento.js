class Cofre{
//encapsuamento
#senha
#saldo
    constructor (senha){
        this.#senha = senha

        this.#saldo = 0
    }

    #validarSenha(senha){
        return senha === this.#senha
    }

     verSaldo(senha) {
            if(this.#validarSenha(senha)){
                console.log(`O Saldo do cofre:R$ ${this.#saldo}`)
            }
            else{
                console.log('Senha invalida!')
            }
        }

    depositar(senha, valor){
        if(this.#validarSenha(senha)){
            this.#saldo += valor
        }
        
        else{
                console.log('Senha invalida!')
            }

    }

    sacar(senha, valor){
        if(this.#validarSenha(senha)){
            if (valor > this.#saldo){
                console.log('O valor a ser retirado é maior que o saldo!')
            }
            else{
                this.#saldo -= valor
                console.log(`${valor} foi retirada, saldo restante: R$ ${this.#saldo} `)
            }
        }

        else{
            console.log('Senha invalida!')
        }
    }

}

const cofre = new Cofre('12345')
cofre.depositar('12345', 1000)
cofre.verSaldo('12345')
cofre.sacar('12345', 900)
cofre.verSaldo('12345')


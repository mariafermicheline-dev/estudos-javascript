const pessoa = {
    nome: "João",
    idade: 15,
    hobbies:["Vôlei", "Escutar música"],
    endereco: {
        rua: "Mario zara",
    numero: 230},
    
    apresentar(){
        console.log(this.nome, this.idade,this.endereco)
 }

}

pessoa.apresentar()
//console.log(pessoa)
//console.log(pessoa.nome)
//console.log(pessoa.idade)

//function imprimirPessoa(pessoa){
    //console.log(`Olá meu nome é ${pessoa.nome} e eu moro na ${pessoa.rua}`)
//}
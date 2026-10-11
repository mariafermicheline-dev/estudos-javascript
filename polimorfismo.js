class Instrumento {
    tocar(){
        console.log("Tocando um som generico")
    }
}

class Violao extends Instrumento{
    tocar(){
        console.log("tocando som de violao")
    }
}

class Piano extends Instrumento{
    tocar(){
        console.log("som de piano")
    }
}

class Violino extends Instrumento{
    tocar(){
        console.log("som de violino")
    }
}

const instrumentos =[new Violao(), new Piano(), new Violino()]
for(const instrumento of instrumentos){
    instrumento.tocar()
}
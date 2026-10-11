function dizerOi(callback){
    console.log("Olá")
    callback()
}

    dizerOi(() =>{
        console.log("Olá eu sou a callback")
    })

setInterval(() =>{
    console.log('Estou executando')
}, 100)
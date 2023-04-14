var artista1= {
    nome: "Michael Jackson",
    anoDoPrimeiroDIsco: 1972,
    umaPlayListDasMelhoresMusicas: ["Bad", "Thriller", "Dangerous"],
    integrantes:    
        [
         nomeCompleto = "Michael Joseph Jackson",
         paisesDeorigem = "EUA",
         idade = 50
        ],
    estiloDeMusica:"POP",
}

var artista2= {
    nome:"Elvis Presley",
    anoDoPrimeiroDIsco:1956,
    umaPlayListDasMelhoresMusicas: ["Rock'N' Rock", "Elvis Now", "Elvis live"],
    integrantes:[
            nomeCompleto = "Elvis Aaron Presley",
            paisesDeorigem = "EUA",
            idade = 42
        ],
    estiloDeMusica:"Rock",
}

var artista3= {
    nome:"Nirvana",
    anoDoPrimeiroDIsco:1971 ,
    umaPlayListDasMelhoresMusicas: ["Nevermind", "Bleach", "Ultra rare Trax"],
    integrantes:
        [
            {
            nomeCompleto: "Kurt Donald Cobain",
            paisesDeorigem: "EUA",
            idade: 27
        },
        {
            nomeCompleto: "Krist Anthony Novoselic ",
            paisesDeorigem: "EUA",
            idade: 27
        },
        {
            nomeCompleto: "David Eric Grohl",
            paisesDeorigem: "EUA",
            idade: 27
        },
        {
            nomeCompleto: "Aaron Burckhard",
            paisesDeorigem: "EUA",
            idade: 27
        },
        {
            nomeCompleto: "Georg Albert Ruthenberg",
            paisesDeorigem: "EUA",
            idade: 27
        },
        ],
    estiloDeMusica:"Rock",
}

var dataBase = []
dataBase.push(artista1)
dataBase.push(artista2)
dataBase.push(artista3)
console.log(dataBase)

dataBase.sort()
console.log(dataBase)
dataBase.pop()
console.log(dataBase)
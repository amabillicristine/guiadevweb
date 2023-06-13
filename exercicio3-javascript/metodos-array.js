let abelhas = [{
    nome: "Abelha Europeia",
    nativa: false,
    tipo: "Operária",
    id: 1,
},
{
    nome: "Abelha Asiática",
    nativa: false,
    tipo: "Rainha",
    id: 2,
},
{
    nome: "Abelha Gigante",
    nativa: false,
    tipo: "Operária",
    id: 3,
},
{
    nome: "Jataí",
    nativa: true,
    tipo: "Rainha",
    id: 4,
},
{
    nome: "Jandaíra",
    nativa: true,
    tipo: "Zangão",
    id: 5,
},
{
    nome: "Mandaguari",
    nativa: true,
    tipo: "Operária",
    id: 6,
}
]
{
    //3.0 map()
    let somaId = abelhas.map(function (abelhas){
        return abelhas.id + 1;
    })
    console.log("3.0: ", somaId)
}
{
    //3.1 arrow funcion
    
    let somaId= abelhas.map((abelhas) =>{
        return abelhas.id + 1;
    })

    console.log("3.1: ", somaId)
}

{
    //3.2
    let abelhasNat = abelhas.filter((abelhas) =>{
        if (abelhas.nativa == true);
        return abelhas.nativa;
    })
    console.log("3.2: ", abelhasNat)
}

{
    //3.3
    let abelhasReduce = abelhas.reduce((acumulador, abelhas) => {
        return acumulador + abelhas.id;
    }, 0)
    console.log("3.3: ", abelhasReduce)
}

{
    //3.4
    let maiorqzero = abelhas.every((abelhas) => abelhas.id > 0)
    console.log("3.4: ", maiorqzero)
}

{
    //3.5
    let abelhazangao = abelhas.some((abelhas) => abelhas.tipo == "Zangão")
    console.log("3.5: ", abelhazangao)
}

{
    //3.6
    let abelhafind = abelhas.find((abelhas) => abelhas.nativa == true)// retorna apenas o primeiro elemento que atende a condição e depois interrompe a iteração
    console.log("3.6: ", abelhafind)
}

{
    //3.7
    let abelhaschange = abelhas.filter((abelhas) => abelhas.nativa == true
    )

    abelhaschange.map((abelhas) => {
        abelhas.tipo = "Operaria";
    })
    console.log("3.7: ", abelhaschange)
}

{
    //3.8
    let abelhasduplas = abelhas.map((abelhas) => {
        return abelhas.id * 2;
    })
     
    let somaAbelhas = abelhasduplas.reduce((acumulador, abelhasduplas) => {
        return acumulador + abelhasduplas;
    }, 0)
    console.log("3.8: ", somaAbelhas)
}

{
    //3.9
    let abelhasReduce = abelhas.reduce((acumulador, abelhas) => acumulador + abelhas.id, 0)
    console.log ("3.9: ", abelhasReduce)
}
// Exercicio resolvido de Destructuring retirado do repositorio no gitHub -> https://github.com/Rikezenho/exercicios-de-destructuring/tree/master/exercicios


//1 - Arrays
//1.1
{
    const produto = {
    id: 2000,
    nome: 'Sabão em pó',
    preco: 12.29,
    fotos: [
        'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
        'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg',
        'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/0673a9868ac3ac7a075c3b75bcaa62a4.jpg'
    ]
    };


    const fotos = produto.fotos;

    // com destructuring:
    // Inicie o destructuring na linha abaixo ->

    const [ ,  ,primeiroItem]= fotos;//teste com o ultimo item de fotos

    // <- Finalize o destructuring na linha acima

     console.log(primeiroItem);
}
//1.2

{        const produto = {
            id: 2000,
            nome: 'Sabão em pó',
            preco: 12.29,
            fotos: [
            'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
            'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg',
            'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/0673a9868ac3ac7a075c3b75bcaa62a4.jpg',
            'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/6fc0c00f6fda35efb901adacce47713b.jpg',
            'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/b0b032dcc2099828489f9bac38be3390.jpg',
            'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/2aa699618d4ecd3c1abe28392b736caa.jpg'
            ]
        };
        
        const fotos = produto.fotos;
        
        // Sem destructuring:
        const segundaFotoSemDestructuring = fotos[1];
        const quintaFotoSemDestructuring = fotos[4];
        
        // Inicie o destructuring na linha abaixo ->
        const [ ,segundaFoto, , ,quintaFoto ] = fotos;
        // <- Finalize o destructuring na linha acima
        
        console.log(segundaFoto);
        console.log(quintaFoto);
}
//1.3
{const produto = {
    id: 2000,
    nome: 'Sabão em pó',
    preco: 12.29,
    fotos: []
  };
  
  const fotos = produto.fotos;
  
  // Sem destructuring:
  const primeiraFotoSemDestructuring = typeof fotos[0] !== 'undefined' ? fotos[0] : 'https://via.placeholder.com/1500';
  
  // Inicie o destructuring na linha abaixo ->
  const [primeiraFoto = "https://via.placeholder.com/1500"] = fotos;
  // <- Finalize o destructuring na linha acima
  
  console.log(primeiraFoto);
}
//1.4
{const produto = {
    id: 2000,
    nome: 'Sabão em pó',
    preco: 12.29,
    fotos: [
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg',
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/0673a9868ac3ac7a075c3b75bcaa62a4.jpg',
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/6fc0c00f6fda35efb901adacce47713b.jpg'
    ]
  };
  
  const fotos = produto.fotos;
  
   //Sem destructuring:
  const fotoPrincipalSemDestructuring = fotos[0];
  const demaisFotosSemDestructuring = fotos.filter((item, index) => index > 0);
  
  // Inicie o destructuring na linha abaixo ->
  const [fotoPrincipal, ...demaisFotos] = fotos;

  // <- Finalize o destructuring na linha acima
  
  console.log('foto principal:', fotoPrincipal);
  console.log('demais fotos:');
  for (let i = 0; i < demaisFotos.length; i++) {
    console.log(demaisFotos[i]);
  }
}

//1.5
{const produto = {
    id: 2000,
    nome: 'Sabão em pó',
    preco: 12.29,
    fotos: [
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg'
    ],
    atributos: [
      'Produto Indicado',
      'Produto Novo',
      'Promoção ativa',
      'Tira-manchas',
      'Rende mais'
    ]
  };
  
  const atributos = produto.atributos;
  
  // Sem destructuring:
  const atributoPrincipalSemDestructuring = atributos[0];
  const demaisAtributosSemDestructuring = atributos.filter((item, index) => index > 1);
  
  // Inicie o destructuring na linha abaixo ->
  const [atributoPrincipal, ,...demaisAtributos]= atributos;
  // <- Finalize o destructuring na linha acima
  
  console.log('atributo principal:', atributoPrincipal);
  console.log('demais atributos:');
  for (let i = 0; i < demaisAtributos.length; i++) {
    console.log(demaisAtributos[i]);
  }
}
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //2 -Destructuring de Objetos
//2.1
{const produto = {
    id: 2000,
    nome: 'Sabão em pó',
    preco: 12.29,
    fotos: {
      fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
      fotoSecundaria: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg',
      fotoAdicional: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/0673a9868ac3ac7a075c3b75bcaa62a4.jpg'
    }
  };
  
  // Sem destructuring:
  const nomeSemDestructuring = produto.nome;
  const fotoPrincipalSemDestructuring = produto.fotos.fotoPrincipal;
  
  // Inicie o destructuring na linha abaixo ->
  const {nome, fotos: {fotoPrincipal}}= produto;

  // <- Finalize o destructuring na linha acima
  
  console.log(nome);
  console.log(fotoPrincipal);
}

//2.2
{const produto = {
    id: 2000,
    nome: 'Sabão em pó',
    preco: 12.29,
    fotos: {
      fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg'
    }
  };
  
  // Sem destructuring:
  const fotoPrincipalSemDestructuring = produto.fotos.fotoPrincipal;
  const fotoSecundariaSemDestructuring = typeof produto.fotos.fotoSecundaria !== 'undefined' ? produto.fotos.fotoSecundaria : 'https://via.placeholder.com/1500';
  const fotoVersoSemDestructuring = typeof produto.fotos.fotoVerso !== 'undefined' ? produto.fotos.fotoVerso : 'https://via.placeholder.com/1500';
  
  // Inicie o destructuring na linha abaixo ->
  const {fotos: {fotoPrincipal, fotoSecundaria = 'https://via.placeholder.com/1500', fotoVerso = 'https://via.placeholder.com/1500'}} = produto;

  // <- Finalize o destructuring na linha acima
  
  console.log(fotoPrincipal);
  console.log(fotoSecundaria);
  console.log(fotoVerso);
}

//2.3

{const primeiroProduto = {
    nome: 'Sabão em pó OMO',
    fotos: {
      fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg'
    }
  };
  
  const segundoProduto = {
    nome: 'Sabão líquido ARIEL',
    fotos: {
      fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-liquido-ariel-hipoalergenico-suave-e-gentil-concentrado-2l/magazineluiza/225520500/62cf97beee48b9453835dcc55e6f1a5d.jpg'
    }
  };
  
  // Sem destructuring:
  const fotoDoPrimeiroProdutoSemDestructuring = primeiroProduto.fotos.fotoPrincipal;
  const fotoDoSegundoProdutoSemDestructuring = segundoProduto.fotos.fotoPrincipal;
  
  // Inicie o destructuring na linha abaixo ->
  const {fotos: {fotoPrincipal: fotoDoPrimeiroProduto}}= primeiroProduto;
  const {fotos: {fotoPrincipal: fotoDoSegundoProduto}}= segundoProduto;
  // <- Finalize o destructuring na linha acima
  
  console.log(fotoDoPrimeiroProduto);
  console.log(fotoDoSegundoProduto);
}

//2.4

{const produto = {
    id: 2000,
    nome: 'Sabão em pó',
    preco: 12.29,
    fotos: {
      fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg'
    },
    atributos: {
      produtoNovo: false,
      produtoIndicado: true,
      emPromocao: true,
      compre1Leve2: true
    }
  };
  
  // Sem destructuring:
  const produtoIndicadoSemDestructuring = produto.atributos.produtoIndicado;
  const atributosAdicionaisSemDestructuring = Object.keys(produto.atributos).reduce((acc, currKey) => {
    if (currKey === 'produtoIndicado') {
      return acc;
    }
    
    acc[currKey] = produto.atributos[currKey];
    return acc;
  }, {});
  
  // Inicie o destructuring na linha abaixo ->
  const {atributos: {produtoIndicado, ...atributosAdicionais}}= produto;
  // <- Finalize o destructuring na linha acima
  
  console.log(produtoIndicado);
  console.log(atributosAdicionais);
}
//2.5
{const primeiroProduto = {
    nome: 'Sabão em pó OMO',
    fotos: {
      fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
      fotoSecundaria: 'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg'
    },
    atributos: {
      produtoNovo: false,
      produtoIndicado: true,
      emPromocao: true,
      compre1Leve2: true
    }
  };
  
  const segundoProduto = {
    nome: 'Sabão líquido ARIEL',
    fotos: {
      fotoPrincipal: 'https://a-static.mlcdn.com.br/1500x1500/sabao-liquido-ariel-hipoalergenico-suave-e-gentil-concentrado-2l/magazineluiza/225520500/62cf97beee48b9453835dcc55e6f1a5d.jpg'
    },
    atributos: {
      produtoNovo: true,
      produtoIndicado: false,
      emPromocao: false,
      compre1Leve2: false
    }
  };
  
  // Sem destructuring:
  const fotoPrimeiroProdutoSemDestructuring = primeiroProduto.fotos.fotoPrincipal;
  const fotoSecundariaPrimeiroProdutoSemDestructuring = typeof primeiroProduto.fotos.fotoSecundaria !== 'undefined'
    ? primeiroProduto.fotos.fotoSecundaria
    : 'https://via.placeholder.com/1500';
  const produtoIndicadoPrimeiroProdutoSemDestructuring = primeiroProduto.atributos.produtoIndicado;
  const atributosAdicionaisPrimeiroProdutoSemDestructuring = Object.keys(primeiroProduto.atributos).reduce((acc, currKey) => {
      if (currKey === 'produtoIndicado') {
        return acc;
      }
      
      acc[currKey] = primeiroProduto.atributos[currKey];
      return acc;
    }, {});
  
  const fotoSegundoProdutoSemDestructuring = segundoProduto.fotos.fotoPrincipal;
  const fotoSecundariaSegundoProdutoSemDestructuring = typeof segundoProduto.fotos.fotoSecundaria !== 'undefined'
    ? segundoProduto.fotos.fotoSecundaria
    : 'https://via.placeholder.com/1500';
  const produtoIndicadoSegundoProdutoSemDestructuring = segundoProduto.atributos.produtoIndicado;
  const atributosAdicionaisSegundoProdutoSemDestructuring = Object.keys(segundoProduto.atributos).reduce((acc, currKey) => {
      if (currKey === 'produtoIndicado') {
        return acc;
      }
      
      acc[currKey] = segundoProduto.atributos[currKey];
      return acc;
    }, {});
  
  // Inicie o destructuring na linha abaixo ->
  const {
    fotos: {
        fotoPrincipal: fotoDoPrimeiroProduto, 
        fotoSecundaria: fotoSecundariaPrimeiroProduto
        }, 
    atributos: {
        produtoIndicado: produtoIndicadoPrimeiroProduto, 
        ...atributosAdicionaisPrimeiroProduto
        }
    } = primeiroProduto;
  const {
    fotos:{
        fotoPrincipal: fotoDoSegundoProduto, 
        fotoSecundaria: fotoSecundariaSegundoProduto = 'https://via.placeholder.com/1500'}, 
    atributos:{
        produtoIndicado: produtoIndicadoSegundoProduto, 
        ...atributosAdicionaisSegundoProduto}
    }= segundoProduto;
  // <- Finalize o destructuring na linha acima
  
  console.log('primeiro produto:');
  console.log(fotoDoPrimeiroProduto);
  console.log(fotoSecundariaPrimeiroProduto);
  console.log(produtoIndicadoPrimeiroProduto);
  console.log(atributosAdicionaisPrimeiroProduto);  
  console.log('segundo produto:');
  console.log(fotoDoSegundoProduto);
  console.log(fotoSecundariaSegundoProduto);
  console.log(produtoIndicadoSegundoProduto);
  console.log(atributosAdicionaisSegundoProduto);
}
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3 - Objetos com Arrays
//3.1
{const produtos = [
    {
      nome: 'Sabão em pó OMO',
      preco: 12.29
    },
    {
      nome: 'Sabão líquido ARIEL',
      preco: 14.50
    },
    {
      nome: 'Sabão ACE',
      preco: 13.27
    }
  ];
  
  // Sem destructuring:
  const nomePrimeiroProdutoSemDestructuring = produtos[0].nome;
  const precoPrimeiroProdutoSemDestructuring = produtos[0].preco;
  const nomeSegundoProdutoSemDestructuring = produtos[1].nome;
  const precoSegundoProdutoSemDestructuring = produtos[1].preco;
  
  // Inicie o destructuring na linha abaixo ->
    const [
        {
            nome:nomePrimeiroProduto,
            preco: precoPrimeiroProduto},
        {
            nome: nomeSegundoProduto,
            preco: precoSegundoProduto}
    ]= produtos;
  // <- Finalize o destructuring na linha acima
  
  console.log(nomePrimeiroProduto);
  console.log(precoPrimeiroProduto);
  console.log(nomeSegundoProduto);
  console.log(precoSegundoProduto);

}
//3.2
{const produto = {
    id: 2000,
    nome: 'Sabão em pó',
    preco: 12.29,
    fotos: [
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/f43bec8b2f13e0c5565b681d2d46432f.jpg',
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/c2c737e796f33585c3e9da8e7af982a5.jpg',
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/0673a9868ac3ac7a075c3b75bcaa62a4.jpg',
      'https://a-static.mlcdn.com.br/1500x1500/sabao-em-po-omo-lavagem-perfeita-concentrado-profissional-56kg/magazineluiza/224489500/0673a9868ac3ac7a075c3b75bcaa62a7.jpg'
    ]
  };
  
  // Sem destructuring:
  const nomeSemDestructuring = produto.nome;
  const primeiraFotoSemDestructuring = produto.fotos[0];
  
  // Inicie o destructuring na linha abaixo ->
  const {nome, fotos: [primeiraFoto, ...restanteFotos]} = produto;// se quiser pegar um array que não tem nome, precisa dar nome pra ele, se apenas usar [ , nomeProduto1] ele pula item 0 e impreme apenas o nomeado.
  // <- Finalize o destructuring na linha acima
  
  console.log(nome, primeiraFoto, restanteFotos);}
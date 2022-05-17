class Empresa {
    constructor(nome, avaliacao) {
        this.nome = nome;
        this.avaliacao = avaliacao;
    }
}

empresas = [];

const empresa1 = new Empresa('nubank', 10);
const empresa2 = new Empresa('inter', 7);
const empresa3 = new Empresa('meta', 3);
const empresa4 = new Empresa('google', 1);

empresas.push(empresa1);
empresas.push(empresa2);
empresas.push(empresa3);
empresas.push(empresa4);

const empresasJSON = JSON.stringify(empresas);

localStorage.setItem('dados', empresasJSON);

// ===============================================================

const p = criaElemento('p');
const divResultado = document.querySelector('.resultado');

// localstorage
const arrayJSON = localStorage.getItem('dados');
const arrayNormal = JSON.parse(arrayJSON);

// filter (array)
const menoresQueCinco = arrayNormal.filter(function(obj) {
    if(obj.avaliacao < 5) {
        return obj.nome;
    }
});

const maioresQueCinco = arrayNormal.filter(function(obj) {
    if(obj.avaliacao > 5) {
        return obj.nome;
    }
});

// iteração sobre cada objeto do array
maioresQueCinco.forEach(function(obj) {
    adicionaEmpresa(obj.nome, obj.avaliacao, 'maior que 5');
});

menoresQueCinco.forEach(function(obj) {
    adicionaEmpresa(obj.nome, obj.avaliacao, 'menor que 5');
});

// funcoes
function criaElemento(elemento) {
    return document.createElement(elemento);
}

function adicionaEmpresa(nome, avaliacao, msg) {
    p.innerText += `${nome} - Classificação[${avaliacao}] - ${msg}`;
    
    divResultado.appendChild(p);
}

// localStorage.clear()

// function limparCampos() {
//     p.innerText = '';
// }

// limparCampos()

function Pessoa(nome, idade, sexo)
{
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}

var makePessoa = function (nome, idade, sexo)
{
    return{
        construtor: makePessoa,
        nome: nome,
        idade: idade,
        sexo: sexo,
        getIdade: function ()
        {
            return this.idade;
        }
    }
}


var angelilton = new Pessoa('Angelilton', 23, 'Masc');
var roberto = makePessoa('Roberto', 28,'Masc');

var pessoaCriada = Object.create(roberto,{
    endereco: {
        value: 'rua clarindo Epifanio, 1993 - MT - Cuiaba',
        writable: true,
        configurable: true,
        enumerable: true
    }
})

console.log(roberto.getIdade());
console.log(pessoaCriada)


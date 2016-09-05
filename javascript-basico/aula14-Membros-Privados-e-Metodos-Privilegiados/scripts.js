//var pessoa = function(nome, idade, sexo)
//{
//    var nome = nome;
//    return {
//        getNome: function () 
//        {
//            return nome;
//        },         
//        setNome: function (value) 
//        {
//            nome = value;
//        },        
//        idade: idade,
//        sexo: sexo,        
//    }
//}
//
//var angelilton = pessoa('angelilton', 25, 'masc');
//angelilton.getNome = 'teste';
//
//console.log(angelilton)

//função anomina
(function()
{
    console.log('isso é uma função anomina');
})();

//passando parametros para uma função anomina
(function(value)
{
    var nome = value;
    console.log(nome)
})('Angelilton Epifanio');

//encapsulamento da função onde não consegue acessar as propriedade fora da função
var pessoa = (function(nome, idade, sexo){
    var nome = nome;
    var idade = idade;
    var sexo = sexo;
    
    var getNome = function()
        {
            return nome;
        }
    var setNome = function(value)
        {
            nome = value;
        }
    
    var access = {
        getNome: getNome,
        setNome: setNome
    }
    
    //congela o objeto 
    Object.freeze(access);
    return access;
    
    
})('Angelilton', 29, 'masc');

pessoa.setNome('marcos');
console.log(pessoa.getNome());

// 











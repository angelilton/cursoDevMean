var pessoa = (function(nome, idade, sexo){
    
    var nome = nome;
    var idade = idade;
    var sexo = sexo;
    
    var getNome = function()
    {
        return nome;
    }
    
    var getSexo = function ()
    {
        return sexo;
    }
    
    var getIdade = function()
    {
        return idade;
    }
    
    var setNome = function(value)
    {
        nome = value;
    }
    
    var setSexo = function (value)
    {
        sexo = value;
    }
    
    var setIdade = function(value)
    {
        idade = value;
    }
    
    var metodos = {
        getNome: getNome,
        getIdade: getIdade,
        getSexo: getSexo,        
        setNome: setNome,
        setIdade: setIdade,
        setSexo: setSexo
    }
    
    Object.defineProperties(metodos,{
        getNome:{
            enumerable: false
        },
        getIdade:{
            enumerable: false
        },
        getSexo:{
            enumerable: false
        },
        
        setNome:{
            enumerable: false
        },
        setIdade:{
            enumerable: false
        },
        setSexo:{
            enumerable: false
        }
                            
    });
    
    Object.freeze(metodos);
    
    return metodos;
    
})('angelo', 28,'masc');

for(propriedade in pessoa)
    {
        console.log(propriedade);
    }

console.log(pessoa.getSexo());
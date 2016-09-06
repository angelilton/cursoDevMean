//jeitos de filtrar itens de um array avançado

var carros = ['vectra','gol','centra'];

//devolve um variavel 
var resultado = carros.filter(
    function(value){
        return value == 'gol';    
    });

console.log(resultado);

//confirma se é true or false
var result = carros.some(
    function(valor){
        return valor == 'gol5';
    });

console.log(result);

//devolve um string
var resul2 = carros.find(
    function(valor){
        return valor == 'gol';
    });

console.log(resul2);

var numeros = [10,15,20];

//função que percore o array e soma os numero
var soma = numeros.reduce(
    function(total,numero){
        return total + numero;
    });

console.log(soma);
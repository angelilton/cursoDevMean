var carros = ['vectra','gol','centra'];

//recome o ultimo item do array
//carros.pop()

//enseri item no final do array
carros.push('l200');

//remove o primeiro item do array
carros.shift();

//enseri item no inicio do array
carros.unshift('uno');

//trazer só o dados dessa posisão
//var carros = carros.splice(1,1);

//para remover item por id 1 ou varios
carros.splice(1,1);

//console.log(carros);

var getCarro = function(posiscao, qtd){
    var carros =['vectra','gol','centra'];
    
    return carros.splice(posiscao,qtd)
}

//var NovoCarros = getCarro(1, 2);
//console.log(NovoCarros);

var NovoCarros = carros.slice();
console.log(NovoCarros);

var carro = NovoCarros[1];
console.log(carro);
]
NovoCarros.forEach(function (item, index){
    console.log(index,item)
})

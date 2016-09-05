//function mostraNome(){
//    console.log('angelilton declaração');
//}
//
//mostraNome();


var mostrarNome = function (nome, sobrenome){
//    return arguments[0];
//    return arguments.length;
    var qtd = arguments.length;
     console.log(arguments.length);
     var nomeCompleto='seu nome';
    
    while(qtd > 0){
       nomeCompleto += ' ' +  arguments[qtd+1];
         console.log(nomeCompleto);
        qtd--;
    }
    
    console.log(nomeCompleto);
}

//nas explessão a chmada tem que ficar depois da declaração
mostrarNome('angelilton','Epifanio','Silva');

//console.log(nome);



function Pessoa(nome, idade, sexo)
{
    if(this instanceof Pessoa)
        {
            this.nome = nome;
            this.idade = idade;
            this.sexo = sexo
        }else
        {
        return new Pessoa(nome, idade, sexo);
        }

}

angelilton = Pessoa ('angelilton',21,'masc');

console.log(angelilton instanceof Pessoa);

console.log(angelilton);
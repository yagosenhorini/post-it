class Pessoa{
    constructor(pNome, sNome, peso, altura, idade){
        this.nome = pNome;
        this.sobrenome = sNome;
        this.peso = peso;
        this.tamanho = altura;
        this.idade = idade;
    }
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }
    anoNascimento(){
        let total = 2018 - this.idade;
        return total;
    }
    calculaImc(){
        let imc = this.peso / Math.pow(this.tamanho, 2);
        return imc;
    }
}
const pessoal = {
    nome: 'Gabriel',
    sobrenome: 'Vital',
    idade: 26,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }

};
pessoal.incrementaIdade();
pessoal.fala();
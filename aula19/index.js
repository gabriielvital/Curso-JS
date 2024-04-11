/*
Primitivos - string, number, boolean, undefined, 
null (bigint, symbol) - Valor

Referência (mutável) - array, object, function
*/
const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = {...a};

a.nome = 'João'
console.log(a);
console.log(b);
/* 
if(pontuacaoUsuario >= 1000){
    console.log('Usuario VIP');
}else{
    console.log('Usuario normal');
}

*/

// (condição) ? 'Valor para verdadeira' : 'Valor para falso';

const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';


const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);




const num = Number(prompt('Digite um numero'));
const numeroTitulo = document.getElementById('numero-titulo')
const conteudoTextual = document.getElementById('texto')

numeroTitulo.innerHTML = num;
conteudoTextual.innerHTML  = `<p>Raiz quadrada: ${num ** 0.5}</p>`;
conteudoTextual.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
conteudoTextual.innerHTML += `<p>${num} é NaN: ${Number.isNaN(num)}</p>`;
conteudoTextual.innerHTML += `<p>Arredondamento para baixo: ${Math.floor(num)}</p>`;
conteudoTextual.innerHTML += `<p>Arredondamento para cima: ${Math.ceil(num)}</p>`;
conteudoTextual.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`;

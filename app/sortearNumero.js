const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1);
}
console.log(numeroSecreto);

const elementoMenorValor = document.getElementById('menor__valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior__valor');
elementoMaiorValor.innerHTML = maiorValor;

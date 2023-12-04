// Tudo é objeto - tendo métodos e propriedades herdadas ou diretas.
const pessoa = {
  nome: 'João',
  mostrarNome() {
    console.log(this.nome);
  },
};
// Método do objeto String
console.log(pessoa.nome.toUpperCase());

// Arrow function - Sintaxe mais limpa, o this muda e passa a ser o pai.
const somar = (n1, n2) => {
  return n1 + n2;
};
console.log(somar(20, 3));
// Códido de uma linha apenas pois tempos apenas o return dentro dela.
const dividir = (n1, n2) => n1 / n2;
console.log(dividir(20, 2));

// Destructuring - É uma forma de extrair propriedades ou métodos específicos de array ou objetos.
// Desestruturando o parâmetro
function cliqueAleatorio({ clientX, clientY }) {
  console.log(clientX, clientY);
}
document.addEventListener('click', cliqueAleatorio);

// Armazenando em uma constante(sem desestruturar o parâmetro)
function movimentoMouse(event) {
  const { clientX, clientY } = event;
  console.log(clientX, clientY);
}
document.addEventListener('mousemove', movimentoMouse);

// Com arrays
const cores = ['Azul', 'Roxo', 'Vermelho'];
const [cor1, cor2, cor3] = cores;
console.log(cor1, cor2, cor3);

// Exemplo de como seria os hooks - acompanhado por um valor e uma função.
const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [lados, perimetro] = useQuadrado;
console.log(perimetro(5));

// Rest e spread
// Rest - servindo para armazenar quando não
// sabemos quantos parâmetros vão ser passados
const mostrarClients = (empresa, ...clientes) => {
  clientes.forEach(cliente => {
    console.log(cliente, empresa)
  });
}
mostrarClients('Apple', 'Marcelo', 'Willian', 'Pedro', 'Jessica');

// Spread - espalhar um item iterável, um por um.
const numeros = [10, 4, 25, -15, 2.5];
const maiorNumero = Math.max(...numeros);
console.log(maiorNumero);

const numeros2 = [14, 7, ...numeros, 20, 15, -12];
console.log(numeros2);

// modules - Importante entender pois é muito usado. E sua sintaxe também
// import { areaQuadrado, perimetroQuadrado } from "./quardado.js"; // Quando se tem
// mais de um export
// console.log(areaQuadrado(5));
// console.log(perimetroQuadrado(2));
import quadrado from "./quardado.js";
import numeroAleatorio from "./numeroAleatorio.js";
console.log(numeroAleatorio());
console.log(quadrado.areaQuadrado(4))
console.log(quadrado.perimetroQuadrado(5))

// fetch - forma de fazer requisições HTTP. Com ele podemos pegar dados de alguma API por exemplo.
// Juntamente do fetch, podemos usar o then para manipular as informações pegas na API
fetch('https://ranekapi.origamid.dev/json/api/produto')
.then((response) => 
  response.json()
).then((json) => {
  console.log(json);
})

// Async e await - mesma coisa de usar o then, porem sua sintaxe é mais limpa
async function pegarProdutos(url) {
  const response = await fetch(url)
  const json = await response.json()
  console.log(json);
  return json
}

const produtos = pegarProdutos('https://ranekapi.origamid.dev/json/api/produto')

// Métodos de array - não modificam a array original
// filter - filtra os itens de um array e retorna uma nova arrays com os itens
const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

// vai retornar apenas os itens que começarem com o 'R$'
const precosFiltro = precos.filter(p => p.includes('R$'))
console.log(precosFiltro);
// Map - faz um loop pela array retornando uma nova array modificada
const numerosPrecos = precosFiltro.map(p => +p.replace('R$ ', ''))
console.log(numerosPrecos);

// Expressões - vão ter momentos em que só pode usar expressões
const grupoA = 300;
const grupoB = 500;

const vencedor = grupoA > grupoB ? 'Grupo A venceu!' : 'Grupo B venceu!'
console.log(vencedor)

const ativo = true
const botao = ativo && 'Botão está ativo'
console.log(botao)
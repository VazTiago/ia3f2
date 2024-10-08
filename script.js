const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [   //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "depay faz gol hj ou nn",
        alternativas:[{texto:"ss",afirmação: "afirmação da alternativa 1"},{texto:"nn",afirmação: "afirmação da alternativa 2"}]
    },
    {
        enunciado: "Pergunta 2",

        alternativas: [{texto:"Alternativa 1",afirmação: "afirmação da alternaiva 1"},{texto: "Alternativa 2", afirmação:"afirmação da alternativa 2"}]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [{texto:"Alternativa 1",afirmação: "afirmação da alternaiva 1"},{texto: "Alternativa 2", afirmação:"afirmação da alternativa 2"}]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();

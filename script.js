const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [ //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "Você acha que a inteligencia artificial pode afetar o desenvolvimento humano?"
        alternativas: ["sim","não "]
    },
    {
        enunciado: "Você ultiliza com frequencia?",
        alternativas: ["sim","as vezes", "não"]
    },
    {
        enunciado: "Voê acretida que todos o Humanos estão preparados para usar as IA's ?"
        alternativas: ["Sim","Não"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    
}

mostraPergunta();
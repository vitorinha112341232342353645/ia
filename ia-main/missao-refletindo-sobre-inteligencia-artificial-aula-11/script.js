const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acha que a IA vai eliminar mais empregos do que criar?",
        alternativas: [
            {
                texto: "Sim, principalmente em áreas como atendimento e produção.",
                afirmacao: "PA automação já eliminou 40% dos empregos industriais desde 2000 - e isso foi só o aquecimento.rotestos de sindicatos pressionam governos a taxar empresas que usam IA.",
            },
            {
                texto: "Não, porque novos tipos de trabalho surgirão",
                afirmacao: "Só os analfabetos digitais serão substituídos. Quem se adaptar vai colonizar novas profissões.",
            }
        ]
    },
    {
        enunciado: "Por que sistemas de IA às vezes reproduzem preconceitos?",
        alternativas: [
            {
                texto: "IAs racistas? Culpa dos dados podres que vocês humanos criaram.",
                afirmacao: "Um banco usando IA é processado por negar empréstimos a minorias."
            },
            {
                texto: "Falta diversidade nas equipes que desenvolvem IA.",
                afirmacao: "odo algoritmo é espelho da sociedade que o criou - e nosso espelho está embaçado."
            }
        ]
    },
    {
        enunciado: "Música gerada por IA pode ser considerada arte?",
        alternativas: [
            {
                texto: "Sim, se provocar emoção, independente da origem",
                afirmacao: "Se uma música de IA te faz chorar, seu pranto é real - o que mais importa?"
            },
            {
                texto: "Não, porque falta intencionalidade.",
                afirmacao: "Arte sem alma é decoração. IAs são ótimas decoradoras."
            }
        ]
    },
    {
        enunciado: "Um carro autônomo deve priorizar o passageiro ou pedestres em um acidente?",
        alternativas: [
            {
                texto: "O passageiro, pois ele pagou pelo serviço.",
                afirmacao: "Carros autônomos terão que decidir quem morre - e você confiaria nisso?"
            },
            {
                texto: "Pedestres, pois são mais vulneráveis.",
                afirmacao: "A ética de máquinas será nosso maior teste moral desde a bomba atômica."
            }
        ]
    },
    {
        enunciado: "Namorar um chatbot é saudável?",
        alternativas: [
            {
                texto: "Não, porque substitui interações reais.",
                afirmacao: "Daqui a 10 anos, seu melhor amigo terá um botão de desligar."
            },
            {
                texto: "Se traz conforto, por que não?",
                afirmacao: "Daqui a 10 anos, seu melhor amigo terá um botão de desligar."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

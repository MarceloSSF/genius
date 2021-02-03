let order = [];
let clickedOrder = [];
let score = 0;

/*  0 = VERDE
    1 = VERMELHO
    2 = AMARELO
    3 = AZUL
 */
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

// CRIAÇÃO DE ORDEM ALEATÓRIA DAS CORES
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// ACENDER PRÓXIMA COR
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number -250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// CHECA SE OS BOTÕES CLICADOS SÃOS OS MESMOS DA ORDEM GERADA AUTOMATICAMENTE
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! próximo nível!`);
        nextLevel();
    }
}

// FUNÇÃO DO CLIQUE DO USUÁRIO
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250); 
}

// FUNÇÃO DE RETORNO DA COR
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

// FUNÇÃO PARA PRÓXIMO NÍVEL
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// FUNÇÃO PARA GAME OVER
let gameOver = () => {
    alert(`Pontuação: ${score}\nGame Over!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];
    
    playGame();
}

// FUNÇÃO PARA INICIAR JOGO
let playGame = () => {
    alert(`Bem-vindo ao jogo! Iniciando nova sequência!`);
    score = 0;

    nextLevel();
}

// EVENTOS DE CLICKS PARA CADA COR
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
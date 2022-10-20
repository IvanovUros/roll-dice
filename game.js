const firstPlayer = localStorage.getItem('firstPlayerUsername');
const secondPlayer = localStorage.getItem('secondPlayerUsername');
const firstPlayerUsername = document.getElementById('usernameTextF');
const secondPlayerUsername = document.getElementById('usernameTextS');
const totalFirst = document.getElementById('totalF');
const totalSecond = document.getElementById('totalS');
const currentFirst = document.getElementById('currentF');
const currentSecond = document.getElementById('currentS');
const rollBtn = document.getElementById('roll');
const stopBtn = document.getElementById('stop');
const diceF = document.getElementById('diceF');
const diceS = document.getElementById('diceS');
let indicator;
let secondPlayerTurn = false;
let totalValueFirst = 0;
let totalValueSecond = 0;
let currentValueFirst = 0;
let currentValueSecond = 0;


firstPlayerUsername.innerText = firstPlayer;
secondPlayerUsername.innerText = secondPlayer;
totalFirst.innerText = 'Total : ' + totalValueFirst;
totalSecond.innerText = 'Total : ' + totalValueSecond;
currentFirst.innerText = 'Current : ' + currentValueFirst;
currentSecond.innerText = 'Current : ' + currentValueSecond;



function getRandomInt() {
     indicator = Math.floor(Math.random() * 6);
     return indicator;
};
function gameEnding() {
    if (totalValueFirst >= 50) {
        localStorage.setItem('winner', firstPlayer);
        window.location.assign('end.html');

    };
    if (totalValueSecond >= 50) {
        localStorage.setItem('winner', secondPlayer);
        window.location.assign('end.html');
    }
};

rollBtn.addEventListener('click', () => {
    getRandomInt();
    if (!secondPlayerTurn) {
        if (indicator == 0) {
            diceF.classList.add('one');
            diceF.classList.remove('two');
            diceF.classList.remove('three');
            diceF.classList.remove('four');
            diceF.classList.remove('five');
            diceF.classList.remove('six');
            secondPlayerTurn=true;
            currentValueFirst = 0;
            currentFirst.innerText = 'Current : ' +currentValueFirst;
        };
        if (indicator == 1) {
            diceF.classList.add('two');
            diceF.classList.remove('one');
            diceF.classList.remove('three');
            diceF.classList.remove('four');
            diceF.classList.remove('five');
            diceF.classList.remove('six');
            currentValueFirst = currentValueFirst + 2;
            currentFirst.innerText = 'Current : ' +currentValueFirst;
        };
        if (indicator == 2) {
            diceF.classList.add('three');
            diceF.classList.remove('one');
            diceF.classList.remove('two');
            diceF.classList.remove('four');
            diceF.classList.remove('five');
            diceF.classList.remove('six');
            currentValueFirst = currentValueFirst + 3;
            currentFirst.innerText = 'Current : ' +currentValueFirst;
        };
        if (indicator == 3) {
            diceF.classList.add('four');
            diceF.classList.remove('one');
            diceF.classList.remove('two');
            diceF.classList.remove('three');
            diceF.classList.remove('five');
            diceF.classList.remove('six');
            currentValueFirst = currentValueFirst + 4;
            currentFirst.innerText = 'Current : ' +currentValueFirst;
        };
        if (indicator == 4) {
            diceF.classList.add('five');
            diceF.classList.remove('one');
            diceF.classList.remove('two');
            diceF.classList.remove('three');
            diceF.classList.remove('four');
            diceF.classList.remove('six');
            currentValueFirst = currentValueFirst + 5;
            currentFirst.innerText = 'Current : ' +currentValueFirst;
        };
        if (indicator == 5) {
            diceF.classList.add('six');
            diceF.classList.remove('one');
            diceF.classList.remove('two');
            diceF.classList.remove('three');
            diceF.classList.remove('four');
            diceF.classList.remove('five');
            currentValueFirst = currentValueFirst + 6;
            currentFirst.innerText = 'Current : ' +currentValueFirst;
        };
    } else {
        if (indicator == 0) {
            diceS.classList.add('one');
            diceS.classList.remove('two');
            diceS.classList.remove('three');
            diceS.classList.remove('four');
            diceS.classList.remove('five');
            diceS.classList.remove('six');
            secondPlayerTurn = false;
            currentValueSecond = 0;
            currentSecond.innerText = 'Current : ' + currentValueSecond;
        };
        if (indicator == 1) {
            diceS.classList.add('two');
            diceS.classList.remove('one');
            diceS.classList.remove('three');
            diceS.classList.remove('four');
            diceS.classList.remove('five');
            diceS.classList.remove('six');
            currentValueSecond = currentValueSecond + 2;
            currentSecond.innerText = 'Current : ' + currentValueSecond;
    
        };
        if (indicator == 2) {
            diceS.classList.add('three');
            diceS.classList.remove('one');
            diceS.classList.remove('two');
            diceS.classList.remove('four');
            diceS.classList.remove('five');
            diceS.classList.remove('six');
            currentValueSecond = currentValueSecond + 3;
            currentSecond.innerText = 'Current : ' + currentValueSecond;
    
        };
        if (indicator == 3) {
            diceS.classList.add('four');
            diceS.classList.remove('one');
            diceS.classList.remove('two');
            diceS.classList.remove('three');
            diceS.classList.remove('five');
            diceS.classList.remove('six');
            currentValueSecond = currentValueSecond + 4;
            currentSecond.innerText = 'Current : ' + currentValueSecond;
    
        };
        if (indicator == 4) {
            diceS.classList.add('five');
            diceS.classList.remove('one');
            diceS.classList.remove('two');
            diceS.classList.remove('three');
            diceS.classList.remove('four');
            diceS.classList.remove('six');
            currentValueSecond = currentValueSecond + 5;
            currentSecond.innerText = 'Current : ' + currentValueSecond;
    
        };
        if (indicator == 5) {
            diceS.classList.add('six');
            diceS.classList.remove('one');
            diceS.classList.remove('two');
            diceS.classList.remove('three');
            diceS.classList.remove('four');
            diceS.classList.remove('five');
            currentValueSecond = currentValueSecond + 6;
            currentSecond.innerText = 'Current : ' + currentValueSecond;
        };
    }
});

stopBtn.addEventListener('click', () => {
    if (!secondPlayerTurn) {
        totalValueFirst = totalValueFirst + currentValueFirst;
        totalFirst.innerText = 'Total : ' + totalValueFirst;
        currentValueFirst = 0;
        currentFirst.innerText = 'Current : ' + currentValueFirst;
        secondPlayerTurn = true;
        gameEnding();
    } else {
        totalValueSecond = totalValueSecond + currentValueSecond;
        totalSecond.innerText = 'Total : ' + totalValueSecond;
        currentValueSecond = 0;
        currentSecond.innerText = 'Current : ' + currentValueSecond;
        secondPlayerTurn = false;
        gameEnding();
    }
});


    


// Consegna

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// BONUS:
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

const eleGrid = document.querySelector('.grid');
const eleWelcomeText = document.querySelector('.welcome-text')
const eleMode = document.querySelector('#mode');
const eleBtn = document.querySelector('.btn');
const arrRandoms = [];

eleBtn.addEventListener('click', function () {
    
    eleGrid.replaceChildren();
    eleGrid.classList.remove('hidden');
    eleWelcomeText.classList.add('hidden');

    const nCells = parseInt(eleMode.value);
    const sideSquare = Math.sqrt(nCells);
    eleGrid.style.setProperty('--sideSquare', sideSquare);

    for (let i = 1; i <= nCells; i++) {
        const eleCell = document.createElement('div');
        eleCell.classList.add('cell');
        eleCell.innerHTML = i;
        eleGrid.append(eleCell);

        eleCell.addEventListener('click', toggleCell);
    }
});

for (let i = 1; i <= 16; i++) {
    let randomNumberMine;
    do {
        randomNumberMine = getRandomInteger(1, 100); 
    } while (arrRandoms.includes(randomNumberMine))
    arrRandoms.push(randomNumberMine);
}

console.log(arrRandoms);

function toggleCell() {
	this.classList.toggle('active');
}

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// function isMine(number) {
// 	if (number % 2) {
// 		return false;
// 	} else {
// 		return true;
// 	}
// }

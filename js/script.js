const eleGrid = document.querySelector('.grid');
const eleWelcomeText = document.querySelector('.welcome-text')
const eleMode = document.querySelector('#mode');
const eleBtn = document.querySelector('.btn');
let arrMines;
let score;

eleBtn.addEventListener('click', function () {
	score = 0;
	const nCells = parseInt(eleMode.value);
	const nMines = 16;
	maxScore = nCells - nMines;
	arrMines = generateMines(nMines, 1, nCells);
	
	eleGrid.innerHTML = '';

	eleGrid.classList.remove('hidden');
	eleWelcomeText.classList.add('hidden');

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

function toggleCell() {
	const cellNumber = parseInt(this.innerHTML);

	if (arrMines.includes(cellNumber)) { 
		this.classList.add('mine');
		disableAllCells(true);
		alert('Il tuo punteggio e: ' + score);
	} else {
		this.removeEventListener('click', toggleCell); 
		score++;
		this.classList.add('no-mine');
		if (score == maxScore) {
			disableAllCells(false);
			alert('Complimenti hai vinto! Il tuo punteggio e: ' + score);
		}
	}
}

function generateMines(nMines, min, max) {
	const arrRandoms = [];
	for (let i = 0; i < nMines; i++) {
		do {
			randomNumber = getRandomInteger(min, max);
		} while (arrRandoms.includes(randomNumber))
		arrRandoms.push(randomNumber);
	}
	return arrRandoms;
}

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function disableAllCells(showMines) {
	const listCells = eleGrid.querySelectorAll('.cell');
	for (let i = 0; i < listCells.length; i++) {
		const cellNumber = parseInt(listCells[i].innerHTML);
		if (showMines && arrMines.includes(cellNumber)) {
			listCells[i].classList.add('mine');
		}
		listCells[i].removeEventListener('click', toggleCell);
	}
}
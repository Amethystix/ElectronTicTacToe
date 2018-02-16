
let board;
let bSize = 0;

//If the board is 3x3, determine if there is a win
function hasWon9(){

}
//If the board is 4x4, determine if there is a win
function hasWon16(){

}
//If the board is 5x5, determine if there is a win
function hasWon25(){

}
//Determine if the game is over, and if so, determine who won.
function hasWon(){
	//Determine if anyone has won
	if(bSize === 9){

	}
	else if(bSize === 16){

	}
	else if(bSize === 25){

	}

}
//Draw the divs that represent the tic tac toe board
function generateBoard(){
	
}
//The mechanism that makes the game play
function play(){

}
//Reads the user's chosen board size and hides the initial div
function start(){
	document.querySelector(".playBtn").addEventListener('click', function(evt){
		evt.preventDefault();
		bSize = document.querySelector("#inputText").value;
		document.querySelector('#startDiv').classList.add("hidden");
		board = new Board(bSize);
	});
}
//First function called to start the game
function main(){
	start();
}
//Constructor for the board object
class Board{
	constructor(size){
		this.size = size;
		this.arr = [];
		this.htmlElement = document.getElementById("board");
		this.fillEmptyArr();
		this.unhide();

	}
	//Fills the array depending on the size with empty strings
	fillEmptyArr(){
		for(let i = 0; i < this.size; i++){
			this.arr.push(document.createElement('div'));
			this.arr[i].classList.add("space");
		}
	}
	addLetter(player){

	}
	unhide(){
		document.getElementById("board-holder").classList.remove("hidden");
		for(let i= 0; i < this.size; i++){
			this.htmlElement.appendChild(this.arr[i]);
			if((i+1) % Math.sqrt(this.size) === 0){
				this.htmlElement.innerHTML += "<br>"
			}
			else{
				let temp = document.createElement('div');
				temp.classList.add('spacer');
				this.htmlElement.appendChild(temp);
			}
		}
	}

}
document.addEventListener('DOMContentLoaded', main);
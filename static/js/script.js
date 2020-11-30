//How many days old you are
function ageInDays() {
  var birthYear = prompt("Enter Your Birth Year.........");
  var ageInDayss = (2018 - birthYear) * 365;
  var textAnswer = document.createTextNode(
    "You are: " + ageInDayss + " days old"
  );
  document.getElementById("ageInDays").appendChild(textAnswer);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

////////Challenge-2/////////////////////////////////////////////////////////////

function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-cat-gen");
  image.src = "https://cataas.com/cat/gif";
  div.appendChild(image);
}

/////////////////////////////// Challenge-3/////////////////////////

// function rpsGame(yourChoice){
// console.log(yourChoice);
// var humanChoice,botChoice;

//humanChoice=yourChoice.id;
// botChoice=numberToChoice(randToRpsInt());
// console.log('Human Choice:',humanChoice);
// console.log('Computer Choice:',botChoice);

// results=decideWinner(humanChoice,botChoice);
// console.log(results);

// message = finalMessage(results);
// console.log(message);

// rpsFrontEnd(yourChoice.id,botChoice,message);
// }
// function randToRpsInt(){
//     return Math.floor(Math.random()*3);
// }

// function numberToChoice(number){
//     return['rock','paper','scissors'][number];
// }

// function decideWinner(yourChoice,botChoice){
//     var rpsDatabase={
//         'rock':{'scissors':1, 'rock':0.5, 'paper':0},
//         'paper':{'rock':1, 'paper':0.5, 'scissors':0},
//         'scissors':{'paper':1, 'scissors':0.5, 'rock':0}
//     };

//     var yourScore=rpsDatabase[yourChoice][botChoice];
//     var botScore=rpsDatabase[botChoice][yourChoice];

//     return [yourScore, botScore];
// }

//  function finalMessage([yourScore,botScore]){
//      if(yourScore===0){
//          return{'message':'You Lost','color':'red'};
//      }
//      else if(yourScore===0.5){
//          return{'message':'You Tied','color':'yellow'};
//      }

//      else{
//          return{'message':'You Won','color':'green'};
//      }
//  }

// function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
//     var imagesDatabase={
//         'rock':document.getElementById('rock').src,
//         'paper':document.getElementById('paper').src,
//         'scissors':document.getElementById('scissors').src
//     }

// //     //lets remove all images
//     document.getElementById('rock').remove();
//     document.getElementById('paper').remove();
//     document.getElementById('scissors').remove();

//     var humanDiv=document.createElement('div');
//     var botDiv=document.createElement('div');
//     var messageDiv=createElement('div');

//     humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice]+"'>"
//     document.getElementById('flex-box-rps-div').appendChild(humanDiv);
// }

//////////////////////Challenge-4///////////////////

var all_buttons = document.getElementsByTagName("button");
console.log(all_buttons);

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
 
}

function buttonColorChange(buttonThing) {
  if (buttonThing.value === "red") {
    buttonRed();
  } else if (buttonThing.value === "green") {
    buttonGreen();
  } else if (buttonThing.value === "reset") {
    buttonReset();
  } else if (buttonThing.value === "random") {
    randomColors();
  }
}

function buttonRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}

function buttonGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}

function buttonReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColors(){
var choices=['btn-primary', 'btn-danger', 'bth-success','btn-warning'];
for(let i=0; i < all_buttons.length; i++)
{
    var randomNumber=Math.floor(Math.random()*4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
}
}



///////////////////////Challenge-5////////////////////
let blackjackGame={
  'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box', 'score':0},
  'dealer':{'scoreSpan':'#dealer-blackjack-result', 'div':'#dealer-box', 'score':0},
  'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
  'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':10}
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackhit);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackdeal);

function blackjackhit(){
  let card=randomCard();
  console.log(card);
 showCard(YOU,card);
 updateScore(card,YOU);
 console.log(YOU['score']);
 showScore(YOU);
}

function randomCard(){
  let randomIndex=Math.floor(Math.random()*13);
  return blackjackGame['cards'][randomIndex];
}

function showCard(activePlayer,card){
  let cardImage = document.createElement('img');
  cardImage.src = `static/images/${card}.png`;
  document.querySelector(activePlayer['div']).appendChild(cardImage);
}

function blackjackdeal(){
  let yourImages=document.querySelector('#your-box').querySelectorAll('img');
  let dealerImages=document.querySelector('#dealer-box').querySelectorAll('img');
  console.log(yourImages);
  for(let i=0; i<yourImages.length; i++){
  yourImages[i].remove();
  }

  for(let i=0; i<dealerImages.length; i++){
    dealerImages[i].remove();
    }
}

function updateScore(card,activePlayer){
  if(card === 'A'){
  if(activePlayer['score']+blackjackGame['cardsMap'][card][1]<=21){
    activePlayer['score']+=blackjackGame['cardsMap'][card][1];
  }
  else{
    activePlayer['score']+=blackjackGame['cardsMap'][card][0];
}
  }
else{
  activePlayer['score']+= blackjackGame['cardsMap'][card];
}
  }
function showScore(activePlayer){
  document.querySelector(activePlayer['scoreSpan']).textContent=activePlayer['score'];
}




// document.addEventListener('DOMContentLoaded', function(event) {
// function createDeck (){
//     let deck = new Array();
//     for (let i = 0; i < suits.length; i++)
//         for (let j = 0; j < values.length; j++) {
//             let card = {Value: values.length}

//     }
//            -----VARIABLES-----
let playerCardsArray =[], computerCardsArray = [];//testing format
let playerWarCard , computerWarCard, playerInWarCard, computerInWarCard;
let playerDiscardPile =[], computerDiscardPile =[], playerInWarCardsArray =[], computerInWarCardsArray =[];
//          ---------button--------
const restartButton= document.querySelector('#Restart');
const playsCardButton = document.querySelector('#pulls_card');
const dealsCardButton = document.querySelector("#deal");
//         -----declare global function-----
pullFromDiscard();
//        -----------computerstuff------------
const computers_card = document.querySelector('.computers_card');
const cardsWonComputer= document.querySelector('.cardsWonComputer');
const cardCountComputer= document.querySelector('.cardCountComputer');
const computerElementsBox = document.querySelector('computerelements');
let computerRank=  document.querySelector('#crank');
let computerSuit = document.querySelector("#csuit");

let computerWarCard1 = document.querySelector('#inWarCardComputer1')
let computerWarCardRank1=document.querySelector('#cwarcardrank1')
let computerWarCardSuit1=document.querySelector('#cwarcardsuit1')

let computerWarCard2 = document.querySelector('#inWarCardComputer2')
let computerWarCardRank2=document.querySelector('#cwarcardrank2')
let computerWarCardSuit2=document.querySelector('#cwarcardsuit2')

let computerWarCard3 = document.querySelector('#inWarCardComputer3')
let computerWarCardSuit3=document.querySelector('#cwarcardsuit3')
let computerWarCardRank3=document.querySelector('#cwarcardrank3')

let computerWarCard4 = document.querySelector('#inWarCardComputer4')
let computerWarCardSuit4=document.querySelector('#cwarcardsuit4')
let computerWarCardRank4=document.querySelector('#cwarcardrank4')
//        --------computer war variables--------------

//         ----------playerstuff---------------
let players_deck = document.querySelector('.players_deck');
let cardsWonPlayer= document.querySelector('.cardsWonPlayer');
let cardcountplayer= document.querySelector('cardcountplayer');

let playerElementsBox = document.querySelector('playerelements');
let playerRank= document.querySelector('#prank');
let playerSuit= document.querySelector('#psuit');
//        --------player war variables--------------
let playerWarCard1 = document.querySelector('#inWarCardPlayer1')
let playerWarCardRank1=document.querySelector('#pwarcardrank1')
let playerWarCardSuit1=document.querySelector('#pwarcardsuit1')

let playerWarCard2 = document.querySelector('#inWarCardPlayer2')
let playerWarCardRank2=document.querySelector('#pwarcardrank2')
let playerWarCardSuit2=document.querySelector('#pwarcardsuit2')

let playerWarCard3 = document.querySelector('#inWarCardPlayer3')
let playerWarCardSuit3=document.querySelector('#pwarcardsuit3')
let playerWarCardRank3=document.querySelector('#pwarcardrank3')

let playerWarCard4 = document.querySelector('#inWarCardPlayer4')
let playerWarCardSuit4=document.querySelector('#pwarcardsuit4')
let playerWarCardRank4=document.querySelector('#pwarcardrank4')

//      ---------gamestatusbox------------
let gameStatus = document.querySelector('#gameStatus');
//      ---------querySelector------------


//      --------connectToButton--------
playsCardButton.addEventListener('click',playCard);
restartButton.addEventListener('click' , reload);
dealsCardButton.addEventListener('click', dealCards);
//     -------------DECK------------
const suits = ["♥","♦","♣","♠"];
const ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
let deck = [];
// let playerHand=playerCards
// let computerhand=computerCards
function createDeck() {
    for (let i = 0; i<suits.length; i++) {
        for (let j = 0; j<ranks.length; j++) { 
            deck.push({suit:suits[i], 
                rank:ranks[j],
                value:j-1})
        }
    }
     ;
    // console.log(deck);
    // ----------shuffleFUNCTION----------
function shuffleDeck (deck) {
    for(let a =0; a<deck.length; a++) {
        const tempCard = deck[a];
        const randomIndex = Math.floor(Math.random()*52);
        let x = deck[a];
        deck[a] = deck[randomIndex];
        deck[randomIndex] = x
        deck[randomIndex] = tempCard
        }
    }shuffleDeck(deck)//happens inside create deck most be declared in here+ deck isnt global
};

createDeck()//invoking
// let shuffledDeck = createDeck()
// --------SPLITS DECK AND DEALS CARDS-------
function dealCards(){
    playerCardsArray = (deck.splice(0,26)) //link to the html of the card count
    computerCardsArray  = (deck.splice(0,26))
    gameStatus.innerText = "Play a card"//link this to the html of the card count
    cardsWonComputer.innerText=computerCardsArray.length;
    cardsWonPlayer.innerText=playerCardsArray.length;
    // console.log(playerCardsArray, playerCards, computerCardsArray, computerCards);
// its not stored anywhere 
 }
// -----operatesTurnOverButton-----
// makes sure html is updated with current board status
function playCard (){
    if (playerCardsArray.length !== 0 && computerCardsArray.length !== 0 ){
    playerWarCard = playerCardsArray.shift()
    // console.log(playerWarCard)
    computerWarCard = computerCardsArray.shift()//returns top card from an array I think
    // console.log(computerWarCard.suit) 
    cardsWonComputer.innerText=computerCardsArray.length;
    cardsWonPlayer.innerText=playerCardsArray.length;
    computerRank.innerText=computerWarCard.rank;
    computerSuit.innerText=computerWarCard.suit;
    playerRank.innerText=playerWarCard.rank;
    playerSuit.innerText=playerWarCard.suit;
    // console.log(playerWarCard.suit)
    compareCards();//insert timeout function
    } else {
        pullFromDiscard();
        winnerOfGame();
    }
}

// --------winnerOfTurn-------
function compareCards() {
    // console.log(playerDiscardPile)
    if ( playerWarCard.value > computerWarCard.value) {
            playerDiscardPile.push(playerWarCard, computerWarCard), gameStatus.innerText = "Player Wins!!!"
                // console.log(playerDiscardPile)
    } 
        else if (computerWarCard.value > playerWarCard.value) { 
            computerDiscardPile.push(playerWarCard, computerWarCard), gameStatus.innerText="Computer Wins!!!"
            // console.log(computerDiscardPile)
            ;
    } else {
        // -----I need to make this a function-----
            gameStatus.innerText = "It's Draw";
                playerInWarCardsArray = playerCardsArray.splice(0,4),

                InWarCardPlayer1 = playerInWarCardsArray[0];
                InWarCardPlayer2 = playerInWarCardsArray[1];
                InWarCardPlayer3 = playerInWarCardsArray[2];
                InWarCardPlayer4 = playerInWarCardsArray[3];

                computerInWarCardsArray = computerCardsArray.splice(0,4),

                InWarCardComputer1 = computerInWarCardsArray[0];
                InWarCardComputer2 = computerInWarCardsArray[1];
                InWarCardComputer3 = computerInWarCardsArray[2];
                InWarCardComputer4 = computerInWarCardsArray[3];
                console.log(computerInWarCardsArray, playerInWarCardsArray);
                
                console.log(InWarCardPlayer4);
                // computerInWarCard = computerInWarCardsArray.shift(0)
            //    gonna change this to make each spcific card equal to its corresondng memeber of the array, then compare the last card
                // console.log(computerInWarCard, playerInWarCard)
            setInterval(() => {
                playerWarCardRank1.innerText=InWarCardPlayer1.rank;
                playerWarCardSuit1.innerText=InWarCardPlayer1.suit;
            },1000);
                
            setInterval(()=> {
                playerWarCardRank2.innerText=InWarCardPlayer2.rank;
                playerWarCardSuit2.innerText=InWarCardPlayer2.suit;
            },2000);

            setInterval(()=> {
                playerWarCardRank3.innerText=InWarCardPlayer3.rank;
                playerWarCardSuit3.innerText=InWarCardPlayer3.suit;
            },3000);
            
            setInterval(()=> {
                playerWarCardRank4.innerText=InWarCardPlayer4.rank;
                playerWarCardSuit4.innerText=InWarCardPlayer4.suit;
            },4000);

            setInterval(() => {
                computerWarCardRank1.innerText=InWarCardComputer1.rank;
                computerWarCardSuit1.innerText=InWarCardComputer1.suit;
            },1000);
                
            setInterval(() => {
                computerWarCardRank2.innerText=InWarCardComputer2.rank;
                computerWarCardSuit2.innerText=InWarCardComputer2.suit;
            },2000);

            setInterval(() => {
                computerWarCardRank3.innerText=InWarCardComputer3.rank;
                computerWarCardSuit3.innerText=InWarCardComputer3.suit;
            },3000);

            setInterval(() => {
                computerWarCardRank4.innerText=InWarCardComputer4.rank;
                computerWarCardSuit4.innerText=InWarCardComputer4.suit;
            },4000);
                // -----timer-----
                setInterval(() => {
                if(
                    InWarCardComputer4.value > InWarCardPlayer4.value){
                    gameStatus.innerText= "Computer has won the War",
                computerDiscardPile.push(computerInWarCardsArray,playerInWarCardsArray)}
                    else if(
                        InWarCardPlayer4.value > InWarCardComputer4.value){
                            playerDiscardPile.push(computerInWarCardsArray,playerInWarCardsArray),
                            gameStatus.innerText ="Player has won the war"}
                            else {gameStatus.innerText= 'Its another draw'}
                        }, 5000);
                
        }
    
};
// --------pullFromDiscardPile--------
function pullFromDiscard() { 
    if (playerDiscardPile !== 0 && computerDiscardPile !== 0) {
            playerCardsArray = playerDiscardPile.splice(0, playerDiscardPile.length),
             //playerCardsArray = (deck.splice(0,26))
            computerCardsArray = computerDiscardPile.splice(0, computerDiscardPile.length);
        } winnerOfGame();
        // alert('you have used your discard deck');
    };
// -------goToWarFunction-------
// function goToWar (){ 

// -------winnerOfGame-------
function winnerOfGame() {
    if (playerDiscardPile === 0 && playerCardsArray === 0 ){
        gameStatus.innerText = "Game Over Computer Wins!"
        } else if (computerDiscardPile === 0 && computerCardsArray === 0 ){
            gameStatus.innerText = "You are Victorious!";
    }
};
// -------Reload------
function reload(){
    window.location.reload(true)
};


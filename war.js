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
let computerWarCardRank=document.querySelector('#cwarcardrank')
let computerWarCardSuit=document.querySelector('#cwarcardsuit')
//         ----------playerstuff---------------
let players_deck = document.querySelector('.players_deck');
let cardsWonPlayer= document.querySelector('.cardsWonPlayer');
let cardcountplayer= document.querySelector('cardcountplayer');
let playerElementsBox = document.querySelector('playerelements');
let playerRank= document.querySelector('#prank');
let playerSuit= document.querySelector('#psuit');
let playerWarCardRank=document.querySelector('#pwarcardrank')
let playerWarCardSuit=document.querySelector('#pwarcardsuit')
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
    gameStatus.innerText = "Play a card"//link this to the html of the carcount
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
                computerInWarCardsArray = computerCardsArray.splice(0,4)
                // console.log(computerInWarCardsArray, playerInWarCardsArray);
                playerInWarCard = playerInWarCardsArray.shift()
                computerInWarCard = computerInWarCardsArray.shift()
                // console.log(computerInWarCard, playerInWarCard)
                playerWarCardRank.innerText=playerInWarCard.rank;
                playerWarCardSuit.innerText=playerInWarCard.suit;
                computerWarCardRank.innerText=computerInWarCard.rank;
                computerWarCardSuit.innerText=computerInWarCard.suit;
                // -----timer-----
                setInterval(() => {
                if(
                    computerInWarCard.rank > playerInWarCard.rank){
                    gameStatus.innerText= "Computer has won the War",
                computerDiscardPile.push(computerInWarCard,computerInWarCardsArray,playerInWarCard,playerInWarCardsArray)}
                    else if(
                        playerInWarCard.rank > computerInWarCard.rank){
                            playerDiscardPile.push(computerInWarCard,
                            computerInWarCardsArray,playerInWarCard,playerInWarCardsArray),
                            gameStatus.innerText ="Player has won the war"}
                            else {gameStatus.innerText= 'Its another draw'}
                        }, 2000);
                
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


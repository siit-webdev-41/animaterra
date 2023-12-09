console.log("main.js is loaded....");

import cards from "./cards.js";
import CardDeck from "./card-deck.js";
import Player from "./player.js";

const cardDeckSize = 20;
const cardDeck = new CardDeck(cards, cardDeckSize);

console.log(cardDeck);

const mainComponent = document.querySelector("#cards-container");

// player 1
const score1 = document.querySelector(".score1");
const player1 = document.querySelector(".player1");
const playerUser1 = new Player(score1, player1, "card-left");

//  player 2
const score2 = document.querySelector(".score2");
const player2 = document.querySelector(".player2");
const playerUser2 = new Player(score2, player2, "card-right");

const winner = document.querySelector(".winner");

const button = document.querySelector(".game-btn");
button.addEventListener("click", newRound);

function newRound() {
    console.log(cardDeck.cardsSet.length);
    if (cardDeck.cardsSet.length > 0) {
        let card1 = cardDeck.lastCard;
        console.log(card1);
        playerUser1.updateDrawnCard(card1);
        playerUser1.updateScore(card1);

        let card2 = cardDeck.lastCard;
        console.log(card2);
        playerUser2.updateDrawnCard(card2);
        playerUser2.updateScore(card2);
    } else {
        winner.textContent =
            playerUser1.score > playerUser2.score ? "Player1" : "Player2";
    }
}

export default class CardDeck {
    
    constructor(cardsPool){
        this.cardsPool = cardsPool;
        this.usedCards = [];
    }

    generateCardDeck(numCards){
        const cardSet = [];
        for (let i = 0; i < numCards; i++) {
            const randomIndex = Math.floor(Math.random() * this.cardsPool.length);
            cardSet.push(this.cardsPool[randomIndex]);
        }
        return cardSet;
    }

    shuffle(){
        // TO DO
    }

    getFirstCard(){
        // TO DO 
        // if the stack is empty, geat all cards from used cards, shuffle and empty the usedCards array - this should be a method "reset"
        // give info about the card and move it to the usedCards array
    }

}


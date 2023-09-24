export default class CardDeck {
    
    constructor(cardsPool){
        this.cardsPool = cardsPool;
    }

    generateCardDeck(numCards){
        const cardSet = [];
        for (let i = 0; i < numCards; i++) {
            const randomIndex = Math.floor(Math.random() * this.cardsPool.length);
            cardSet.push(this.cardsPool[randomIndex]);
        }
        return cardSet;
    }
}


export default class DrawnCardComponent {
    constructor(card, cssClasses){
        this.card = card;
        this.cssClasses = cssClasses;
        this.cardContainer = null;

        this.createDOMElements();
    }

    createDOMElements(){
        this.cardContainer = document.createElement('div');
        this.cssClasses.forEach(cssClass => this.cardContainer.classList.add(cssClass));

        // add card image
        const cardImg = document.createElement('img');
        this.cardContainer.append(cardImg);

        // add card description
        const cardDescription = document.createElement('p');
        cardDescription.innerText = this.card.story;
        this.cardContainer.append(cardDescription);
    }

    get cardContainerElement(){
        return this.cardContainer;
    }
}
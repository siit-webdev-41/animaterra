export default class DrawnCardComponent {
    constructor(card, cssClasses){
        this.card = card;
        this.cssClasses = cssClasses;
        this.cardContainer = null;

        this.createDOMElements();
    }

    createDOMElements(){
        this.cardContainer = document.createElement('div');

        // add css classes
        this.cardContainer.classList.add('card-display', ...this.cssClasses);

        // add card title
        const cardName = document.createElement('h2');
        cardName.textContent = this.card.name;
        this.cardContainer.append(cardName);

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
        this.cardContainer.append(cardContent);

        // add card image
        const cardImg = document.createElement('img');
        cardImg.src = this.card.getCardImage();
        cardContent.append(cardImg);

        // add card description
        const cardDescription = document.createElement('div');
        cardDescription.classList.add('card-description');
        cardDescription.textContent = this.card.story;
        cardContent.append(cardDescription);

        // add card points
        const cardPoints = document.createElement('p');
        const pointsText = Math.abs(this.card.points) == 1 ? 'punct' : 'puncte';
        cardPoints.textContent = this.card.points + ' ' + pointsText;
        this.cardContainer.append(cardPoints);
    }

    get cardContainerElement(){
        return this.cardContainer;
    }
}
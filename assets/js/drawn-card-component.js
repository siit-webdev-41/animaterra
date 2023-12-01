export default class DrawnCardComponent {
    constructor(card, cssClasses){
        this.card = card;
        this.cssClasses = cssClasses;
        this.cardContainer = null;

        this.createDOMElements();
    }

    createDOMElements(){
        this.cardContainer = document.createElement('div');

        console.log(this.card.color);

        // add css classes
        this.cardContainer.classList.add('card-display', ...this.cssClasses, this.card.color);

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

        // add card description div
        const cardDescription = document.createElement('div');
        cardDescription.classList.add('card-description');
        cardContent.append(cardDescription);
        
        // add card description text
        const cardDescriptionText = document.createElement('p'); 
        cardDescriptionText.textContent = this.card.story;
        cardDescription.append(cardDescriptionText);

        // add card points containter
        const cardPoints = document.createElement('div');
        cardPoints.classList.add('card-points', this.card.color);
        cardDescription.append(cardPoints);

        // add card points value
        const cardPointsValue = document.createElement('div');
        cardPointsValue.classList.add('card-points-value');
        cardPointsValue.textContent = this.card.points > 0 ? `+${this.card.points}` : this.card.points;
        cardPoints.append(cardPointsValue);

        // add card points text
        const cardPointsText = document.createElement('div');
        cardPointsText.classList.add('card-points-text');
        cardPointsText.textContent =  Math.abs(this.card.points) == 1 ? 'punct' : 'puncte';
        cardPoints  .append(cardPointsText);
    }

    get cardContainerElement(){
        return this.cardContainer;
    }
}
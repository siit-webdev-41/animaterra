export default class DrawnCardComponent {
    constructor(card, cssClasses) {
        this.card = null;
        this.cssClasses = cssClasses;

        this.cardContainer = null;
        this.cardName = null;
        this.cardImg = null;
        this.cardDescriptionText = null;
        this.cardPoints = null;
        this.cardPointsValue = null;
        this.cardPointsText = null;

        this.createComponent();
        this.uppdateComponent(card);
    }


    get cardContainerElement() {
        return this.cardContainer;
    }


    createComponent() {
        this.cardContainer = document.createElement('div');

        // add css classes
        this.cardContainer.classList.add('card-display', ...this.cssClasses);

        // add card title
        this.cardName = document.createElement('h2');
        this.cardContainer.append(this.cardName);

        // add the card content
        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
        this.cardContainer.append(cardContent);

        // add card image
        this.cardImg = document.createElement('img');
        cardContent.append(this.cardImg);

        // add card description div
        const cardDescription = document.createElement('div');
        cardDescription.classList.add('card-description');
        cardContent.append(cardDescription);

        // add card description text
        this.cardDescriptionText = document.createElement('p');
        cardDescription.append(this.cardDescriptionText);

        // add card points containter
        this.cardPoints = document.createElement('div');
        this.cardPoints.classList.add('card-points');
        cardDescription.append(this.cardPoints);

        // add card points value
        this.cardPointsValue = document.createElement('div');
        this.cardPointsValue.classList.add('card-points-value');
        this.cardPoints.append(this.cardPointsValue);

        // add card points text
        this.cardPointsText = document.createElement('div');
        this.cardPointsText.classList.add('card-points-text');
        this.cardPoints.append(this.cardPointsText);
    }


    uppdateComponent(card) {
        if (card === null) {
            return;
        }

        this.resetComponent()

        this.card = card;

        // text and images
        this.cardName.textContent = this.card.name;
        this.cardImg.src = this.card.getCardImage();
        this.cardDescriptionText.textContent = this.card.story;
        this.cardPointsValue.textContent = this.card.points > 0 ? `+${this.card.points}` : this.card.points;
        this.cardPointsText.textContent = Math.abs(this.card.points) == 1 ? 'punct' : 'puncte';

        // classes
        this.cardContainer.classList.add(this.card.color);
        this.cardPoints.classList.add(this.card.color);
    }

    resetComponent() {
        if (this.card === null) {
            return;
        }

        this.cardContainer.classList.remove(this.card.color);
        this.cardPoints.classList.remove(this.card.color);
    }
}
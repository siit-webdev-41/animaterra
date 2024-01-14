import DrawnCardComponent from "./drawn-card-component.js";

export default class Player {
    constructor(scoreItem, playerSide, drawnCardClass) {
        this.scoreItem = scoreItem;
        this.playerSide = playerSide;
        this.drawnCardComponent = new DrawnCardComponent(null, [
            drawnCardClass,
        ]);
        this.playerSide.append(this.drawnCardComponent.cardContainerElement);
        this.score = 0;
    }

    updateScore(card) {
        this.score += card.points;
        this.scoreItem.textContent = this.score;
    }

    updateDrawnCard(card) {
        this.drawnCardComponent.uppdateComponent(card);
    }
}

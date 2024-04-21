import DrawnCardComponent from "./drawn-card-component.js";

export default class GameComponent {

    constructor(game, playerCardsContainerDomElement) {
        this.game = game;

        this.playerCardsContainerDomElement = playerCardsContainerDomElement;

        // components displaying the drawn cards for each player
        this.playerDrawnCardsComponents = [];

        // create the UI elements for the players
        this.createPlayersComponents();

        // create the UI elements for the game cards
        this.createGameCardsComponents();
    }


    createPlayersComponents(){
        this.game.players.forEach(() => {
            const drawnCardComponent = new DrawnCardComponent(null);
            this.playerDrawnCardsComponents.push(drawnCardComponent);
            this.playerCardsContainerDomElement.append(drawnCardComponent.cardContainerElement);
        });
    }


    createGameCardsComponents(){
        // @TODO
    }


    update(){
        
    }

}
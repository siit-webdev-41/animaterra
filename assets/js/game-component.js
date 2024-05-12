import DrawnCardComponent from "./drawn-card-component.js";
import PlayerComponent from "./player-component.js";

export default class GameComponent {

    constructor(game, playersProfileContainerDomElement, playerCardsContainerDomElement) {
        this.game = game;

        this.playerCardsContainerDomElement = playerCardsContainerDomElement;
        this.playersProfileContainerDomElement = playersProfileContainerDomElement;

        // components displaying the drawn cards for each player
        this.playerDrawnCardsComponents = [];

        // create the UI elements for the players
        this.createPlayersComponents();

        // create the UI elements for the game cards
        this.createGameCardsComponents();
    }


    createPlayersComponents() {
        const playerComponents = [];
        this.game.players.forEach((player, i) => {
            const playerCardComponent = new PlayerComponent(player, i + 1);
            playerComponents.push(playerCardComponent);
            this.playersProfileContainerDomElement.append(playerCardComponent.mainContainer);
        });
    }


    createGameCardsComponents() {
        this.game.players.forEach(() => {
            const drawnCardComponent = new DrawnCardComponent(null);
            this.playerDrawnCardsComponents.push(drawnCardComponent);
            this.playerCardsContainerDomElement.append(drawnCardComponent.cardContainerElement);
        });
    }


    update() {
        console.log();
        console.log('*********');
        console.log(this.game);

        console.log('===');
        console.log('DRAWN CARDS:');
        console.log(this.game.drawnCards);

        console.log('===SCOREBOARD===');
        console.log(this.game.scoreBoard);
    }

}
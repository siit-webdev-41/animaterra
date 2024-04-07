export default class GameComponent {

    constructor(game) {
        this.game = game;
        console.log(game);

        // create the UI elements for the players
        this.createPlayersComponents();

        // create the UI elements for the game cards
        this.createGameCardsComponents();
    }


    createPlayersComponents(){
        // @TODO
    }


    createGameCardsComponents(){
        // @TODO
    }


    update(){

    }

}
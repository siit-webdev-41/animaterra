export default class Game {
    #scoreBoard = null

    constructor(cardDeck, maxRounds = 25){
        this.cardDeck = cardDeck;
        this.maxRounds = maxRounds;
        this.players = [];
        this.drawnCards = [];
        this.currentRound = 0;
    }


    addPlayer(player){
        this.players.push(player);
        this.drawnCards.push(null);
    }


    newRound(){
        if(this.players.length < 2){
            console.error('The number of players is invalid. Add more players!');
            return;
        }

        if(this.gameStatus.gameOver){
            console.info('Game over!');
            return;
        }

        this.currentRound++;
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].isAlive){
                this.drawnCards[i] = this.cardDeck.lastCard;
                this.players[i].updateScore(this.drawnCards[i].points);
            }
            
        }
    }


    get gameStatus(){
        if(this.players.filter((player) => player.isAlive).length < 1){
            return gameStatusFactory(true, `All the players died!`, null);
        }

        if(this.currentRound == this.maxRounds){
            return gameStatusFactory(true, `End of rounds`, this.scoreBoard[0]);
        }

        if(this.players.filter((player) => player.isAlive).length < 1){
            return gameStatusFactory(true, `A player wins`, this.scoreBoard[0]);
        }

        return gameStatusFactory(false, `Current round: ${this.currentRound}`, null);
    }


    get scoreBoard(){
        this.#scoreBoard = structuredClone(this.players);

        // structuredClone do not copy private properties ;)
        this.players.forEach((player, i) => {
            this.#scoreBoard[i].score = player.score;
        })

        this.#scoreBoard.sort((playerA, playerB) => playerB.score - playerA.score);
        return this.#scoreBoard;
    }
}



function gameStatusFactory(gameOver, statusMsg, winner){
    return {
        gameOver,
        statusMsg,
        winner
    }
}
export default class Game {
    #scoreBoard = null

    constructor(cardDeck, maxRounds){
        this.cardDeck = cardDeck;
        this.maxRounds = maxRounds;
        this.players = [];
        this.currentRound = 0;
    }


    addPlayer(player){
        this.players.push(player);
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
                const drawnCard = this.cardDeck.lastCard;
                this.players[i].updateScore(drawnCard.points);
                console.log(drawnCard);
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

        // structuredClone does not copy private properties ;)
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
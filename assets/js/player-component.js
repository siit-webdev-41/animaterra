export default class PlayerComponent {
    #mainContainer;
    #playerScore;

    constructor(player, index) {
        this.player = player;
        this.index = index;
        this.#mainContainer = null;

        this.create();
    }

    get mainContainer() {
        return this.#mainContainer;
    }

    create() {
        this.#mainContainer = document.createElement(`div`);
        this.#mainContainer.classList.add(
            `player-container`,
            `player-color-${this.player.color}`
        );

        const cardHeader = document.createElement(`div`);
        cardHeader.classList.add(`player-card-header`);
        this.#mainContainer.append(cardHeader);

        const title = document.createElement(`h4`);
        title.textContent = `JUCĂTOR ${this.index}`;
        cardHeader.append(title);

        const playerName = document.createElement(`h4`);
        playerName.textContent = this.player.name;
        cardHeader.append(playerName);

        const cardBody = document.createElement(`div`);
        cardBody.classList.add(`player-card-body`);
        this.#mainContainer.append(cardBody);

        const scoreText = document.createElement(`div`);
        scoreText.classList.add(`score-text`);
        scoreText.textContent = "Puterea armatei:";
        cardBody.append(scoreText);

        this.#playerScore = document.createElement(`div`);
        this.#playerScore.classList.add(`player-score`);
        cardBody.append(this.#playerScore);

        this.update();
    }

    update() {
        this.#playerScore.textContent = this.player.score;
        this.updateComponentUI();
    }

    updateComponentUI() {
        if (this.player.score <= 0) {
            this.#mainContainer.classList.add("zero-score-player");
        }
    }
}

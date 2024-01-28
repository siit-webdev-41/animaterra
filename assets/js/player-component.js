export default class PlayerComponent {
    #mainContainer;

    constructor(player, index) {
        this.player = player;
        this.index = index;
        this.#mainContainer = null;
        
        this.create();
    }

    get mainContainer(){
        return this.#mainContainer;
    }

    create(){
        console.log(this.player);

        this.#mainContainer = document.createElement(`div`);
        this.#mainContainer.classList.add(`player-container`, `player-color-${this.player.color}`);


        const cardHeader = document.createElement(`div`);
        cardHeader.classList.add(`player-card-header`);
        this.#mainContainer.append(cardHeader);

        const title = document.createElement(`h4`);
        title.textContent = `PLAYER ${this.index}`;
        cardHeader.append(title);

        const playerName = document.createElement(`h3`);
        playerName.textContent = `${this.player.name}`;
        cardHeader.append(playerName);
    }

    update() {
        console.log(`UPDATE COMPONENT`);
    }
}

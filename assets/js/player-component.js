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
        this.#mainContainer = document.createElement('div');
        this.#mainContainer.classList.add('player-container');

        const title = document.createElement('h4');
        title.textContent = `PLAYER ${this.index}`;
        this.#mainContainer.append(title);
    }

    update() {
        console.log(`UPDATE COMPONENT`);
    }
}

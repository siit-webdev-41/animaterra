export default class Player {
    #score;

    constructor(name, color, initialScore = 0) {
        this.name = name;
        this.color = color;
        this.#score = initialScore;
    }

    updateScore(points) {
        if (this.isAlive) {
            this.#score += points;
        }

        if (this.#score < 0) {
            this.#score = 0;
        }
    }

    get isAlive() {
        return this.#score > 0;
    }

    get score() {
        return this.#score;
    }
}

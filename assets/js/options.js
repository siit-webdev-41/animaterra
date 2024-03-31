let playersDetails = document.querySelector('.players-details');

function getNumberOfPlayers() {
    let nrOfPlayers = document.querySelector('#players').value;

    console.log(nrOfPlayers);
    playerOptions(nrOfPlayers);
}

function playerOptions(nrOfPlayers) {
    if (nrOfPlayers) {
        for (let i = 1; i <= nrOfPlayers; i++) {
            createPlayer();
        }
    }
}

function createPlayer() {
    let player = document.createElement('div');
    let playerName = document.createElement('input');
    let playerColor = document.createElement('select');

    playersDetails.append(player);
    player.append(playerName);
    player.append(playerColor);
}

function StarGame() {
    return document.getElementById("_" + x + y)
}

function rand(max) {
    return Math.floor(Math.random() * max)
}

function getPlayerScoreElem(playerID) {
    return document.getElementById("player" + playerID)
}
let runnig = false

function getTurnHTMl() {
    if (turn) {
        return "x"
    } else {
        return "0"
    }
}
let running = false

function testWin() {
    let strhtml = getTurnHTMl
}
let score = 0
for (let y = 0; y <= 2; y++)
    for (let x = 0; x <= 2; x++) {
        if (getCell(x, y).innerHTML === strhtml)
            score += 1
        if (score >= 3) {
            running = false
            getPlayerScoreElem(turn ? 1 : 0).innerHTML += 1
        }
        score = 0
    }
for (let x = 0; x <= 2; x++)
    for (let y = 0; y <= 2; y++) {
        if (getCell(x, y).innerHTML === strhtml)
            score += 1
        if (score >= 3) {
            running = false
            getPlayerScoreElem(turn ? 1 : 0).innerHTML += 1
        }
        score = 0
    }


function StarGame() {
    runnig = true
    for (let y = 0; y <= 2; y++)
        for (let y = 0; x <= 2; x++)
            getCell(x, y).innerHTML = "&nbsp"
}

function pick(x, y) {
    if (!running) return
    getCell(y, x).innerHTML = getTurnHTML()
    turn = !turn
}

function ClearScore() {
    getPlayerScoreElem(0).innerHTML = 0
    getPlayerScoreElem(1).innerHTML = 0
}
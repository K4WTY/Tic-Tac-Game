const app = document.getElementById('app')
const game = document.getElementById('game')
const buttonLetterX = document.getElementById('buttonLetterX')
const buttonLetterO = document.getElementById('buttonLetterO')
const gameButton = document.querySelectorAll('#gameButton')

const turn = document.getElementById('turn')

let gameConfig = {
    playerVScpu: false,
    playerLetter: 'X',
    playerCpuLetter: 'O'
}

turn.innerHTML = gameConfig.playerLetter + ' TURN'

let lastPlayer

let gamePostions = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
]

function showGame() {
    app.style.display = 'none'
    game.style.display = 'block'
}

function changeButton() {
    if (this.classList.contains('button-unselected')) {
        this.classList.add('button-selected')
        this.classList.remove('button-unselected')
        if (this.id == 'buttonLetterX') {
            buttonLetterO.classList.add('button-unselected')
            buttonLetterO.classList.remove('button-selected')
            gameConfig.playerLetter = 'X'
            gameConfig.playerCpuLetter = 'O'
            turn.innerHTML = gameConfig.playerLetter + ' TURN'
        } else {
            buttonLetterX.classList.add('button-unselected')
            buttonLetterX.classList.remove('button-selected')
            gameConfig.playerLetter = 'O'
            gameConfig.playerCpuLetter = 'X'
            turn.innerHTML = gameConfig.playerLetter + ' TURN'
        }
    }
    //alert(gameConfig.playerLetter)
}

function startGame() {
    if (this.innerHTML == 'NEW GAME (VS CPU)') {
        gameConfig.playerVScpu = true
        showGame()
        return
    }

    showGame()
}

function checkGame() {
    for (let i = 0; i < 9; i++) {
        if (gamePostions[i] == 0) {
            return true
        }
    }

    return false
}

function whoWin() {
    if (gamePostions[0] == 1 && gamePostions[1] == 1 && gamePostions[2] == 1 || gamePostions[0] == 2 && gamePostions[1] == 2 && gamePostions[2] == 2) {
        if (gamePostions[0] == 1) {
            alert('Player 1 Won')
            window.location.href = ''
            return
        }
        if (gameConfig.playerVScpu) {
            if (gamePostions[0] == 2) {
                alert('CPU Won')
                window.location.href = ''
                return
            }
        }
        alert('Player 2 Won')
        window.location.href = ''
    } else if (gamePostions[3] == 1 && gamePostions[4] == 1 && gamePostions[5] == 1 || gamePostions[3] == 2 && gamePostions[4] == 2 && gamePostions[5] == 2) {
        if (gamePostions[3] == 1) {
            alert('Player 1 Won')
            window.location.href = ''
            return
        }
        if (gameConfig.playerVScpu) {
            if (gamePostions[3] == 2) {
                alert('CPU Won')
                window.location.href = ''
                return
            }
        }
        alert('Player 2 Won')
        window.location.href = ''
    } else if (gamePostions[6] == 1 && gamePostions[7] == 1 && gamePostions[8] == 1 || gamePostions[6] == 2 && gamePostions[7] == 2 && gamePostions[8] == 2) {
        if (gamePostions[6] == 1) {
            alert('Player 1 Won')
            window.location.href = ''
            return
        }
        if (gameConfig.playerVScpu) {
            if (gamePostions[6] == 2) {
                alert('CPU Won')
                window.location.href = ''
                return
            }
        }
        alert('Player 2 Won')
        window.location.href = ''
    } else if (gamePostions[0] == 1 && gamePostions[3] == 1 && gamePostions[6] == 1 || gamePostions[0] == 2 && gamePostions[3] == 2 && gamePostions[6] == 2) {
        if (gamePostions[0] == 1) {
            alert('Player 1 Won')
            window.location.href = ''
            return
        }
        if (gameConfig.playerVScpu) {
            if (gamePostions[0] == 2) {
                alert('CPU Won')
                window.location.href = ''
                return
            }
        }
        window.location.href = ''
        alert('Player 2 Won')
    } else if (gamePostions[1] == 1 && gamePostions[3] == 1 && gamePostions[7] == 1 || gamePostions[1] == 2 && gamePostions[4] == 2 && gamePostions[7] == 2) {
        if (gamePostions[1] == 1) {
            alert('Player 1 Won')
            window.location.href = ''
            return
        }
        if (gameConfig.playerVScpu) {
            if (gamePostions[1] == 2) {
                alert('CPU Won')
                window.location.href = ''
                return
            }
        }
        window.location.href = ''
        alert('Player 2 Won')
    } else if (gamePostions[2] == 1 && gamePostions[5] == 1 && gamePostions[8] == 1 || gamePostions[2] == 2 && gamePostions[5] == 2 && gamePostions[8] == 2) {
        if (gamePostions[2] == 1) {
            alert('Player 1 Won')
            window.location.href = ''
            return
        }
        if (gameConfig.playerVScpu) {
            if (gamePostions[2] == 2) {
                alert('CPU Won')
                window.location.href = ''
                return
            }
        }
        window.location.href = ''
        alert('Player 2 Won')
    } else if (gamePostions[0] == 1 && gamePostions[4] == 1 && gamePostions[8] == 1 || gamePostions[0] == 2 && gamePostions[4] == 2 && gamePostions[8] == 2) {
        if (gamePostions[0] == 1) {
            alert('Player 1 Won')
            window.location.href = ''
            return
        }
        if (gameConfig.playerVScpu) {
            if (gamePostions[0] == 2) {
                alert('CPU Won')
                window.location.href = ''
                return
            }
        }
        window.location.href = ''
        alert('Player 2 Won')
    } else if (gamePostions[2] == 1 && gamePostions[4] == 1 && gamePostions[6] == 1 || gamePostions[2] == 2 && gamePostions[4] == 2 && gamePostions[6] == 2) {
        if (gamePostions[2] == 1) {
            alert('Player 1 Won')
            window.location.href = ''
            return
        }
        if (gameConfig.playerVScpu) {
            if (gamePostions[2] == 2) {
                alert('CPU Won')
                window.location.href = ''
                return
            }
        }
        alert('Player 2 Won')
        window.location.href = ''
    }
}

function gameFunction() {
    if (checkGame() == true) {
        if (gameConfig.playerVScpu) {
            turn.innerHTML = gameConfig.playerCpuLetter + ' TURN'
            this.style.color = '#31C4BF'
            this.innerHTML = gameConfig.playerLetter
            this.removeEventListener('click', gameFunction)
            gamePostions[this.classList] = 1
            whoWin()
            if (checkGame() == false) {
                return
            }
            while (true) {
                let i = Math.floor(Math.random() * 9)
                let buttonRandom = document.getElementById('gameArea' + i)
                if (gamePostions[i] == 0) {
                    turn.innerHTML = gameConfig.playerLetter + ' TURN'
                    gamePostions[i] = 2
                    buttonRandom.style.color = '#F2B138'
                    buttonRandom.innerHTML = gameConfig.playerCpuLetter
                    buttonRandom.removeEventListener('click', gameFunction)
                    whoWin()
                    break
                }
            }
        } else {
            if (lastPlayer == gameConfig.playerLetter) {
                this.style.color = '#F2B138'
                this.innerHTML = gameConfig.playerCpuLetter
                this.removeEventListener('click', gameFunction)
                gamePostions[this.classList] = 2
                turn.innerHTML = gameConfig.playerLetter + ' TURN'
                lastPlayer = gameConfig.playerCpuLetter
                whoWin()
                return
            }

            this.style.color = '#31C4BF'
            this.innerHTML = gameConfig.playerLetter
            this.removeEventListener('click', gameFunction)
            gamePostions[this.classList] = 1
            turn.innerHTML = gameConfig.playerCpuLetter + ' TURN'
            lastPlayer = gameConfig.playerLetter
            whoWin()
        }
    }
}

buttonLetterX.addEventListener('click', changeButton)
buttonLetterO.addEventListener('click', changeButton)

gameButton.forEach(function(e) {
    e.addEventListener('click', startGame)
})

for (let i = 0; i < 9; i++) {
    document.getElementById('gameArea' + i).addEventListener('click', gameFunction)
}

// gameArea.forEach(function(e) {
//     e.addEventListener('click', gameFunction)
// })

// const gameArea = document.querySelectorAll('#gameArea')
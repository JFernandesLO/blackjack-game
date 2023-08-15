let hasBlackjack = false
let sum = 0
let cards = []
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let player = {
    name: "Julia",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips 

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber >= 11) {
        randomNumber = 10
    }
    else if(randomNumber === 1) {
        randomNumber = 11
    } 
    return randomNumber
}

function startGame() {
    renderGame()
}

function renderGame() {
    let isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    cardsEl.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if(isAlive === true && hasBlackjack === false){
        let card = getRandomCard()
        card.push(card)
        sum += card
        renderGame()
    }
}
//Object
/*
let person = {
    name: "Mosh",
    age: 30
}
person.name = "John";
console.log(person.name);*/

/*
// array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);

let person = {
    name: "Mosh",
    age: 30
}

function greet(person) {
    console.log('Hello ' + person.name + ' ' + person.age);
}

greet(person);*/
function playGame() {
    let userChoice = prompt('Do you choose rock, paper, or scissors?');

    if (userChoice === null || userChoice === "" || (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors')  ) {
        alert('Invalid choice. Please choose rock, paper, or scissors.');
        return;
    }
    let computerChoice = pickComputerMove();
    document.getElementById('computerPlay').innerHTML = 'Computer play: ' + computerChoice;
    document.getElementById('userPlay').innerHTML = 'You play: ' + userChoice;

    let result = determineWinner(userChoice, computerChoice);

    document.getElementById('winner').innerHTML = 'Winner: ' + result;
}

function pickComputerMove() {
    let computerChoice = Math.random();

    if (computerChoice < 0.34) {
        return 'rock';
    } else if (computerChoice <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'It\'s a tie!';
    } else if ((user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}
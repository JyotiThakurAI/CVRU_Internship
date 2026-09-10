// ------------------------------
// Task 1: Area of Rectangle
// ------------------------------

function rectangleArea(length, width) {
    return length * width;
}

let length = 10;
let width = 5;

let area = rectangleArea(length, width);

console.log(area);


// ------------------------------
// Task 2: Voter Eligibility
// ------------------------------

const checkVoter = (age) => {
    if (age > 18) {
        return "Can Vote";
    } else {
        return "Not Eligible to Vote";
    }
};

let voterAge = 20;

let voterResult = checkVoter(voterAge);

console.log(voterResult);


// ------------------------------
// Task 3: Display User Name
// ------------------------------

let userName = prompt("Enter your name:");

let welcomeMessage = `Welcome, ${userName}!`;

document.getElementById("welcome").innerText = welcomeMessage;
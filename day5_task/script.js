// TASK 1

const text = document.getElementById("text");

document.getElementById("redBtn").addEventListener("click", function() {
    text.style.color = "red";
});

document.getElementById("greenBtn").addEventListener("click", function() {
    text.style.color = "green";
});

document.getElementById("blueBtn").addEventListener("click", function() {
    text.style.color = "blue";
});

document.getElementById("fontFamily").addEventListener("change", function() {
    text.style.fontFamily = this.value;
});

let size = 16;

document.getElementById("increase").addEventListener("click", function() {
    size = size + 2;
    text.style.fontSize = size + "px";
});

document.getElementById("decrease").addEventListener("click", function() {
    size = size - 2;
    text.style.fontSize = size + "px";
});

const styleText = document.getElementById("styleText");

styleText.addEventListener("mouseover", function() {
    styleText.style.fontWeight = "bold";
    styleText.style.fontStyle = "italic";
    styleText.style.textDecoration = "underline";
});

styleText.addEventListener("mouseout", function() {
    styleText.style.fontWeight = "normal";
    styleText.style.fontStyle = "normal";
    styleText.style.textDecoration = "none";
});


// TASK 2

const form = document.getElementById("registrationForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;
    const terms = document.getElementById("terms").checked;

    if (
        firstName === "" ||
        lastName === "" ||
        mobile === "" ||
        email === "" ||
        course === "" ||
        !terms
    ) {
        message.textContent = "Please fill all required fields.";
        message.style.color = "red";
    }
    else {
        message.textContent = "Form submitted successfully!";
        message.style.color = "green";
    }
});


// TASK 3

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

document.getElementById("add").addEventListener("click", function() {

    if (num1.value === "" || num2.value === "") {
        result.textContent = "Please enter both numbers.";
    }
    else {
        result.textContent = Number(num1.value) + Number(num2.value);
    }
});

document.getElementById("subtract").addEventListener("click", function() {

    if (num1.value === "" || num2.value === "") {
        result.textContent = "Please enter both numbers.";
    }
    else {
        result.textContent = Number(num1.value) - Number(num2.value);
    }
});

document.getElementById("multiply").addEventListener("click", function() {

    if (num1.value === "" || num2.value === "") {
        result.textContent = "Please enter both numbers.";
    }
    else {
        result.textContent = Number(num1.value) * Number(num2.value);
    }
});

document.getElementById("divide").addEventListener("click", function() {

    if (num1.value === "" || num2.value === "") {
        result.textContent = "Please enter both numbers.";
    }
    else if (Number(num2.value) === 0) {
        result.textContent = "Cannot divide by zero.";
    }
    else {
        result.textContent = Number(num1.value) / Number(num2.value);
    }
});
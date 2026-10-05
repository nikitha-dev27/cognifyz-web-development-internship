// 1. Change button color

const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", function () {

    if (colorButton.style.backgroundColor === "green") {

        colorButton.style.backgroundColor = "blue";

    } else {

        colorButton.style.backgroundColor = "green";

    }

});


// 2. Show greeting according to current time

const greetingButton = document.getElementById("greetingButton");

greetingButton.addEventListener("click", function () {

    const currentHour = new Date().getHours();

    let greeting;

    if (currentHour < 12) {

        greeting = "Good morning! Have a nice day.";

    } else if (currentHour < 17) {

        greeting = "Good afternoon! Keep learning.";

    } else if (currentHour < 21) {

        greeting = "Good evening! Have a great evening.";

    } else {

        greeting = "Good night! Have a good rest.";

    }

    alert(greeting);

});


// 3. Add two numbers

const addButton = document.getElementById("addButton");

addButton.addEventListener("click", function () {

    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;

    const result = document.getElementById("result");

    if (number1 === "" || number2 === "") {

        result.textContent = "Result: Please enter both numbers.";

        return;
    }

    const sum = Number(number1) + Number(number2);

    result.textContent = "Result: " + sum;

});
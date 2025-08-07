//=====Task1=====

function multiply(num1 , num2){
    return num1*num2;
}

function displayResult(result){
    console.log("the result is :",result);
}

function calculate(number1 , number2 , operation){
    var result =  operation(number1, number2)
    displayResult(result);

}
calculate(2,5,multiply)

//====Task2=====

// 1. setTimeout Example
function greetUser () {
    setTimeout(() => {
        console.log("Hello, User!");
    }, 3000); // 3 seconds
}

// Call the greetUser  function
greetUser ();

// 2. setInterval Example
function countdown() {
    let count = 10;
    const intervalId = setInterval(() => {
        console.log(count);
        count--;

        // 3. Clear setInterval after 5 seconds
        if (count < 0) {
            clearInterval(intervalId);
            console.log("Time's up!");
        }
    }, 1000); // 1 second
}

// Call the countdown function
countdown();

// 4. Clear setTimeout Example
const timeoutId = setTimeout(() => {
    console.log("This will be cleared!");
}, 5000); // 5 seconds

// Clear the setTimeout after 2 seconds
setTimeout(() => {
    clearTimeout(timeoutId);
    console.log("The timeout has been cleared before it executed.");
}, 2000); // 2 seconds

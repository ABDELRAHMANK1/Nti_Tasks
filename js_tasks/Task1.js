// ======Task 1======

//1
var name = "abdelrahman ";
var age = 20;
var is_man = true;
var graduated = null;
var job = undefined;
//2
console.log(name);
console.log(age);
console.log(is_man);
console.log(graduated);
console.log(job);
//3
console.log(typeof name);
console.log(typeof age);
console.log(typeof is_man);
console.log(typeof graduated);
console.log(typeof job);
//4
var first_name = "abdelrahman";
var last_name = "khaled";
console.log("the full name is " + first_name + " " + last_name);
console.log(`the full name is ${first_name} ${last_name}`);

// =====Task 2=====

function check_login() {
    // Get values from input fields
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    
    // Validation checks
    if (username.length === 0) {
        window.alert("Username is required");
    } else if (password.length < 8) {
        window.alert("Password must be at least 8 characters");
    } else {
        // Validation successful
        console.log("Validation successful!");
        console.log("Username:", username);
        console.log("Password:", password);
        
        // You could add further processing here
        alert("Form submitted successfully!");
    }
}

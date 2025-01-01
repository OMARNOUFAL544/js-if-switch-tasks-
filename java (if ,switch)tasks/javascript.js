//    task 1


var age = 27;
if (age > 18) {
    document.write("You are an adult<br>");
}

//    task 2


var score = 45;
if (score <= 50) {
    document.write("You failed the test<br>");
}

//    task 3


var name = "john";
if (name === "john") {
    document.write("Hello John<br>");
}

//  task   4


var day = "monday";
if (day !== "saturday" && day !== "sunday") {
    document.write("It's a weekday<br>");
}

//  task   5


var num = 4;
if (num % 2 === 0) {
    document.write("The number is even<br>");
}

//   task  6


var char = "a";
if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
    document.write("It's a letter<br>");
}

//   task  7


var list = [1, 2, 3];
if (Array.isArray(list)) {
    document.write("It's an array<br>");
}

//   task  8


var x = 5;
if (x > 0) {
    document.write("x is a positive number<br>");
}

//   task  9


var y = -5;
if (y < 0) {
    document.write("y is a negative number<br>");
}

//   task  10


var z = 9;
if (z % 3 === 0) {
    document.write("z is a multiple of 3<br>");
}

//   task  11
let GPA = "very good";
switch (GPA.toLocaleLowerCase()) {
    case "excellent":
        document.write("Excellent<br>");
        break;
    case "very good":
        document.write("Very Good<br>");
        break;
    case "good":
        document.write("Good<br>");
        break;
    case "failed":
        document.write("Failed<br>");
        break;
    default:
        document.write("Keep going<br>");
}

   //  task 12
let month = "january";
if (["december", "january", "february"].includes(month.toLowerCase())) {
    document.write(`${month} is a winter month<br>`);
}

//     task 13
var password = "0786913756";
if (password.length >= 8) {
    document.write("Your password is strong<br>");
}


//     task 14
let enteredEmail = "admin@admin.com";
let enteredPassword = "12345Admin";
const correctEmail = "admin@admin.com";
const correctPassword = "12345Admin";

if (enteredEmail !== correctEmail) {
    document.write("Incorrect email<br>");
} else if (enteredPassword !== correctPassword) {
    document.write("Incorrect password<br>");
} else {
    document.write("Welcome  <br>");
}




//     task 15

document.writeln(Number.isInteger("4"))
document.writeln(Number.isInteger( 4 ))
document.writeln(Number.isInteger("4fdf"))
document.writeln(Number.isInteger("1.5"))
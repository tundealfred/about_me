"use script";

let question1 = prompt(
  "Are you a Software Developer by trade ? (yes(y)/no(n)"
).toLowerCase();

if (question1 === "y" || question1 === "yes") {
  alert("Yes");
} else if (question1 === "n" || question1 === "no") {
  alert("No");
} else {
  alert("Please try Again, Enter yes(y) or no(n).");
}
console.log(question1);

let question2 = prompt(
  "Have you worked in tech for more than 2 years? (yes(y)/no(n)"
).toLowerCase();

if (question2 === "y" || question2 === "yes") {
  alert("Yes");
} else if (question2 === "n" || question2 === "no") {
  alert("No");
} else {
  alert("Please try Again, Enter yes(y) or no(n).");
}
console.log(question2);

let question3 = prompt(
  "Are you passionate about Software Development? (yes(y)/no(n)"
).toLowerCase();

if (question3 === "y" || question3 === "yes") {
  alert("Yes");
} else if (question3 === "n" || question3 === "no") {
  alert("No");
} else {
  alert("Please try Again, Enter yes(y) or no(n).");
}
console.log(question3);

let question4 = prompt(
  "Do you hold a degree or certification? (yes(y)/no(n)"
).toLowerCase();

if (question4 === "y" || question4 === "yes") {
  alert("Yes");
} else if (question4 === "n" || question4 === "no") {
  alert("No");
} else {
  alert("Please try Again, Enter yes(y) or no(n).");
}
console.log(question4);

let question5 = prompt(
  "Are you a good Communication? (yes(y)/no(n)"
).toLowerCase();

if (question5 === "y" || question5 === "yes") {
  alert("Yes");
} else if (question5 === "n" || question5 === "no") {
  alert("No");
} else {
  alert("Please try Again, Enter yes(y) or no(n).");
}
console.log(question5);

let message;
let username = prompt("What is your name?");
while (!username || username.trim() === "") {
  username = prompt("Try again!, Please enter your NAME!!!");
}

message = "Hiya, " + username + ". Welcome to my About me page";
console.log(message);
document.write(message);

"use script";

alert("Hello!!!, Interested in a guessing game!");

let score = 0;

let question1 = prompt("Is my name Babatunde ? (yes(y)/no(n)").toLowerCase();

if (question1 === "y" || question1 === "yes") {
  alert("Yes - Correct");
  score++;
} else if (question1 === "n" || question1 === "no") {
  alert("No - Wrong Answer");
} else {
  alert("Please try Again, Enter yes(y) or no(n).");
}
console.log(question1);

let question2 = prompt(
  "Is Software Development a good career? (yes(y)/no(n)"
).toLowerCase();

if (question2 === "y" || question2 === "yes") {
  alert("Yes - Correct!");
  score++;
} else if (question2 === "n" || question2 === "no") {
  alert("No - Wrong Answer");
} else {
  alert("Please try Again, Enter yes(y) or no(n).");
}
console.log(question2);

let question3 = prompt(
  "Is the bootcamp for 10 or more weeks? (yes(y)/no(n)"
).toLowerCase();

if (question3 === "y" || question3 === "yes") {
  alert("Yes - Correct");
  score++;
} else if (question3 === "n" || question3 === "no") {
  alert("No - Wrong Answer");
} else {
  alert("Please try Again, Enter yes(y) or no(n).");
}
console.log(question3);

let question4 = prompt(
  "Is Techeducators located in 5 areas in the UK? (yes(y)/no(n)"
).toLowerCase();

if (question4 === "y" || question4 === "yes") {
  alert("Yes - Correct");
  score++;
} else if (question4 === "n" || question4 === "no") {
  alert("No - Wrong Answer");
} else {
  alert("Please try Again, Enter yes(y) or no(n).");
}
console.log(question4);

let question5 = prompt(
  "Is pineapple bad on pizza? (yes(y)/no(n)"
).toLowerCase();

if (question5 === "y" || question5 === "yes") {
  alert("Yes - Correct");
  score++;
} else if (question5 === "n" || question5 === "no") {
  alert("No - Wrong Answer");
} else {
  alert("Please try Again, Enter yes(y) or no(n).");
}
console.log(question5);

// Question 6
let correctNumber = 50;
for (let attempts = 1; attempts <= 4; attempts++) {
  let guess = parseInt(prompt("Guess the number (between 1 and 100):"));
  if (guess === correctNumber) {
    alert("Congratulations! You guessed the correct number.");
    score++;
    break;
  } else if (guess < correctNumber) {
    alert("Too low. Try again.");
  } else {
    alert("Too high. Try again.");
  }

  if (attempts === 4) {
    alert("Oops!!!. The Correct number is " + correctNumber + ".");
  }
}

// Question 7
let possibleAnswers = ["apple", "banana", "cherry", "grape", "orange"];
for (let attempts = 1; attempts <= 6; attempts++) {
  let guess = prompt("Guess a fruit:").toLowerCase();
  if (possibleAnswers.includes(guess)) {
    alert("Correct! " + guess + " is one of the correct answers.");
    score++;
    break;
  } else {
    alert("Wrong answer. Try again.");
  }

  if (attempts === 6) {
    alert("Oops!!!. The correct answer is " + possibleAnswers.join(", "));
  }
}

alert("Thanks for Playing. You got " + score + " out of 7 questions correct.");

let scoreMessage = " You got " + score + " out of 7 questions correct!";

let message;

let username = prompt("What is your name?");
while (!username || username.trim() === "") {
  username = prompt("Try again!, Please enter your NAME!!!");
}

message = "Hiya, " + username + ". Welcome to my About me page. ";

document.writeln(message);
document.writeln(scoreMessage);

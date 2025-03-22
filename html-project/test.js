/* Beginner Challenge */

const bookList = [
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Moby Dick", author: "Herman Melville" },
];

/* Do all of these using proper ES6 syntax
  Using the following array of objects,
  */
// (1) Write an arrow function that adds a new entry to bookList

const addEntry = (entry) => {
  bookList.push(entry);
};
addEntry({ title: "Test", author: "Test test" });
console.log(bookList);

// (2) Write an arrow function that removes a specific book from the bookList

const removeEntry = (index) => {
  bookList.splice(index, 1);
};
removeEntry(-1);
console.log(bookList);

// (3) Write an arrow function that lists out all the books or all the authors in the book list */

const listBooks = (choice) => {
  if (choice === "books") {
    bookList.forEach((book) => console.log(book.title));
  } else if (choice === "authors") {
    bookList.forEach((book) => console.log(book.author));
  } else {
    console.log("Invalid choice");
  }
};
listBooks("books");
listBooks("authors");

/*
  /* Intermediate Challenge */

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
    number is positive or negative using a ternary operator (assume the number will never be zero) */
let num = -1;
const result = num > 0 ? "positive" : "negative";
console.log(result);

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
    the week it is i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

day = "Friday";
switch (day) {
  case "Monday":
    console.log("good luck");
    break;
  case "Wednesday":
    console.log("hump day");
    break;
  case "Friday":
    console.log("party");
    break;
  default:
    break;
}

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
    number from 1 up to that number
    ex. sumUp(7) = 28 */

const sumUp = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumUp(7));

/* Harder Challenge */

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
      me what I should wear accordingly */

const tempWear = (temp) => {
  temp = (temp * 9) / 5 + 32;
  let result = "";
  if (temp >= 55) {
    result = "Wear a t-shirt";
  } else if (temp > 32 && temp < 55) {
    result = "Wear a jacket";
  } else if (temp <= 32) {
    result = "Wear a lot of layers!";
  }
  return result;
};
console.log(tempWear(0));
console.log(tempWear(12));
console.log(tempWear(30));

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
    using .forEach() */

function truthy(array) {
  let values = 0;
  array.forEach((val) => {
    if (val) {
      values++;
    }
  });
  console.log(values);
}
truthy([0, "", "hello", 1]);

/* (9) Using the map function and arrow syntax, return an array of object that contain a fullName field
    and an averageGrade field representing the letter grade that corresponds to their GPA */

const attendance = [
  { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
  { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
  { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
  { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
  { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
  { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
  { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
];

let newObj = attendance.map((obj) => {
  let grade = "";
  if (obj.gpa === 4.0) {
    grade = "A";
  } else if (obj.gpa < 4.0 && obj.gpa >= 3.7) {
    grade = "A-";
  } else if (obj.gpa < 3.7 && obj.gpa >= 3.3) {
    grade = "B+";
  } else if (obj.gpa < 3.3 && obj.gpa >= 3.0) {
    grade = "B";
  } else if (obj.gpa < 3.0 && obj.gpa >= 2.7) {
    grade = "B-";
  } else if (obj.gpa < 2.7 && obj.gpa >= 2.3) {
    grade = "C+";
  } else if (obj.gpa < 2.3 && obj.gpa >= 2.0) {
    grade = "C";
  } else if (obj.gpa < 2.0 && obj.gpa >= 1.7) {
    grade = "C-";
  } else if (obj.gpa < 1.7 && obj.gpa >= 1.3) {
    grade = "D+";
  } else if (obj.gpa < 1.3 && obj.gpa >= 1.0) {
    grade = "D";
  } else if (obj.gpa < 1.0 && obj.gpa >= 0.7) {
    grade = "D-";
  } else if (obj.gpa < 0.7) {
    grade = "F";
  }
  return { fullName: obj.firstName + obj.lastName, averageGrade: grade };
});
console.log(newObj);

/* Hardest Challenge (Don't do this without completing harder challenges) */

/* Write a function that solves the "every number eventually equals 4" puzzle. The output should be
      an array of the path you took to make it equal four
      ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
      For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

// assuming num < 1,000,000. Pattern holds with higher numbers but just requires more checks
// does not support leading zeros

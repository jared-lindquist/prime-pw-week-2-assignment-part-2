// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We have made a variable called name and assigned it the value of the string 'Dane'. 
// Then we have a conditional that checks if the string value assigned to name is equal to (literally) the string 'Mary'.
// If name is equal to 'Mary' the console will log, 'Hi, Mary!' If they are not equal, the console will log,
// 'How do you do?' Since the value assigned to the name variable != 'Mary', the console will
// log 'How do you do?' 
// 
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We have a variable declared (secret) but not yet assigned a value, and another variable (code) assigned a 
// number value of 123. Then we have an if statement checking if code is literally equal to 123. If true, then
// assigns a string value 'super' to the variable secret, as well as a function multiplying the value of code times 2.
// Then we have another if statement checking if the new value of code is greater than 250, and if it is,
// the console will log the variable secret which would be 'duper' if true. Since the value of code is never more than 250
//(first 123, then 246), the console will log the string 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We have an 'if, else if, else' statement with compund conditionals. First checking if isStudent is true AND if zip is greater than 80000.
// If both are true, the console will log 'You're a student on the West Coast!' Then checking if isStudent is false OR
// age is less than 30. If either condition is true the console will log 'What are your hobbies?'. Then checking if
// isStudent is true. If true the console will log 'Welcome to Prime!' Then an else statement. If none of the above conditionals is true,
// the console will log 'How about the weather?' Since the first truthy conditional is 'isStudent === true' the console
// will log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/
//FIX: The above outlines that colorOne AND colorTwo should be set to 'purple', but our code only sets colorOne.
// Inside the curly braces, after the colorOne = 'purple'; we need to add a line colorTwo = 'purple';



//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/
// FIX: Since we are checking if temp is higher than 39 AND time >= 4, we need to use the && operator instead of || 
// (|| only checks if one or the other is true)




//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
//FIX: Our if statement is incorrect and out of order. As written, we are checking if minAge <= age, 
//where we should be checking if age >= minAge. The code should look like this:

/*
let age = 21;
const minAge = 21;

if(age >= minAge) {
  console.log('enter');
} else {
  console.log('no entry');
}
*/


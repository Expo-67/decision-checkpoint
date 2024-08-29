// Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not.
// Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.
function LeapYearChecker(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

const year = prompt("Enter year");
LeapYearChecker(year);
// Ticket Pricing: Write a program that prompts the user to enter their age and
// then determines the price of a movie ticket based on the following criteria:

// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20

const age = prompt("Enter age");

// Convert the input to a number
const ageNumber = Number(age);

if (ageNumber <= 12) {
  console.log("$10 Children");
} else if (ageNumber >= 13 && ageNumber <= 17) {
  console.log("$15 Teenagers");
} else if (ageNumber >= 18) {
  console.log("$20 Adult");
} else {
  console.log("Invalid age entered.");
}

//Recursion : Write a recursive function to calculate the result of raising a number to a given power.
function power(base, exponent) {
  // Base case: any number to the power of 0 is 1
  if (exponent === 0) {
    return 1;
  }
  // Recursive case: multiply the base by the result of the function with exponent - 1
  return base * power(base, exponent - 1);
}

// Example usage:
console.log(power(2, 3));

// Palindrome Checker: Create a recursive function to check if a given string is a palindrome
// (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization
function isPalindrome(str) {
  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Define the recursive function
  function checkPalindrome(cleanedStr) {
    // Base case: if the string is empty or has one character, it's a palindrome
    if (cleanedStr.length <= 1) {
      return true;
    }

    // Recursive case: compare first and last characters
    if (cleanedStr[0] === cleanedStr[cleanedStr.length - 1]) {
      // If they match, recursively check the substring excluding the first and last characters
      return checkPalindrome(cleanedStr.slice(1, -1));
    } else {
      return false; // If the first and last characters don't match, it's not a palindrome
    }
  }

  return checkPalindrome(cleanedStr);
}

console.log(isPalindrome("hello")); // false

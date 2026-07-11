// Run with: node exercises.js
// Fill in each function, then check the output below.

// ─── Exercise 1 ──────────────────────────────────────────────────────────────
// Display the current day and time.
// Sample output:
//   Today is : Tuesday.
//   Current time is : 10 PM : 30 : 38

function exercise1() {
  let now = new Date()
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dayName = days[now.getDay()]
  let hours = now.getHours();
  let mins = now.getMinutes();
  let seconds = now.getSeconds();
  let period = hours >= 12 ? "PM" : "AM";
  let hours12 = hours % 12 || 12;
  console.log(`Today is : ${dayName}.`);
  console.log(`Current time is : ${hours12} ${period} : ${mins} : ${seconds}`);


}
//exercise1()

// ─── Exercise 2 ──────────────────────────────────────────────────────────────
// NOTE: "Print the current window contents" is browser-only (uses window.print()).
// In Node.js we can simulate by logging some text as a stand-in.
function exercise2() {
  // TODO: in a browser you'd call window.print()
  console.log("(browser only) window.print() would open the print dialog.");
}

// ─── Exercise 3 ──────────────────────────────────────────────────────────────
// Get the current date in these formats:
//   mm-dd-yyyy  and  mm/dd/yyyy
//   dd-mm-yyyy  and  dd/mm/yyyy

function exercise3() {
  let now = new Date();
  let month = String(now.getMonth() + 1).padStart(2, "0");
  let date = String(now.getDate()).padStart(2, "0");
  let year = String(now.getFullYear()).padStart(2, "0");


  console.log(`${month}/${date}/${year}`);
  console.log(`${month}-${date}-${year}`);
  console.log(`${date}/${month}/${year}`);
  console.log(`${date}-${month}-${year}`);


}

//exercise3()

// ─── Exercise 4 ──────────────────────────────────────────────────────────────
// Find the area of a triangle whose sides are 5, 6, and 7.
// Hint: use Heron's formula — s = (a+b+c)/2, area = sqrt(s*(s-a)*(s-b)*(s-c))

function exercise4() {
  let a = 5;
  let b = 6;
  let c = 7;

  let s = (a + b + c) / 2
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(area);

}

//exercise4()

// ─── Exercise 5 ──────────────────────────────────────────────────────────────
// Rotate the string 'w3resource' to the right:
// each step removes the last character and puts it at the front.
// Print each rotation.

function exercise5() {
  let str = 'w3resource';

  for (
    let i = 1;
    i <= str.length;
    i++
  ) {
    str = str.slice(-1) + str.slice(0, -1)
    console.log(str);


  }

}
//exercise5();
// ─── Exercise 6 ──────────────────────────────────────────────────────────────
// Given a year, return true if it is a leap year (Gregorian calendar).
// A year is a leap year if divisible by 4,
// except for century years which must be divisible by 400.

function exercise6(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true
  }
  else {
    return false
  }
}
//console.log(exercise6(1900))
// ─── Exercise 7 ──────────────────────────────────────────────────────────────
// Find all years between 2014 and 2050 where January 1 falls on a Sunday.

function exercise7() {
  for (
    let year = 2014;
    year <= 2050;
    year++
  ) {
    if (new Date(year, 0, 1).getDay() === 0)
      console.log(year);

  }
}

//exercise7();

// ─── Exercise 8 ──────────────────────────────────────────────────────────────
// Pick a random integer between 1 and 10.
// Compare it to a guess and return "Good Work" if they match, else "Not matched".
// (In a browser you'd use prompt(); here we pass the guess as a parameter.)

function exercise8(guess) {
  let randomInt = Math.floor(Math.random() * 10) + 1;
  console.log(randomInt);

  return randomInt === guess ? "Good Work" : "Not Matched";

}

//console.log(exercise8(1));


// ─── Exercise 9 ──────────────────────────────────────────────────────────────
// Calculate the number of days left before Christmas (Dec 25).

function exercise9() {
  let today = new Date()
  let year = today.getFullYear()
  let christmas = new Date(year, 11, 25);

  let daysLeft = Math.floor((christmas - today) / (1000 * 60 * 60 * 24));

  console.log(daysLeft)
}

//exercise9()

// ─── Exercise 10 ─────────────────────────────────────────────────────────────
// Given two numbers, return both their product and their quotient.
// (In a browser this would come from a form; here pass them as parameters.)

function exercise10(a, b) {
  let product = a * b;
  let quotient = a / b;
  return { product, quotient }
}

//console.log(exercise10(6, 2))

// ─── Exercise 11 ─────────────────────────────────────────────────────────────
// Convert temperatures between Celsius and Fahrenheit.
// Formula: c/5 = (f-32)/9
// Expected output:
//   60°C is 140°F
//   45°F is 7.222222222222222°C

function celsiusToFahrenheit(c) {
  let f = (c * 9 / 5) + 32;

  console.log(`${c}°C is ${f}°F`)
}

function fahrenheitToCelsius(f) {
  let c = (f - 32) * 5 / 9;
  console.log(`${f}°F is ${c}°C`)
}

// celsiusToFahrenheit(60);
// fahrenheitToCelsius(45)

// ─── Exercise 12 ─────────────────────────────────────────────────────────────
// NOTE: Getting the current URL requires a browser (window.location.href).
function exercise12() {
  // TODO: in a browser → return window.location.href;
  console.log("(browser only) window.location.href returns the current URL.");
}

// ─── Exercise 13 ─────────────────────────────────────────────────────────────
// Create a variable with a user-defined name and assign it a value.
// Simulate with an object used as a dynamic key-value store.

function exercise13(varName, value) {
  let obj = {};
  obj[varName] = value;

  console.log(obj)
}

//exercise13("color", "blue")

// ─── Exercise 14 ─────────────────────────────────────────────────────────────
// Given a filename string, return its extension (e.g. "photo.jpg" → "jpg").

function exercise14(filename) {
  let sliceCount = filename.lastIndexOf(".");
  let fileNameExtension = filename.slice(sliceCount + 1)
  console.log(fileNameExtension);

}

//exercise14("photo.jpg")

// ─── Exercise 15 ─────────────────────────────────────────────────────────────
// Return the difference between n and 13.
// If n > 13, return double the absolute difference.

function exercise15(n) {
  if (n > 13) {
    console.log((n - 13) * 2);

  } else {
    console.log(n - 13);

  }
}

//exercise15(14)

// ─── Exercise 16 ─────────────────────────────────────────────────────────────
// Return the sum of two integers.
// If both values are equal, return triple their sum.

function exercise16(a, b) {
  if (a === b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
}

// ─── Exercise 17 ─────────────────────────────────────────────────────────────
// Return the absolute difference between n and 19.
// If n > 19, return triple the absolute difference.

function exercise17(n) {
  if (n > 19) {
    return Math.abs((n - 19) * 3);

  } else {
    return Math.abs((n - 19));

  }
}

// ─── Exercise 18 ─────────────────────────────────────────────────────────────
// Return true if one of the two numbers is 50, or if their sum is 50.

function exercise18(a, b) {
  if (a === 50 || b === 50 || a + b === 50) {
    return true
  }
  return false
}
//console.log(exercise18(25, 25));

// ─── Exercise 19 ─────────────────────────────────────────────────────────────
// Return true if n is within 20 of 100 OR within 20 of 400.

function exercise19(n) {
  if (n >= 80 && n <= 120 || n >= 380 && n <= 420) {
    return true
  }
  return false
}

// ─── Exercise 20 ─────────────────────────────────────────────────────────────
// Return true if one of the two integers is positive and the other is negative.

function exercise20(a, b) {
  if (a * b < 0) {
    return true
  }
  return false
}

// ─── Exercise 21 ─────────────────────────────────────────────────────────────
// Return a new string by adding "Py" in front of the given string.
// If the string already starts with "Py", return it unchanged.

function exercise21(str) {
  if (str.startsWith("Py")) {
    return str
  } else {
    return "Py" + str
  }
}

console.log(exercise21("thon"));

// ─── Exercise 22 ─────────────────────────────────────────────────────────────
// Remove the character at position `pos` (0-indexed) from the string.

function exercise22(str, pos) {
  let newStr = str.slice(0, pos) + str.slice(pos + 1)

  console.log(newStr);

}

exercise22("hello", 2)

// ─── Exercise 23 ─────────────────────────────────────────────────────────────
// Swap the first and last characters of a string.
// The string length must be >= 1.

function exercise23(str) {
  // TODO
}

// ─── Exercise 24 ─────────────────────────────────────────────────────────────
// Return a new string formed by adding the first character of the input
// to both the front and the back.
// e.g. "hello" → "hhelloh"

function exercise24(str) {
  // TODO
}


// ─── Exercise 25 ─────────────────────────────────────────────────────────────
// Return true if the given positive number is a multiple of 3 or 7.

function exercise25(n) {
  // TODO
}

// ─── Exercise 26 ─────────────────────────────────────────────────────────────
// Take the last 3 characters of a string and add them to both the front and back.
// The string length must be >= 3.
// e.g. "Hello" → "lloHellello"  wait, re-read: last 3 = "llo" → "lloHellollo"

function exercise26(str) {
  // TODO
}

// ─── Exercise 27 ─────────────────────────────────────────────────────────────
// If the string starts with "Java", return it unchanged.
// Otherwise prepend "Java" to it.

function exercise27(str) {
  // TODO
}

// ─── Exercise 28 ─────────────────────────────────────────────────────────────
// Return true if either of two integers falls in the range 50..99 (inclusive).

function exercise28(a, b) {
  // TODO
}

// ─── Exercise 29 ─────────────────────────────────────────────────────────────
// Return true if one or more of three integers falls in the range 50..99 (inclusive).

function exercise29(a, b, c) {
  // TODO
}

// ─── Exercise 30 ─────────────────────────────────────────────────────────────
// If "Script" appears at index 4 (5th position) in the string, remove it.
// Otherwise return the original string.
// e.g. "JavaScript" → "Java"

function exercise30(str) {
  // TODO
}

// ─── Exercise 31 ─────────────────────────────────────────────────────────────
// Return the largest of three integers.

function exercise31(a, b, c) {
  // TODO
}

// ─── Exercise 32 ─────────────────────────────────────────────────────────────
// Return whichever of the two numbers is closest to 100.
// If both are equally close, return the larger number.

function exercise32(a, b) {
  // TODO
}

// ─── Exercise 33 ─────────────────────────────────────────────────────────────
// Return true if both numbers are in the range 40..60 OR both are in 70..100.

function exercise33(a, b) {
  // TODO
}

// ─── Exercise 34 ─────────────────────────────────────────────────────────────
// Both numbers are in the range 40..60 inclusive.
// Return the larger one (or either if equal).

function exercise34(a, b) {
  // TODO
}

// ─── Exercise 35 ─────────────────────────────────────────────────────────────
// Return true if the character `ch` exists between the 2nd and 4th positions
// (index 1..3) in the string.

function exercise35(str, ch) {
  // TODO
}

// ─── Exercise 36 ─────────────────────────────────────────────────────────────
// Return true if the last digit of all three positive integers is the same.

function exercise36(a, b, c) {
  // TODO
}

// ─── Exercise 37 ─────────────────────────────────────────────────────────────
// If the string length >= 3, lowercase the first 3 characters and leave the rest.
// If the string length < 3, uppercase the entire string.

function exercise37(str) {
  // TODO
}

// ─── Exercise 38 ─────────────────────────────────────────────────────────────
// Return true (A+ grade) if:
//   - totalMarks is between 89 and 100 inclusive, OR
//   - isFinalExam is true AND totalMarks >= 90

function exercise38(totalMarks, isFinalExam = false) {
  // TODO
}

// ─── Exercise 39 ─────────────────────────────────────────────────────────────
// Add two integers. Return 65 if the sum is in the range 50..80, else return 80.

function exercise39(a, b) {
  // TODO
}

// ─── Exercise 40 ─────────────────────────────────────────────────────────────
// Return true if one number is 8, or their sum or absolute difference equals 8.

function exercise40(a, b) {
  // TODO
}

// ─── Exercise 41 ─────────────────────────────────────────────────────────────
// Given three numbers: return 30 if all three are identical,
// 40 if exactly two are identical, otherwise 20.

function exercise41(a, b, c) {
  // TODO
}

// ─── Exercise 42 ─────────────────────────────────────────────────────────────
// Given three numbers and a "strict" flag:
// strict=true  → return true if a < b < c (strictly increasing)
// strict=false → return true if a <= b <= c (non-decreasing)

function exercise42(a, b, c, strict) {
  // TODO
}

// ─── Exercise 43 ─────────────────────────────────────────────────────────────
// Return true if two or all three non-negative integers share the same last digit.

function exercise43(a, b, c) {
  // TODO
}

// ─── Exercise 44 ─────────────────────────────────────────────────────────────
// Return true if any of the three integers is >= 20
// and also less than at least one of the others.

function exercise44(a, b, c) {
  // TODO
}

// ─── Exercise 45 ─────────────────────────────────────────────────────────────
// Return true if one value is 15, or their sum or absolute difference equals 15.

function exercise45(a, b) {
  // TODO
}

// ─── Exercise 46 ─────────────────────────────────────────────────────────────
// Return true if exactly one (not both) of the two non-negative integers
// is divisible by 7 or 11.

function exercise46(a, b) {
  // TODO
}

// ─── Exercise 47 ─────────────────────────────────────────────────────────────
// Return true if the number falls in the range 40..10000 (inclusive).

function exercise47(n) {
  // TODO
}

// ─── Exercise 48 ─────────────────────────────────────────────────────────────
// Return the string reversed.

function exercise48(str) {
  // TODO
}

// ─── Exercise 49 ─────────────────────────────────────────────────────────────
// Replace each character in the string with the next letter in the alphabet.
// 'z' wraps to 'a'.

function exercise49(str) {
  // TODO
}

// ─── Exercise 50 ─────────────────────────────────────────────────────────────
// Capitalize the first letter of every word in the string.

function exercise50(str) {
  // TODO
}

// ─── Exercise 51 ─────────────────────────────────────────────────────────────
// Convert a number of minutes into hours and minutes.
// e.g. 75 → "1 hour(s) and 15 minute(s)"

function exercise51(minutes) {
  // TODO
}

// ─── Exercise 52 ─────────────────────────────────────────────────────────────
// Return the letters of the string sorted alphabetically.

function exercise52(str) {
  // TODO
}

// ─── Exercise 53 ─────────────────────────────────────────────────────────────
// Return true if 'a' and 'b' appear in the string with exactly 3 characters
// between them (at least once).

function exercise53(str) {
  // TODO
}

// ─── Exercise 54 ─────────────────────────────────────────────────────────────
// Count and return the number of vowels (a, e, i, o, u) in the string.

function exercise54(str) {
  // TODO
}

// ─── Exercise 55 ─────────────────────────────────────────────────────────────
// Return true if the string contains the same number of 'p' and 't' characters.

function exercise55(str) {
  // TODO
}

// ─── Exercise 56 ─────────────────────────────────────────────────────────────
// Divide two positive numbers and return the result formatted with comma separators.
// e.g. 1000000 / 2 → "500,000"

function exercise56(a, b) {
  // TODO
}

// ─── Exercise 57 ─────────────────────────────────────────────────────────────
// Return a new string made by repeating `str` exactly `n` times.

function exercise57(str, n) {
  // TODO
}

// ─── Exercise 58 ─────────────────────────────────────────────────────────────
// Return a string made of four repetitions of the last 3 characters of `str`.
// String length must be >= 3.

function exercise58(str) {
  // TODO
}

// ─── Exercise 59 ─────────────────────────────────────────────────────────────
// Return the first half of a string that has an even length.

function exercise59(str) {
  // TODO
}

// ─── Exercise 60 ─────────────────────────────────────────────────────────────
// Return the string without its first and last characters.

function exercise60(str) {
  // TODO
}

// ─── Exercise 61 ─────────────────────────────────────────────────────────────
// Concatenate two strings, each with its first character removed.

function exercise61(a, b) {
  // TODO
}

// ─── Exercise 62 ─────────────────────────────────────────────────────────────
// Move the last 3 characters to the front of the string.
// String length must be >= 3.

function exercise62(str) {
  // TODO
}

// ─── Exercise 63 ─────────────────────────────────────────────────────────────
// Return the 3 middle characters of a string with odd length (minimum length 3).

function exercise63(str) {
  // TODO
}

// ─── Exercise 64 ─────────────────────────────────────────────────────────────
// Concatenate two strings. If they differ in length, trim the longer one
// to match the shorter one before concatenating.

function exercise64(a, b) {
  // TODO
}

// ─── Exercise 65 ─────────────────────────────────────────────────────────────
// Return true if the string ends with "Script" (string length >= 6).

function exercise65(str) {
  // TODO
}

// ─── Exercise 66 ─────────────────────────────────────────────────────────────
// Return the city name if it begins with "Los" or "New", otherwise return "".

function exercise66(city) {
  // TODO
}

// ─── Exercise 67 ─────────────────────────────────────────────────────────────
// Remove 'P' from the start and/or end of the string if present.
// Otherwise return the original string.

function exercise67(str) {
  // TODO
}

// ─── Exercise 68 ─────────────────────────────────────────────────────────────
// Return the first `n` characters + last `n` characters of the string.
// String length must be >= n.

function exercise68(str, n) {
  // TODO
}

// ─── Exercise 69 ─────────────────────────────────────────────────────────────
// Return the sum of all three elements in an array of length 3.

function exercise69(arr) {
  // TODO
}

// ─── Exercise 70 ─────────────────────────────────────────────────────────────
// Rotate the elements of a 3-element array one position to the left.
// e.g. [1, 2, 3] → [2, 3, 1]

function exercise70(arr) {
  // TODO
}

// ─── Exercise 71 ─────────────────────────────────────────────────────────────
// Return true if 1 is the first or last element of the array.

function exercise71(arr) {
  // TODO
}

// ─── Exercise 72 ─────────────────────────────────────────────────────────────
// Return true if the first and last elements of the 3-element array are equal.

function exercise72(arr) {
  // TODO
}

// ─── Exercise 73 ─────────────────────────────────────────────────────────────
// Return a new array with the 3 elements in reversed order.

function exercise73(arr) {
  // TODO
}

// ─── Exercise 74 ─────────────────────────────────────────────────────────────
// Replace every element in the array with the larger of the first and last elements.

function exercise74(arr) {
  // TODO
}

// ─── Exercise 75 ─────────────────────────────────────────────────────────────
// Given two 3-element arrays, return a new array containing their middle elements.
// e.g. [1,2,3], [4,5,6] → [2, 5]

function exercise75(arr1, arr2) {
  // TODO
}

// ─── Exercise 76 ─────────────────────────────────────────────────────────────
// Return a new array containing only the first and last elements of the input array.

function exercise76(arr) {
  // TODO
}

// ─── Exercise 77 ─────────────────────────────────────────────────────────────
// Return true if the two-element integer array contains 1 or 3.

function exercise77(arr) {
  // TODO
}

// ─── Exercise 78 ─────────────────────────────────────────────────────────────
// Return true if the two-element integer array does NOT contain 1 or 3.

function exercise78(arr) {
  // TODO
}

// ─── Exercise 79 ─────────────────────────────────────────────────────────────
// Return true if the array contains both 30 and 40 at least once each.
// (Array length can be 0, 1, or 2.)

function exercise79(arr) {
  // TODO
}

// ─── Exercise 80 ─────────────────────────────────────────────────────────────
// Return a new array with the first and last elements swapped.

function exercise80(arr) {
  // TODO
}

// ─── Exercise 81 ─────────────────────────────────────────────────────────────
// Return the sum of the two digits of a two-digit positive integer.
// e.g. 25 → 7

function exercise81(n) {
  // TODO
}

// ─── Exercise 82 ─────────────────────────────────────────────────────────────
// Add two positive integers WITHOUT carrying.
// Each digit position is added independently, keeping only the units digit.
// e.g. 17 + 27 → 34 (7+7=14 → 4, 1+2=3 → 3, so 34)

function exercise82(a, b) {
  // TODO
}

// ─── Exercise 83 ─────────────────────────────────────────────────────────────
// Return the longest string in the array.

function exercise83(arr) {
  // TODO
}

// ─── Exercise 84 ─────────────────────────────────────────────────────────────
// Replace each character in the string with the next letter in the alphabet.
// 'z' wraps to 'a'. (Same idea as #49 but now 'z'→'a' is explicit.)

function exercise84(str) {
  // TODO
}

// ─── Exercise 85 ─────────────────────────────────────────────────────────────
// Split array elements alternately into two groups and return both sums.
// e.g. [1,2,3,4,5,6] → sum1 = 1+3+5 = 9, sum2 = 2+4+6 = 12

function exercise85(arr) {
  // TODO: return [sum1, sum2]
}

// ─── Exercise 86 ─────────────────────────────────────────────────────────────
// Given an angle in degrees, return its type:
// 0 < angle < 90 → "Acute"
// angle === 90   → "Right"
// 90 < angle < 180 → "Obtuse"
// angle === 180  → "Straight"

function exercise86(angle) {
  // TODO
}

// ─── Exercise 87 ─────────────────────────────────────────────────────────────
// Return true if two arrays could be made identical by swapping at most one pair
// of elements within one of the arrays.

function exercise87(arr1, arr2) {
  // TODO
}

// ─── Exercise 88 ─────────────────────────────────────────────────────────────
// Return true if `divisor` divides both `a` and `b`, or divides neither.

function exercise88(a, b, divisor) {
  // TODO
}

// ─── Exercise 89 ─────────────────────────────────────────────────────────────
// Given x, y, z — find which operator (+, -, *, /) makes "x ? y = z" true.
// Return the operator as a string, or null if none works.

function exercise89(x, y, z) {
  // TODO
}

// ─── Exercise 90 ─────────────────────────────────────────────────────────────
// Return the k-th largest element in the array (1-based, so k=1 → max).

function exercise90(arr, k) {
  // TODO
}

// ─── Exercise 91 ─────────────────────────────────────────────────────────────
// Return the maximum sum of any k consecutive elements in the array.

function exercise91(arr, k) {
  // TODO
}

// ─── Exercise 92 ─────────────────────────────────────────────────────────────
// Return the maximum absolute difference between any two adjacent elements.

function exercise92(arr) {
  // TODO
}

// ─── Exercise 93 ─────────────────────────────────────────────────────────────
// Return the maximum absolute difference between any two elements in the array.

function exercise93(arr) {
  // TODO
}

// ─── Exercise 94 ─────────────────────────────────────────────────────────────
// Return the integer that appears most frequently in the array.

function exercise94(arr) {
  // TODO
}

// ─── Exercise 95 ─────────────────────────────────────────────────────────────
// Return a new array where every element is replaced by `value`.

function exercise95(arr, value) {
  // TODO
}

// ─── Exercise 96 ─────────────────────────────────────────────────────────────
// Return the sum of absolute differences between consecutive elements.
// e.g. [1, 4, 2, 8] → |1-4| + |4-2| + |2-8| = 3 + 2 + 6 = 11

function exercise96(arr) {
  // TODO
}

// ─── Exercise 97 ─────────────────────────────────────────────────────────────
// Find the shortest string that, when appended to `str`, makes it a palindrome.
// Return the palindrome result.

function exercise97(str) {
  // TODO
}

// ─── Exercise 98 ─────────────────────────────────────────────────────────────
// Return the version of the string (all-uppercase or all-lowercase)
// that requires fewer character changes. Prefer lowercase on a tie.

function exercise98(str) {
  // TODO
}

// ─── Exercise 99 ─────────────────────────────────────────────────────────────
// Return true if the characters of `a` can be rearranged to form `b`.

function exercise99(a, b) {
  // TODO
}

// ─── Exercise 100 ────────────────────────────────────────────────────────────
// Return true if two sorted integer arrays share at least one common element.

function exercise100(arr1, arr2) {
  // TODO
}

// ─── Exercise 101 ────────────────────────────────────────────────────────────
// Return true if the string contains only Latin letters and no two consecutive
// characters are both uppercase or both lowercase.
// e.g. "aAbB" → true, "aAbb" → false

function exercise101(str) {
  // TODO
}

// ─── Exercise 102 ────────────────────────────────────────────────────────────
// Count inversions: pairs (i, j) where i < j but arr[i] > arr[j].

function exercise102(arr) {
  // TODO
}

// ─── Exercise 103 ────────────────────────────────────────────────────────────
// Return the maximum integer achievable by deleting exactly one digit from n.

function exercise103(n) {
  // TODO
}

// ─── Exercise 104 ────────────────────────────────────────────────────────────
// Return the pair [a, b] from the array whose absolute difference is closest
// to the target integer.

function exercise104(arr, target) {
  // TODO
}

// ─── Exercise 105 ────────────────────────────────────────────────────────────
// Count how many times you must replace n with its digit sum before n < 10.
// e.g. 99 → 18 → 9 (2 steps)

function exercise105(n) {
  // TODO
}

// ─── Exercise 106 ────────────────────────────────────────────────────────────
// Repeatedly divide `a` by `b` while the result is a whole number.
// Return the final non-integer (or last integer) result.

function exercise106(a, b) {
  // TODO
}

// ─── Exercise 107 ────────────────────────────────────────────────────────────
// Count sorted pairs (arr[i], arr[j]) where i < j and arr[i] divides arr[j].

function exercise107(arr) {
  // TODO
}

// ─── Exercise 108 ────────────────────────────────────────────────────────────
// Return the dot product of two 3D vectors (arrays of length 3).
// dot = a[0]*b[0] + a[1]*b[1] + a[2]*b[2]

function exercise108(a, b) {
  // TODO
}

// ─── Exercise 109 ────────────────────────────────────────────────────────────
// Return a sorted array of all prime numbers from 1 to n (inclusive).

function exercise109(n) {
  // TODO
}

// ─── Exercise 110 ────────────────────────────────────────────────────────────
// Count even numbers that appear before the first occurrence of `target` in the array.

function exercise110(arr, target) {
  // TODO
}

// ─── Exercise 111 ────────────────────────────────────────────────────────────
// Given three numbers where two are equal, return the unique (different) one.

function exercise111(a, b, c) {
  // TODO
}

// ─── Exercise 112 ────────────────────────────────────────────────────────────
// Return the number of trailing zeros in n! (n factorial).

function exercise112(n) {
  // TODO
}

// ─── Exercise 113 ────────────────────────────────────────────────────────────
// Compute the integer sum: n + floor(n/2) + floor(n/4) + ... until value is 0.

function exercise113(n) {
  // TODO
}

// ─── Exercise 114 ────────────────────────────────────────────────────────────
// Return true if the string is a "correct sentence":
// starts with an uppercase letter AND ends with '.'.

function exercise114(str) {
  // TODO
}

// ─── Exercise 115 ────────────────────────────────────────────────────────────
// Return true if the square matrix is a diagonal matrix
// (all off-diagonal entries are 0).
// Input: 2D array (array of arrays).

function exercise115(matrix) {
  // TODO
}

// ─── Exercise 116 ────────────────────────────────────────────────────────────
// Given a number string with one '#', return all strings where '#' is replaced
// by a digit (0–9) such that the number is divisible by 3.
// e.g. "2#0" → ["210", "240", "270"]

function exercise116(str) {
  // TODO
}

// ─── Exercise 117 ────────────────────────────────────────────────────────────
// Return true if the n×n matrix is an identity matrix
// (1s on main diagonal, 0s everywhere else).

function exercise117(matrix) {
  // TODO
}

// ─── Exercise 118 ────────────────────────────────────────────────────────────
// Return true if `n` is within the range [lower, upper] (inclusive).

function exercise118(n, lower, upper) {
  // TODO
}

// ─── Exercise 119 ────────────────────────────────────────────────────────────
// Return true if every digit in the integer is greater than or equal
// to the digit before it (non-decreasing digit order).

function exercise119(n) {
  // TODO
}

// ─── Exercise 120 ────────────────────────────────────────────────────────────
// Return true if point (a, b) lies strictly INSIDE the circle
// centered at (x, y) with radius r.

function exercise120(a, b, x, y, r) {
  // TODO
}

// ─── Exercise 121 ────────────────────────────────────────────────────────────
// Return true if the square matrix is lower triangular
// (all entries above the main diagonal are 0).

function exercise121(matrix) {
  // TODO
}

// ─── Exercise 122 ────────────────────────────────────────────────────────────
// Return true if the array is strictly increasing OR strictly decreasing.

function exercise122(arr) {
  // TODO
}

// ─── Exercise 123 ────────────────────────────────────────────────────────────
// Return true if the array is a permutation of integers 1..n
// (contains every integer from 1 to arr.length exactly once).

function exercise123(arr) {
  // TODO
}

// ─── Exercise 124 ────────────────────────────────────────────────────────────
// Return the NOR of two booleans: true only when both are false.

function exercise124(a, b) {
  // TODO
}

// ─── Exercise 125 ────────────────────────────────────────────────────────────
// Return the longest string in the array (same as #83 — good extra practice).

function exercise125(arr) {
  // TODO
}

// ─── Exercise 126 ────────────────────────────────────────────────────────────
// Return the largest even number in the array.
// Return null (or -1) if no even number exists.

function exercise126(arr) {
  // TODO
}

// ─── Exercise 127 ────────────────────────────────────────────────────────────
// Reverse the bits of a positive integer.
// e.g. 14 decimal = 00001110 binary → reversed → 01110000 = 112

function exercise127(n) {
  // TODO
}

// ─── Exercise 128 ────────────────────────────────────────────────────────────
// Return the smallest "round number" (ends in one or more zeros) >= n.

function exercise128(n) {
  // TODO
}

// ─── Exercise 129 ────────────────────────────────────────────────────────────
// Return the smallest prime number strictly greater than n.

function exercise129(n) {
  // TODO
}

// ─── Exercise 130 ────────────────────────────────────────────────────────────
// Count how many even digits the integer contains.
// e.g. 1234 → digits 2 and 4 → count = 2

function exercise130(n) {
  // TODO
}

// ─── Exercise 131 ────────────────────────────────────────────────────────────
// Return a prefix-sum array where result[i] = arr[0] + arr[1] + ... + arr[i].

function exercise131(arr) {
  // TODO
}

// ─── Exercise 132 ────────────────────────────────────────────────────────────
// Return an array of all distinct prime factors of n.

function exercise132(n) {
  // TODO
}

// ─── Exercise 133 ────────────────────────────────────────────────────────────
// Return true if the fraction is proper (numerator < denominator, both positive).

function exercise133(numerator, denominator) {
  // TODO
}

// ─── Exercise 134 ────────────────────────────────────────────────────────────
// Reverse alphabetical order: 'a'↔'z', 'b'↔'y', 'c'↔'x', etc.
// Only transform lowercase letters; leave others unchanged.

function exercise134(str) {
  // TODO
}

// ─── Exercise 135 ────────────────────────────────────────────────────────────
// Remove all characters that appear more than once in the string.
// Keep only characters that appear exactly once.

function exercise135(str) {
  // TODO
}

// ─── Exercise 136 ────────────────────────────────────────────────────────────
// Replace the FIRST digit character in the string with '$'.
// The string must contain at least one digit.

function exercise136(str) {
  // TODO
}

// ─── Exercise 137 ────────────────────────────────────────────────────────────
// Return n if n > 15, otherwise return 15.

function exercise137(n) {
  // TODO
}

// ─── Exercise 138 ────────────────────────────────────────────────────────────
// Reverse the bits of a 16-bit unsigned integer.

function exercise138(n) {
  // TODO
}

// ─── Exercise 139 ────────────────────────────────────────────────────────────
// Return the index of the rightmost "round number" (ends in zero) in the array.
// Return 0 if none exist.

function exercise139(arr) {
  // TODO
}

// ─── Exercise 140 ────────────────────────────────────────────────────────────
// Return true if every digit in the number is the same.
// e.g. 1111 → true, 1112 → false

function exercise140(n) {
  // TODO
}

// ─── Exercise 141 ────────────────────────────────────────────────────────────
// Return the total count of distinct elements across both arrays combined.

function exercise141(arr1, arr2) {
  // TODO
}

// ─── Exercise 142 ────────────────────────────────────────────────────────────
// Simplify an absolute Unix file path (handle '.', '..', multiple slashes).
// e.g. "/a/./b/../../c/" → "/c"

function exercise142(path) {
  // TODO
}

// ─── Exercise 143 ────────────────────────────────────────────────────────────
// Sort an array of strings by length (ascending).
// Preserve the original order for strings of equal length.

function exercise143(arr) {
  // TODO
}

// ─── Exercise 144 ────────────────────────────────────────────────────────────
// Break a URL of the form "protocol://domain.tld/path" into its parts.
// Return an array: [protocol, domain, tld, path]

function exercise144(url) {
  // TODO
}

// ─── Exercise 145 ────────────────────────────────────────────────────────────
// Find the largest n such that 1 + 2 + ... + n <= value.

function exercise145(value) {
  // TODO
}

// ─── Exercise 146 ────────────────────────────────────────────────────────────
// Return the sum of cubes: 1³ + 2³ + ... + n³.

function exercise146(n) {
  // TODO
}

// ─── Exercise 147 ────────────────────────────────────────────────────────────
// Return the sum of all digit characters found in the string.
// e.g. "a1b2c3" → 1 + 2 + 3 = 6

function exercise147(str) {
  // TODO
}

// ─── Exercise 148 ────────────────────────────────────────────────────────────
// Swap the first and second halves of an even-length array.
// e.g. [1, 2, 3, 4] → [3, 4, 1, 2]

function exercise148(arr) {
  // TODO
}

// ─── Exercise 149 ────────────────────────────────────────────────────────────
// Toggle the case of every letter in the string.
// Uppercase → lowercase, lowercase → uppercase.

function exercise149(str) {
  // TODO
}

// ─── Exercise 150 ────────────────────────────────────────────────────────────
// Swap adjacent digit pairs in an even-digit integer.
// e.g. 1234 → 2143

function exercise150(n) {
  // TODO
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEST CALLS — uncomment each line as you implement the function above
// ═══════════════════════════════════════════════════════════════════════════════

// console.log("Ex 1:"); exercise1();
// console.log("Ex 2:"); exercise2();
// console.log("Ex 3:"); exercise3();
// console.log("Ex 4 (area):", exercise4());
// console.log("Ex 5 (rotate):"); exercise5();
// console.log("Ex 6 (2000 leap?):", exercise6(2000));     // true
// console.log("Ex 6 (1900 leap?):", exercise6(1900));     // false
// console.log("Ex 6 (2024 leap?):", exercise6(2024));     // true
// console.log("Ex 7 (Jan 1 Sundays):", exercise7());
// console.log("Ex 8 (guess 5):", exercise8(5));           // "Good Work" or "Not matched"
// console.log("Ex 9 (days to Xmas):", exercise9());
// console.log("Ex 10 (6,3):", exercise10(6, 3));          // { product: 18, quotient: 2 }
// console.log("Ex 11 (60C->F):", celsiusToFahrenheit(60)); // 140
// console.log("Ex 11 (45F->C):", fahrenheitToCelsius(45)); // 7.222...
// console.log("Ex 12:"); exercise12();
// console.log("Ex 13:", exercise13("myVar", 42));         // { myVar: 42 }
// console.log("Ex 14 (.jpg):", exercise14("photo.jpg"));  // "jpg"
// console.log("Ex 15 (10):", exercise15(10));   // 3
// console.log("Ex 15 (16):", exercise15(16));   // 6
// console.log("Ex 16 (3,4):", exercise16(3, 4));  // 7
// console.log("Ex 16 (3,3):", exercise16(3, 3));  // 18
// console.log("Ex 17 (22):", exercise17(22));   // 9
// console.log("Ex 17 (14):", exercise17(14));   // 5
// console.log("Ex 18 (50,20):", exercise18(50, 20));  // true
// console.log("Ex 18 (30,20):", exercise18(30, 20));  // true
// console.log("Ex 18 (10,20):", exercise18(10, 20));  // false
// console.log("Ex 19 (90):", exercise19(90));    // true
// console.log("Ex 19 (200):", exercise19(200));  // false
// console.log("Ex 20 (1,-1):", exercise20(1, -1));  // true
// console.log("Ex 20 (1,1):", exercise20(1, 1));    // false
// console.log("Ex 21 ('thon'):", exercise21("thon"));     // "Python"... no: "Pynthon" — actually "Py"+"thon" = "Python"? No: "Py" + "thon" = "Python". Correct.
// console.log("Ex 21 ('Python'):", exercise21("Python")); // "Python" unchanged
// console.log("Ex 22 ('hello',1):", exercise22("hello", 1)); // "hllo"
// console.log("Ex 23 ('hello'):", exercise23("hello"));   // "oellh"
// console.log("Ex 24 ('hello'):", exercise24("hello"));   // "hhelloh"
// console.log("Ex 25 (9):", exercise25(9));    // true  (multiple of 3)
// console.log("Ex 25 (14):", exercise25(14));  // true  (multiple of 7)
// console.log("Ex 25 (11):", exercise25(11));  // false
// console.log("Ex 26 ('Hello'):", exercise26("Hello"));   // "lloHellollo"
// console.log("Ex 27 ('Script'):", exercise27("Script")); // "JavaScript"... no: "Java"+"Script"
// console.log("Ex 27 ('JavaScript'):", exercise27("JavaScript")); // "JavaScript" unchanged
// console.log("Ex 28 (55,30):", exercise28(55, 30));  // true
// console.log("Ex 28 (20,30):", exercise28(20, 30));  // false
// console.log("Ex 29 (55,80,20):", exercise29(55, 80, 20)); // true
// console.log("Ex 29 (10,20,30):", exercise29(10, 20, 30)); // false
// console.log("Ex 30 ('JavaScript'):", exercise30("JavaScript")); // "Java"
// console.log("Ex 30 ('Python'):", exercise30("Python"));         // "Python"
// console.log("Ex 31 (3,9,5):", exercise31(3, 9, 5));  // 9
// console.log("Ex 32 (90,110):", exercise32(90, 110)); // 90
// console.log("Ex 32 (100,100):", exercise32(100, 100)); // 100
// console.log("Ex 33 (50,75):", exercise33(50, 75));   // false (mixed ranges)
// console.log("Ex 33 (45,55):", exercise33(45, 55));   // true  (both in 40-60)
// console.log("Ex 34 (45,55):", exercise34(45, 55));   // 55
// console.log("Ex 35 ('Hello','e'):", exercise35("Hello", "e")); // true  (index 1)
// console.log("Ex 35 ('Hello','o'):", exercise35("Hello", "o")); // false (index 4)
// console.log("Ex 36 (23,33,43):", exercise36(23, 33, 43)); // true  (last digit 3)
// console.log("Ex 36 (21,32,43):", exercise36(21, 32, 43)); // false
// console.log("Ex 37 ('Hello'):", exercise37("Hello")); // "heLlo"... wait: first 3 lower → "helLo"
// console.log("Ex 37 ('Hi'):", exercise37("Hi"));       // "HI" (length < 3 → uppercase)
// console.log("Ex 38 (95):", exercise38(95));             // true
// console.log("Ex 38 (85):", exercise38(85));             // false
// console.log("Ex 38 (90,true):", exercise38(90, true));  // true  (final exam, >=90)
// console.log("Ex 38 (89,true):", exercise38(89, true));  // false (final exam, <90)
// console.log("Ex 39 (30,40):", exercise39(30, 40));   // 65 (sum=70, in range)
// console.log("Ex 39 (10,20):", exercise39(10, 20));   // 80 (sum=30, out of range)
// console.log("Ex 40 (8,3):", exercise40(8, 3));       // true (one is 8)
// console.log("Ex 40 (5,3):", exercise40(5, 3));       // false
// console.log("Ex 41 (3,3,3):", exercise41(3, 3, 3));  // 30
// console.log("Ex 41 (3,3,4):", exercise41(3, 3, 4));  // 40
// console.log("Ex 41 (1,2,3):", exercise41(1, 2, 3));  // 20
// console.log("Ex 42 (1,2,3,true):", exercise42(1, 2, 3, true));   // true
// console.log("Ex 42 (1,1,3,true):", exercise42(1, 1, 3, true));   // false
// console.log("Ex 42 (1,1,3,false):", exercise42(1, 1, 3, false)); // true
// console.log("Ex 43 (23,33,43):", exercise43(23, 33, 43)); // true
// console.log("Ex 43 (21,32,43):", exercise43(21, 32, 43)); // false
// console.log("Ex 44 (20,10,30):", exercise44(20, 10, 30)); // true
// console.log("Ex 44 (10,5,3):", exercise44(10, 5, 3));     // false
// console.log("Ex 45 (15,2):", exercise45(15, 2));   // true
// console.log("Ex 45 (7,8):", exercise45(7, 8));     // false
// console.log("Ex 46 (14,3):", exercise46(14, 3));   // true (14 div by 7)
// console.log("Ex 46 (14,7):", exercise46(14, 7));   // false (both div by 7)
// console.log("Ex 47 (100):", exercise47(100));  // true
// console.log("Ex 47 (30):", exercise47(30));    // false
// console.log("Ex 48 ('hello'):", exercise48("hello")); // "olleh"
// console.log("Ex 49 ('abc'):", exercise49("abc"));     // "bcd"
// console.log("Ex 50 ('hello world'):", exercise50("hello world")); // "Hello World"
// console.log("Ex 51 (75):", exercise51(75));    // "1 hour(s) and 15 minute(s)"
// console.log("Ex 52 ('dcba'):", exercise52("dcba")); // "abcd"
// console.log("Ex 53 ('aXXXb'):", exercise53("aXXXb")); // true
// console.log("Ex 53 ('aXXb'):", exercise53("aXXb"));   // false
// console.log("Ex 54 ('hello'):", exercise54("hello")); // 2
// console.log("Ex 55 ('ptptpt'):", exercise55("ptptpt")); // true
// console.log("Ex 56 (1000000,2):", exercise56(1000000, 2)); // "500,000"
// console.log("Ex 57 ('ab',3):", exercise57("ab", 3)); // "ababab"
// console.log("Ex 58 ('Hello'):", exercise58("Hello")); // "llollollolllo"... check: last 3 of "Hello" = "llo", x4 = "llollollolllo"
// console.log("Ex 59 ('abcdef'):", exercise59("abcdef")); // "abc"
// console.log("Ex 60 ('hello'):", exercise60("hello")); // "ell"
// console.log("Ex 61 ('hello','world'):", exercise61("hello", "world")); // "elloorld"
// console.log("Ex 62 ('Hello'):", exercise62("Hello")); // "lloHe"
// console.log("Ex 63 ('hello'):", exercise63("hello")); // "ell"
// console.log("Ex 64 ('hello','hi'):", exercise64("hello", "hi")); // "hehi"
// console.log("Ex 65 ('JavaScript'):", exercise65("JavaScript")); // true
// console.log("Ex 66 ('Los Angeles'):", exercise66("Los Angeles")); // "Los Angeles"
// console.log("Ex 66 ('Miami'):", exercise66("Miami"));             // ""
// console.log("Ex 67 ('PPython'):", exercise67("PPython")); // "Python"... check: remove P from start → "Python"
// console.log("Ex 68 ('hello',2):", exercise68("hello", 2)); // "helo"
// console.log("Ex 69 ([1,2,3]):", exercise69([1, 2, 3])); // 6
// console.log("Ex 70 ([1,2,3]):", exercise70([1, 2, 3])); // [2, 3, 1]
// console.log("Ex 71 ([1,2,3]):", exercise71([1, 2, 3])); // true
// console.log("Ex 71 ([2,3,4]):", exercise71([2, 3, 4])); // false
// console.log("Ex 72 ([1,2,1]):", exercise72([1, 2, 1])); // true
// console.log("Ex 73 ([1,2,3]):", exercise73([1, 2, 3])); // [3, 2, 1]
// console.log("Ex 74 ([1,5,2]):", exercise74([1, 5, 2])); // [2, 2, 2]
// console.log("Ex 75 ([1,2,3],[4,5,6]):", exercise75([1,2,3],[4,5,6])); // [2, 5]
// console.log("Ex 76 ([1,2,3,4]):", exercise76([1, 2, 3, 4])); // [1, 4]
// console.log("Ex 77 ([1,4]):", exercise77([1, 4])); // true
// console.log("Ex 77 ([4,5]):", exercise77([4, 5])); // false
// console.log("Ex 78 ([4,5]):", exercise78([4, 5])); // true
// console.log("Ex 78 ([1,4]):", exercise78([1, 4])); // false
// console.log("Ex 79 ([30,40]):", exercise79([30, 40])); // true
// console.log("Ex 79 ([30,30]):", exercise79([30, 30])); // false
// console.log("Ex 80 ([1,2,3,4]):", exercise80([1, 2, 3, 4])); // [4, 2, 3, 1]
// console.log("Ex 81 (25):", exercise81(25));  // 7
// console.log("Ex 82 (17,27):", exercise82(17, 27)); // 34
// console.log("Ex 83 (['ab','abc','a']):", exercise83(["ab","abc","a"])); // "abc"
// console.log("Ex 84 ('abc'):", exercise84("abc")); // "bcd"
// console.log("Ex 85 ([1,2,3,4,5,6]):", exercise85([1,2,3,4,5,6])); // [9, 12]
// console.log("Ex 86 (45):", exercise86(45));   // "Acute"
// console.log("Ex 86 (90):", exercise86(90));   // "Right"
// console.log("Ex 86 (120):", exercise86(120)); // "Obtuse"
// console.log("Ex 87 ([1,2,3],[1,3,2]):", exercise87([1,2,3],[1,3,2])); // true
// console.log("Ex 88 (10,15,5):", exercise88(10, 15, 5)); // true (5 divides both)
// console.log("Ex 89 (10,30,300):", exercise89(10, 30, 300)); // "*"
// console.log("Ex 90 ([3,1,4,1,5],2):", exercise90([3,1,4,1,5], 2)); // 4
// console.log("Ex 91 ([1,2,3,4,5],3):", exercise91([1,2,3,4,5], 3)); // 12
// console.log("Ex 92 ([1,5,2,8]):", exercise92([1,5,2,8])); // 6
// console.log("Ex 93 ([1,5,2,8]):", exercise93([1,5,2,8])); // 7
// console.log("Ex 94 ([1,2,2,3,2]):", exercise94([1,2,2,3,2])); // 2
// console.log("Ex 95 ([1,2,3],0):", exercise95([1,2,3], 0)); // [0, 0, 0]
// console.log("Ex 96 ([1,4,2,8]):", exercise96([1,4,2,8])); // 11
// console.log("Ex 97 ('abcd'):", exercise97("abcd")); // "abcdcba" or similar
// console.log("Ex 98 ('PHp'):", exercise98("PHp"));   // "PHP"
// console.log("Ex 99 ('abc','bca'):", exercise99("abc","bca")); // true
// console.log("Ex 100 ([1,2,3],[3,4,5]):", exercise100([1,2,3],[3,4,5])); // true
// console.log("Ex 101 ('aAbB'):", exercise101("aAbB")); // true
// console.log("Ex 102 ([3,1,2]):", exercise102([3,1,2])); // 2
// console.log("Ex 103 (1234):", exercise103(1234)); // 234... wait: remove each digit and pick max: 234,134,124,123 → max=234
// console.log("Ex 104 ([1,5,3,10],4):", exercise104([1,5,3,10], 4)); // [1,5] or [3,1]
// console.log("Ex 105 (99):", exercise105(99));  // 2
// console.log("Ex 106 (100,5):", exercise106(100, 5)); // 4 (100→20→4)
// console.log("Ex 107 ([1,2,3]):", exercise107([1,2,3])); // 2
// console.log("Ex 108 ([1,2,3],[4,5,6]):", exercise108([1,2,3],[4,5,6])); // 32
// console.log("Ex 109 (20):", exercise109(20)); // [2,3,5,7,11,13,17,19]
// console.log("Ex 110 ([2,4,5,6],5):", exercise110([2,4,5,6], 5)); // 2
// console.log("Ex 111 (1,1,2):", exercise111(1,1,2)); // 2
// console.log("Ex 112 (10):", exercise112(10)); // 2
// console.log("Ex 113 (10):", exercise113(10)); // 10+5+2+1 = 18
// console.log("Ex 114 ('Hello.'):", exercise114("Hello.")); // true
// console.log("Ex 115 ([[1,0],[0,2]]):", exercise115([[1,0],[0,2]])); // true
// console.log("Ex 116 ('2#0'):", exercise116("2#0")); // ["210","240","270"]
// console.log("Ex 117 ([[1,0],[0,1]]):", exercise117([[1,0],[0,1]])); // true
// console.log("Ex 118 (5,1,10):", exercise118(5,1,10)); // true
// console.log("Ex 119 (1234):", exercise119(1234)); // true
// console.log("Ex 120 (1,1,0,0,2):", exercise120(1,1,0,0,2)); // true (dist=sqrt(2)<2)
// console.log("Ex 121 ([[1,0],[2,3]]):", exercise121([[1,0],[2,3]])); // true
// console.log("Ex 122 ([1,2,3]):", exercise122([1,2,3])); // true
// console.log("Ex 122 ([3,2,1]):", exercise122([3,2,1])); // true
// console.log("Ex 122 ([1,3,2]):", exercise122([1,3,2])); // false
// console.log("Ex 123 ([3,1,2]):", exercise123([3,1,2])); // true
// console.log("Ex 124 (false,false):", exercise124(false,false)); // true
// console.log("Ex 124 (true,false):", exercise124(true,false));   // false
// console.log("Ex 125 (['ab','abc','a']):", exercise125(["ab","abc","a"])); // "abc"
// console.log("Ex 126 ([1,3,5,6,8]):", exercise126([1,3,5,6,8])); // 8
// console.log("Ex 127 (14):", exercise127(14)); // 112
// console.log("Ex 128 (17):", exercise128(17)); // 20
// console.log("Ex 129 (10):", exercise129(10)); // 11
// console.log("Ex 130 (1234):", exercise130(1234)); // 2
// console.log("Ex 131 ([1,2,3,4]):", exercise131([1,2,3,4])); // [1,3,6,10]
// console.log("Ex 132 (12):", exercise132(12)); // [2,3]
// console.log("Ex 133 (3,5):", exercise133(3,5)); // true
// console.log("Ex 133 (5,3):", exercise133(5,3)); // false
// console.log("Ex 134 ('abc'):", exercise134("abc")); // "zyx"
// console.log("Ex 135 ('abcabd'):", exercise135("abcabd")); // "cd"
// console.log("Ex 136 ('a1b2'):", exercise136("a1b2")); // "a$b2"
// console.log("Ex 137 (20):", exercise137(20)); // 20
// console.log("Ex 137 (10):", exercise137(10)); // 15
// console.log("Ex 138 (6):", exercise138(6));   // depends on 16-bit representation
// console.log("Ex 139 ([10,3,20,7]):", exercise139([10,3,20,7])); // 2 (index of 20)
// console.log("Ex 140 (1111):", exercise140(1111)); // true
// console.log("Ex 140 (1112):", exercise140(1112)); // false
// console.log("Ex 141 ([1,2],[3,4]):", exercise141([1,2],[3,4])); // 4
// console.log("Ex 142 ('/a/./b/../../c/'):", exercise142("/a/./b/../../c/")); // "/c"
// console.log("Ex 143 (['banana','apple','fig']):", exercise143(["banana","apple","fig"])); // ["fig","apple","banana"]
// console.log("Ex 144 ('https://example.com/path'):", exercise144("https://example.com/path"));
// console.log("Ex 145 (10):", exercise145(10)); // 4 (1+2+3+4=10)
// console.log("Ex 146 (3):", exercise146(3));   // 36 (1+8+27)
// console.log("Ex 147 ('a1b2c3'):", exercise147("a1b2c3")); // 6
// console.log("Ex 148 ([1,2,3,4]):", exercise148([1,2,3,4])); // [3,4,1,2]
// console.log("Ex 149 ('Hello'):", exercise149("Hello")); // "hELLO"
// console.log("Ex 150 (1234):", exercise150(1234)); // 2143

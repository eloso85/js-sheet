// Run with: node exercises2.js
// Fill in each function, then check the output below.
// Source list: w3resource JavaScript Fundamental (ES6) exercises, Part 1
// https://www.w3resource.com/javascript-exercises/fundamental/index.php

// ─── Exercise 1 ───────────────────────────────────────────────────────────
// Compare Objects for Equivalent Properties
// Given two objects, return true if the first has property values equivalent
// to the second.

function exercise1(obj1, obj2) {
    //console.log(obj1.name);
    for (const key of Object.keys(obj2)) {


        if (obj1[key] !== obj2[key]) return false;
    }
    return true
}
//console.log(exercise1({ name: "Alex", age: 40 }, { name: "Alex", age: 45 }));


// ─── Exercise 3 ───────────────────────────────────────────────────────────
// CSV String to 2D Array
// Convert a comma-separated string into a 2D array of rows.

function exercise3(csvString) {
    const array = csvString.split("\n");
    let result = [];

    for (const row of array) {
        result.push(row.split(","));
    }

    return result;
}

//console.log(exercise3("one,two,three\nfour,five,six"));

// ─── Exercise 4 ───────────────────────────────────────────────────────────
// CSV to Array of Objects
// Convert a CSV string into an array of objects, using the first row as the
// object keys.

function exercise4(csvString) {
    const array = csvString.split("\n");
    const keys = array[0].split(",")
    const rows = array.slice(1);

    return rows.map(row => {
        const values = row.split(",")
        return keys.reduce((obj, key, i) => {
            obj[key] = values[i];
            return obj
        }, {})
    })


}
//console.log(exercise4("name,age\nAlice,30\nBob,25"))


//exercise4()

// ─── Exercise 5 ───────────────────────────────────────────────────────────
// Array of Objects to CSV String
// Convert an array of objects into a CSV string, including only the given
// columns.

function exercise5(arr, keys) {
    const header = keys.join(",")
    const rows = arr.map(obj => keys.map(col => obj[col]).join(","));

    return [header, ...rows].join("\n")

}

// console.log(
//     exercise5(
//         [{ name: "Alice", age: "30" }, { name: "Bob", age: "26" }], ["name", "age"]
//     ))

// ─── Exercise 6 ───────────────────────────────────────────────────────────
// Find Value in Nested 
// Given a nested object and a target key, find and return that key's value
// wherever it appears.

function exercise6(object, targetKeys) {

    for (const key in object) {
        if (key === targetKeys) {
            return object[key]
        }
        if (typeof object[key] === "object" && object[key] !== null) {
            return exercise6(object[key], targetKeys)
        }
    }

}
//console.log(exercise6({ a: 1, b: { c: 2 } }, "c"))
//console.log(exercise6({ a: 1, b: { c: 2, d: { e: 3 } } }, "e"))
//console.log(exercise6({ a: 1, b: 2, c: 3 }, "c"))

// ─── Exercise 7 ───────────────────────────────────────────────────────────
// Number to Array of Digits
// Convert an integer into an array of its individual digits.

function exercise7() {
    // TODO
}

//exercise7()

// ─── Exercise 8 ───────────────────────────────────────────────────────────
// Remove Specified Values from Array
// Return a new array with the given values removed, without mutating the
// original.

function exercise8() {
    // TODO
}

//exercise8()

// ─── Exercise 9 ───────────────────────────────────────────────────────────
// All Combinations from Array of Numbers
// Return every possible combination (subset) of numbers from a given array.

function exercise9() {
    // TODO
}

//exercise9()

// ─── Exercise 10 ──────────────────────────────────────────────────────────
// Extract Values by Indexes
// Given an array and a list of indexes, return the values at those positions.

function exercise10() {
    // TODO
}

//exercise10()

// ─── Exercise 11 ──────────────────────────────────────────────────────────
// Random Hex Color Code
// Generate a random 6-digit hex color string, e.g. '#3fae21'.

function exercise11() {
    // TODO
}

//exercise11()

// ─── Exercise 12 ──────────────────────────────────────────────────────────
// Remove Non-Printable ASCII
// Strip non-printable ASCII characters out of a string.

function exercise12() {
    // TODO
}

//exercise12()

// ─── Exercise 13 ──────────────────────────────────────────────────────────
// String Length in Bytes
// Return the byte length of a given string (UTF-8).

function exercise13() {
    // TODO
}

//exercise13()

// ─── Exercise 14 ──────────────────────────────────────────────────────────
// Rename Multiple Object Keys
// Given an object and a map of old-key -> new-key, return a new object with
// keys renamed.

function exercise14() {
    // TODO
}

//exercise14()

// ─── Exercise 15 ──────────────────────────────────────────────────────────
// Min/Max of Array via Function
// Return the min and max of an array after applying a comparator/mapping
// function to each element.

function exercise15() {
    // TODO
}

//exercise15()

// ─── Exercise 16 ──────────────────────────────────────────────────────────
// All Elements Pass Predicate
// Return true if a given predicate function returns true for every element of
// a collection.

function exercise16() {
    // TODO
}

//exercise16()

// ─── Exercise 17 ──────────────────────────────────────────────────────────
// Split Array by Filter Array
// Given a collection and a same-length boolean array, split elements into two
// groups depending on true/false.

function exercise17() {
    // TODO
}

//exercise17()

// ─── Exercise 18 ──────────────────────────────────────────────────────────
// Remove N From Left
// Remove a given number of elements from the start (left) of an array.

function exercise18() {
    // TODO
}

//exercise18()

// ─── Exercise 19 ──────────────────────────────────────────────────────────
// Remove N From Right
// Remove a given number of elements from the end (right) of an array.

function exercise19() {
    // TODO
}

//exercise19()

// ─── Exercise 20 ──────────────────────────────────────────────────────────
// Expand 3-Digit Hex to 6-Digit
// Given a 3-character hex color, expand it to the equivalent 6-character hex
// color.

function exercise20() {
    // TODO
}

//exercise20()

// ─── Exercise 21 ──────────────────────────────────────────────────────────
// Every Nth Element
// Return every nth element of a given array.

function exercise21() {
    // TODO
}

//exercise21()

// ─── Exercise 22 ──────────────────────────────────────────────────────────
// Filter Non-Unique Values
// Return only the values from an array that appear exactly once.

function exercise22() {
    // TODO
}

//exercise22()

// ─── Exercise 23 ──────────────────────────────────────────────────────────
// Filter Non-Unique via Comparator
// Same as above, but uniqueness is determined by a custom comparator function.

function exercise23() {
    // TODO
}

//exercise23()

// ─── Exercise 24 ──────────────────────────────────────────────────────────
// Decapitalize First Letter
// Lowercase just the first letter of a string, leaving the rest unchanged.

function exercise24() {
    // TODO
}

//exercise24()

// ─── Exercise 25 ──────────────────────────────────────────────────────────
// All Pairs from Arrays
// Given two arrays, build an array containing every possible pair (one item
// from each).

function exercise25() {
    // TODO
}

//exercise25()

// ─── Exercise 26 ──────────────────────────────────────────────────────────
// Detect Yes/No String
// Return true for 'y'/'yes' style strings, false for 'n'/'no' style strings
// (case-insensitive).

function exercise26() {
    // TODO
}

//exercise26()

// ─── Exercise 27 ──────────────────────────────────────────────────────────
// Common Elements via Comparator
// Find elements that appear in either of two arrays using a supplied
// comparator function.

function exercise27() {
    // TODO
}

//exercise27()

// ─── Exercise 28 ──────────────────────────────────────────────────────────
// Measure Function Execution Time
// Measure and return how long a given function takes to run.

function exercise28() {
    // TODO
}

//exercise28()

// ─── Exercise 29 ──────────────────────────────────────────────────────────
// Convert Value to Safe Integer
// Coerce a given value into a valid, safe JS integer.

function exercise29() {
    // TODO
}

//exercise29()

// ─── Exercise 30 ──────────────────────────────────────────────────────────
// Filter Elements Matching Values
// Remove any array elements whose value matches one of a list of target
// values.

function exercise30() {
    // TODO
}

//exercise30()

// ─── Exercise 31 ──────────────────────────────────────────────────────────
// All But First Element
// Return all elements of an array except the first one; if the array has only
// 1 element, return it unchanged.

function exercise31() {
    // TODO
}

//exercise31()

// ─── Exercise 32 ──────────────────────────────────────────────────────────
// Sum Array After Mapping
// Sum an array's values after transforming each one through a mapping
// function.

function exercise32() {
    // TODO
}

//exercise32()

// ─── Exercise 33 ──────────────────────────────────────────────────────────
// Random Number in Range
// Generate a random floating-point number within a given [min, max) range.

function exercise33() {
    // TODO
}

//exercise33()

// ─── Exercise 34 ──────────────────────────────────────────────────────────
// Random Integer in Range
// Generate a random integer within a given [min, max] range.

function exercise34() {
    // TODO
}

//exercise34()

// ─── Exercise 35 ──────────────────────────────────────────────────────────
// Array of N Random Integers
// Build an array of n random integers, each within a given range.

function exercise35() {
    // TODO
}

//exercise35()

// ─── Exercise 36 ──────────────────────────────────────────────────────────
// Invoke Multiple Functions with Same Args
// Given a list of functions, call each one with the same arguments and collect
// the results.

function exercise36() {
    // TODO
}

//exercise36()

// ─── Exercise 37 ──────────────────────────────────────────────────────────
// Sort Objects by Multiple Properties
// Sort an array of objects by one or more property names, each with an
// ascending/descending order.

function exercise37() {
    // TODO
}

//exercise37()

// ─── Exercise 38 ──────────────────────────────────────────────────────────
// Pad String on Both Sides
// Pad a string with a chosen character on both sides until it reaches a target
// length.

function exercise38() {
    // TODO
}

//exercise38()

// ─── Exercise 39 ──────────────────────────────────────────────────────────
// Remove Keys from Object
// Return a new object with the specified keys removed.

function exercise39() {
    // TODO
}

//exercise39()

// ─── Exercise 40 ──────────────────────────────────────────────────────────
// Object to Key-Value Pair Array
// Convert an object into an array of [key, value] pairs.

function exercise40() {
    // TODO
}

//exercise40()

// ─── Exercise 41 ──────────────────────────────────────────────────────────
// Build Object from Key-Value Pairs
// Given an array of [key, value] pairs, build the corresponding object.

function exercise41() {
    // TODO
}

//exercise41()

// ─── Exercise 42 ──────────────────────────────────────────────────────────
// Custom Coalesce Function
// Build a coalesce function that returns the first argument for which a
// validator function returns true.

function exercise42() {
    // TODO
}

//exercise42()

// ─── Exercise 43 ──────────────────────────────────────────────────────────
// Array Function to Variadic
// Convert a function that takes an array parameter into one that accepts
// variadic (...args) arguments.

function exercise43() {
    // TODO
}

//exercise43()

// ─── Exercise 44 ──────────────────────────────────────────────────────────
// Remove Falsey Values
// Return a new array with all falsy values (false, null, 0, '', undefined,
// NaN) removed.

function exercise44() {
    // TODO
}

//exercise44()

// ─── Exercise 45 ──────────────────────────────────────────────────────────
// Split Values by Filter Array
// Split values from a collection into two groups based on a matching boolean
// filter array.

function exercise45() {
    // TODO
}

//exercise45()

// ─── Exercise 46 ──────────────────────────────────────────────────────────
// Curry a Function
// Implement currying so a multi-argument function can be called one argument
// at a time.

function exercise46() {
    // TODO
}

//exercise46()

// ─── Exercise 47 ──────────────────────────────────────────────────────────
// Deep Comparison for Equivalence
// Deeply compare two values (objects/arrays/primitives) and return whether
// they're equivalent.

function exercise47() {
    // TODO
}

//exercise47()

// ─── Exercise 48 ──────────────────────────────────────────────────────────
// Array of Function Property Names
// Return an array of the names of a given object's own (and optionally
// inherited) function properties.

function exercise48() {
    // TODO
}

//exercise48()

// ─── Exercise 49 ──────────────────────────────────────────────────────────
// Retrieve Selected Properties
// Given an object and a list of property selectors, return just those
// properties.

function exercise49() {
    // TODO
}

//exercise49()

// ─── Exercise 50 ──────────────────────────────────────────────────────────
// Suffix Integer with am/pm
// Convert an hour integer into a string suffixed with 'am' or 'pm'.

function exercise50() {
    // TODO
}

//exercise50()

// ─── Exercise 51 ──────────────────────────────────────────────────────────
// Current URL Params as Object
// Parse the current page's URL query string into a plain object.

function exercise51() {
    // TODO
}

//exercise51()

// ─── Exercise 52 ──────────────────────────────────────────────────────────
// Group Array by Function
// Group an array's elements into buckets keyed by the result of a given
// function.

function exercise52() {
    // TODO
}

//exercise52()

// ─── Exercise 53 ──────────────────────────────────────────────────────────
// Init 2D Array with Size/Value
// Build a 2D array of given rows/cols, with every cell set to a given value.

function exercise53() {
    // TODO
}

//exercise53()

// ─── Exercise 54 ──────────────────────────────────────────────────────────
// Array of Numbers in Range
// Build an array containing every integer between a start and end value,
// inclusive.

function exercise54() {
    // TODO
}

//exercise54()

// ─── Exercise 55 ──────────────────────────────────────────────────────────
// Join and Normalize URL Segments
// Join a list of URL path segments together and clean up (normalize) the
// resulting path.

function exercise55() {
    // TODO
}

//exercise55()

// ─── Exercise 56 ──────────────────────────────────────────────────────────
// Check All Elements Equal
// Return true if every element in an array is equal to every other element.

function exercise56() {
    // TODO
}

//exercise56()

// ─── Exercise 57 ──────────────────────────────────────────────────────────
// Average After Mapping
// Compute the average of an array's values after transforming each one through
// a function.

function exercise57() {
    // TODO
}

//exercise57()

// ─── Exercise 58 ──────────────────────────────────────────────────────────
// Split by Predicate Function
// Split a collection's elements into two groups based on a predicate
// function's result.

function exercise58() {
    // TODO
}

//exercise58()

// ─── Exercise 59 ──────────────────────────────────────────────────────────
// Bind Function to Context
// Build a function that always invokes another function bound to a specific
// `this` context, with optional leading args.

function exercise59() {
    // TODO
}

//exercise59()

// ─── Exercise 60 ──────────────────────────────────────────────────────────
// Invoke Object Method by Key
// Build a function that calls a method found at a given key on an object, with
// optional leading args.

function exercise60() {
    // TODO
}

//exercise60()

// ─── Exercise 61 ──────────────────────────────────────────────────────────
// Cast Value to Array
// Wrap a non-array value in an array; return arrays unchanged.

function exercise61() {
    // TODO
}

//exercise61()

// ─── Exercise 62 ──────────────────────────────────────────────────────────
// Chain Async Functions
// Chain a sequence of async functions so each runs after the previous one
// resolves.

function exercise62() {
    // TODO
}

//exercise62()

// ─── Exercise 63 ──────────────────────────────────────────────────────────
// Clone a Regular Expression
// Return a new RegExp object cloned from an existing one (same pattern and
// flags).

function exercise63() {
    // TODO
}

//exercise63()

// ─── Exercise 64 ──────────────────────────────────────────────────────────
// First Non-Null/Undefined Argument
// Return the first argument passed in that isn't null or undefined.

function exercise64() {
    // TODO
}

//exercise64()

// ─── Exercise 65 ──────────────────────────────────────────────────────────
// Console Log with Color
// Add ANSI escape codes to text so it prints in color via console.log.

function exercise65() {
    // TODO
}

//exercise65()

// ─── Exercise 66 ──────────────────────────────────────────────────────────
// Right-to-Left Function Composition
// Compose a list of functions so they execute from right to left.

function exercise66() {
    // TODO
}

//exercise66()

// ─── Exercise 67 ──────────────────────────────────────────────────────────
// Left-to-Right Function Composition
// Compose a list of functions so they execute from left to right.

function exercise67() {
    // TODO
}

//exercise67()

// ─── Exercise 68 ──────────────────────────────────────────────────────────
// Converge Function with Branches
// Given branching functions and a converging function, run each branch on the
// input, then feed the results into the converging function.

function exercise68() {
    // TODO
}

//exercise68()

// ─── Exercise 69 ──────────────────────────────────────────────────────────
// Group Array and Count
// Group array elements by a function's result and return the count of items in
// each group.

function exercise69() {
    // TODO
}

//exercise69()

// ─── Exercise 70 ──────────────────────────────────────────────────────────
// Count Occurrences of a Value
// Count how many times a specific value appears in an array.

function exercise70() {
    // TODO
}

//exercise70()

// ─── Exercise 71 ──────────────────────────────────────────────────────────
// Deep Clone an Object
// Create a deep clone of a nested object/array structure.

function exercise71() {
    // TODO
}

//exercise71()

// ─── Exercise 72 ──────────────────────────────────────────────────────────
// Detect Mobile or Desktop
// Detect whether the current context looks like a mobile device or a
// desktop/laptop.

function exercise72() {
    // TODO
}

//exercise72()

// ─── Exercise 73 ──────────────────────────────────────────────────────────
// Array Difference After Mapping
// Return the elements from one array not present in another, after mapping
// both through a function.

function exercise73() {
    // TODO
}

//exercise73()

// ─── Exercise 74 ──────────────────────────────────────────────────────────
// Filter Array by Comparator
// Keep only the array elements for which a comparator function returns true.

function exercise74() {
    // TODO
}

//exercise74()

// ─── Exercise 75 ──────────────────────────────────────────────────────────
// Elo Rating Computation
// Given an ordered list of ratings from winner to loser, compute the updated
// Elo ratings.

function exercise75() {
    // TODO
}

//exercise75()

// ─── Exercise 76 ──────────────────────────────────────────────────────────
// Iterate Array in Reverse
// Run a callback once per array element, starting from the last element.

function exercise76() {
    // TODO
}

//exercise76()

// ─── Exercise 77 ──────────────────────────────────────────────────────────
// Iterate Over Object Properties
// Run a callback for every property on a given object.

function exercise77() {
    // TODO
}

//exercise77()

// ─── Exercise 78 ──────────────────────────────────────────────────────────
// Invert Object Key-Value Pairs
// Invert an object so values become keys and each new value is an array of the
// original keys that produced it.

function exercise78() {
    // TODO
}

//exercise78()

// ─── Exercise 79 ──────────────────────────────────────────────────────────
// Find Longest Iterable
// Given several iterables/array-likes, return whichever one has the most
// elements.

function exercise79() {
    // TODO
}

//exercise79()

// ─── Exercise 80 ──────────────────────────────────────────────────────────
// Validate with Luhn Algorithm
// Implement the Luhn checksum algorithm to validate numbers like credit card
// or IMEI numbers.

function exercise80() {
    // TODO
}

//exercise80()

// ─── Exercise 81 ──────────────────────────────────────────────────────────
// Build Object Keys via Function
// Create a new object with the same values as the input, but with keys
// generated by a function.

function exercise81() {
    // TODO
}

//exercise81()

// ─── Exercise 82 ──────────────────────────────────────────────────────────
// Map Array Values to Object
// Build an object where each original array value maps to its transformed (via
// function) counterpart.

function exercise82() {
    // TODO
}

//exercise82()

// ─── Exercise 83 ──────────────────────────────────────────────────────────
// Map Characters to New String
// Build a new string by running a function over every character of an existing
// string.

function exercise83() {
    // TODO
}

//exercise83()

// ─── Exercise 84 ──────────────────────────────────────────────────────────
// Generate Object Values by Function
// Create a new object with the same keys as the input, but with values
// generated by a function.

function exercise84() {
    // TODO
}

//exercise84()

// ─── Exercise 85 ──────────────────────────────────────────────────────────
// Mask Characters Except Last Few
// Replace all but the last few characters of a string with a mask character.

function exercise85() {
    // TODO
}

//exercise85()

// ─── Exercise 86 ──────────────────────────────────────────────────────────
// Max of Array via Mapping
// Return the maximum value in an array after transforming each element through
// a function.

function exercise86() {
    // TODO
}

//exercise86()

// ─── Exercise 87 ──────────────────────────────────────────────────────────
// Get N Max Elements
// Return the n largest elements of an array, sorted descending.

function exercise87() {
    // TODO
}

//exercise87()

// ─── Exercise 88 ──────────────────────────────────────────────────────────
// Median of Array
// Compute the median value of a numeric array.

function exercise88() {
    // TODO
}

//exercise88()

// ─── Exercise 89 ──────────────────────────────────────────────────────────
// Negate a Predicate Function
// Return a new function that negates the result of a given predicate function.

function exercise89() {
    // TODO
}

//exercise89()

// ─── Exercise 90 ──────────────────────────────────────────────────────────
// Nest a Flat Array Recursively
// Turn a flat array of linked/parent-referencing objects into a nested tree.

function exercise90() {
    // TODO
}

//exercise90()

// ─── Exercise 91 ──────────────────────────────────────────────────────────
// All Elements Fail Predicate
// Return true if a predicate function returns false for every element in a
// collection.

function exercise91() {
    // TODO
}

//exercise91()

// ─── Exercise 92 ──────────────────────────────────────────────────────────
// Get Nth Argument
// Build a function that returns the argument at index n (negative n counts
// from the end).

function exercise92() {
    // TODO
}

//exercise92()

// ─── Exercise 93 ──────────────────────────────────────────────────────────
// Remove Event Listener
// Remove a previously attached event listener from a DOM element.

function exercise93() {
    // TODO
}

//exercise93()

// ─── Exercise 94 ──────────────────────────────────────────────────────────
// Move Elements to End
// Move a given number of array elements from the front to the end of the
// array.

function exercise94() {
    // TODO
}

//exercise94()

// ─── Exercise 95 ──────────────────────────────────────────────────────────
// Add Delegated Event Listener
// Attach an event listener to an element that supports delegation to child
// selectors.

function exercise95() {
    // TODO
}

//exercise95()

// ─── Exercise 96 ──────────────────────────────────────────────────────────
// Pick Keys from Object
// Return a new object containing only the specified keys from the input
// object.

function exercise96() {
    // TODO
}

//exercise96()

// ─── Exercise 97 ──────────────────────────────────────────────────────────
// Object from Truthy Function Keys
// Build an object containing only the properties for which a function returns
// truthy, given (value, key).

function exercise97() {
    // TODO
}

//exercise97()

// ─── Exercise 98 ──────────────────────────────────────────────────────────
// Filter Array of Objects by Condition
// Filter an array of objects by a condition, while also restricting which
// object keys are kept.

function exercise98() {
    // TODO
}

//exercise98()

// ─── Exercise 99 ──────────────────────────────────────────────────────────
// Hash String to Number
// Hash an input string down to a single whole number.

function exercise99() {
    // TODO
}

//exercise99()

// ─── Exercise 100 ─────────────────────────────────────────────────────────
// Combine Arrays by Position
// Combine multiple arrays element-by-position, using a function to decide how
// values combine.

function exercise100() {
    // TODO
}

//exercise100()

// ─── Exercise 101 ─────────────────────────────────────────────────────────
// Object from Keys and Values Arrays
// Build an object pairing a list of property names with a list of values.

function exercise101() {
    // TODO
}

//exercise101()

// ─── Exercise 102 ─────────────────────────────────────────────────────────
// Group Array Elements by Position
// Group elements of a single array based on their index position.

function exercise102() {
    // TODO
}

//exercise102()

// ─── Exercise 103 ─────────────────────────────────────────────────────────
// String to Array of Words
// Split a sentence/string into an array of its individual words.

function exercise103() {
    // TODO
}

//exercise103()

// ─── Exercise 104 ─────────────────────────────────────────────────────────
// Conditional Function Application
// Apply a function to a value only if it passes a predicate check; otherwise
// return the value unchanged.

function exercise104() {
    // TODO
}

//exercise104()

// ─── Exercise 105 ─────────────────────────────────────────────────────────
// Check if Value is a Number
// Return true if a given value is a genuine number, false otherwise.

function exercise105() {
    // TODO
}

//exercise105()

// ─── Exercise 106 ─────────────────────────────────────────────────────────
// Ungroup Zipped Array with Function
// Reverse a 'zip' grouping by expanding grouped elements back out and
// combining them via a function.

function exercise106() {
    // TODO
}

//exercise106()

// ─── Exercise 107 ─────────────────────────────────────────────────────────
// Distinct Values from Right by Comparator
// Return distinct values scanning from the right side of an array, using a
// comparator function.

function exercise107() {
    // TODO
}

//exercise107()

// ─── Exercise 108 ─────────────────────────────────────────────────────────
// Unique Values by Comparator
// Return all unique values of an array using a custom comparator function.

function exercise108() {
    // TODO
}

//exercise108()

// ─── Exercise 109 ─────────────────────────────────────────────────────────
// Get Nth Element of Array
// Return the element at index n of an array (supports negative indexes from
// the end).

function exercise109() {
    // TODO
}

//exercise109()

// ─── Exercise 110 ─────────────────────────────────────────────────────────
// All Elements from Two Arrays
// Combine every element from two arrays into a single array.

function exercise110() {
    // TODO
}

//exercise110()

// ─── Exercise 111 ─────────────────────────────────────────────────────────
// Build Array from Iterator and Seed
// Build an array by repeatedly applying an iterator function starting from a
// seed value.

function exercise111() {
    // TODO
}

//exercise111()

// ─── Exercise 112 ─────────────────────────────────────────────────────────
// Unflatten Object from Key Paths
// Rebuild a nested object from a flat object whose keys are dot-separated
// paths.

function exercise112() {
    // TODO
}

//exercise112()

// ─── Exercise 113 ─────────────────────────────────────────────────────────
// Unescape HTML Entities
// Convert escaped HTML entities in a string (like &amp;) back to their
// original characters.

function exercise113() {
    // TODO
}

//exercise113()

// ─── Exercise 114 ─────────────────────────────────────────────────────────
// Uncurry Function to Depth N
// Convert a curried function back into one that accepts up to n arguments at
// once.

function exercise114() {
    // TODO
}

//exercise114()

// ─── Exercise 115 ─────────────────────────────────────────────────────────
// Single-Argument Function Wrapper
// Wrap a function so only its first argument is passed through, ignoring the
// rest.

function exercise115() {
    // TODO
}

//exercise115()

// ─── Exercise 116 ─────────────────────────────────────────────────────────
// Predicate Truthy on All Elements
// Check whether a given predicate is truthy for every element of a collection.

function exercise116() {
    // TODO
}

//exercise116()

// ─── Exercise 117 ─────────────────────────────────────────────────────────
// Truncate String to Length
// Truncate a string to a maximum length, adding an indicator like '...' if cut
// off.

function exercise117() {
    // TODO
}

//exercise117()

// ─── Exercise 118 ─────────────────────────────────────────────────────────
// Reduce Object with Accumulator
// Reduce over an object's own keys with an accumulator function, left to
// right.

function exercise118() {
    // TODO
}

//exercise118()

// ─── Exercise 119 ─────────────────────────────────────────────────────────
// Tomorrow's Date as String
// Build a string representing the date for tomorrow.

function exercise119() {
    // TODO
}

//exercise119()

// ─── Exercise 120 ─────────────────────────────────────────────────────────
// String to Snake Case
// Convert a string into snake_case.

function exercise120() {
    // TODO
}

//exercise120()

// ─── Exercise 121 ─────────────────────────────────────────────────────────
// Convert Value to Safe Integer (again)
// Same task as #29 — extra practice coercing a value into a safe integer.

function exercise121() {
    // TODO
}

//exercise121()

// ─── Exercise 122 ─────────────────────────────────────────────────────────
// Add Ordinal Suffix to Number
// Add the correct ordinal suffix (st/nd/rd/th) to a given number.

function exercise122() {
    // TODO
}

//exercise122()

// ─── Exercise 123 ─────────────────────────────────────────────────────────
// String to Kebab Case
// Convert a string into kebab-case.

function exercise123() {
    // TODO
}

//exercise123()

// ─── Exercise 124 ─────────────────────────────────────────────────────────
// Reduce Array-Like to Hash Map
// Reduce an array-like value down into a keyed object/hash map.

function exercise124() {
    // TODO
}

//exercise124()

// ─── Exercise 125 ─────────────────────────────────────────────────────────
// Comma-Separated Decimal Formatting
// Format a floating-point number as a comma-separated decimal string.

function exercise125() {
    // TODO
}

//exercise125()

// ─── Exercise 126 ─────────────────────────────────────────────────────────
// Format Number as Currency
// Format a number as a currency string given a currency code/locale.

function exercise126() {
    // TODO
}

//exercise126()

// ─── Exercise 127 ─────────────────────────────────────────────────────────
// Iterate Callback N Times
// Call a given callback function exactly n times, collecting results.

function exercise127() {
    // TODO
}

//exercise127()

// ─── Exercise 128 ─────────────────────────────────────────────────────────
// Remove From Start Until True
// Remove elements from the start of an array until a function returns true;
// return the removed elements.

function exercise128() {
    // TODO
}

//exercise128()

// ─── Exercise 129 ─────────────────────────────────────────────────────────
// Remove From End Until True
// Same as above, but removing elements from the end of the array.

function exercise129() {
    // TODO
}

//exercise129()

// ─── Exercise 130 ─────────────────────────────────────────────────────────
// Remove N Elements from End
// Remove a given number of elements from the end of an array.

function exercise130() {
    // TODO
}

//exercise130()

// ─── Exercise 131 ─────────────────────────────────────────────────────────
// Remove N Elements from Start
// Remove a given number of elements from the start of an array.

function exercise131() {
    // TODO
}

//exercise131()

// ─── Exercise 132 ─────────────────────────────────────────────────────────
// Symmetric Difference via Comparator
// Get the symmetric difference (items in only one array) between two arrays,
// using a comparator function.

function exercise132() {
    // TODO
}

//exercise132()

// ─── Exercise 133 ─────────────────────────────────────────────────────────
// Symmetric Difference via Mapping
// Get the symmetric difference between two arrays after mapping each element
// through a function.

function exercise133() {
    // TODO
}

//exercise133()

// ─── Exercise 134 ─────────────────────────────────────────────────────────
// Symmetric Difference Between Arrays
// Get the plain symmetric difference between two arrays (no
// comparator/mapping).

function exercise134() {
    // TODO
}

//exercise134()

// ─── Exercise 135 ─────────────────────────────────────────────────────────
// Sum of Powers in Range
// Sum a fixed power of every integer between a start and end value, inclusive.

function exercise135() {
    // TODO
}

//exercise135()

// ─── Exercise 136 ─────────────────────────────────────────────────────────
// String Permutations with Duplicates
// Generate every permutation of a string that may contain duplicate
// characters.

function exercise136() {
    // TODO
}

//exercise136()

// ─── Exercise 137 ─────────────────────────────────────────────────────────
// Stable Sort of Array
// Sort an array while preserving the original relative order of equal
// elements, without mutating the input.

function exercise137() {
    // TODO
}

//exercise137()

// ─── Exercise 138 ─────────────────────────────────────────────────────────
// Variadic Function from Array Input
// Convert a variadic function into a closure that instead accepts a single
// array of arguments.

function exercise138() {
    // TODO
}

//exercise138()

// ─── Exercise 139 ─────────────────────────────────────────────────────────
// Split Multiline String into Lines
// Split a string containing newlines into an array of individual lines.

function exercise139() {
    // TODO
}

//exercise139()

// ─── Exercise 140 ─────────────────────────────────────────────────────────
// Highest Sorted-Insertion Index (Iterator)
// Find the highest index at which a value could be inserted to keep an array
// sorted, using an iterator/mapping function.

function exercise140() {
    // TODO
}

//exercise140()

// ─── Exercise 141 ─────────────────────────────────────────────────────────
// Highest Sorted-Insertion Index
// Find the highest index at which a value could be inserted to keep an array
// sorted.

function exercise141() {
    // TODO
}

//exercise141()

// ─── Exercise 142 ─────────────────────────────────────────────────────────
// Lowest Sorted-Insertion Index
// Find the lowest index at which a value could be inserted to keep an array
// sorted.

function exercise142() {
    // TODO
}

//exercise142()

// ─── Exercise 143 ─────────────────────────────────────────────────────────
// Sort String Alphabetically
// Sort the individual characters of a string into alphabetical order.

function exercise143() {
    // TODO
}

//exercise143()

// ─── Exercise 144 ─────────────────────────────────────────────────────────
// Intersection of Two Arrays
// Return the elements that appear in both of two given arrays.

function exercise144() {
    // TODO
}

//exercise144()

// ─── Exercise 145 ─────────────────────────────────────────────────────────
// Randomize Array Order
// Shuffle the order of an array's elements and return the new array.

function exercise145() {
    // TODO
}

//exercise145()

// ─── Exercise 146 ─────────────────────────────────────────────────────────
// Shallow Clone an Object
// Create a shallow clone (one level deep) of a given object.

function exercise146() {
    // TODO
}

//exercise146()

// ─── Exercise 147 ─────────────────────────────────────────────────────────
// Serialize Cookie Name-Value
// Build a Set-Cookie header string from a cookie name/value pair.

function exercise147() {
    // TODO
}

//exercise147()

// ─── Exercise 148 ─────────────────────────────────────────────────────────
// Hash String to Whole Number
// Second pass at #99 — hash an input string into a whole number.

function exercise148() {
    // TODO
}

//exercise148()

// ─── Exercise 149 ─────────────────────────────────────────────────────────
// Random Element from Array
// Return a randomly chosen element from a given array.

function exercise149() {
    // TODO
}

//exercise149()

// ─── Exercise 150 ─────────────────────────────────────────────────────────
// Run Promises in Series
// Run an array of promise-returning functions one after another, in sequence.

function exercise150() {
    // TODO
}

//exercise150()

// ═══════════════════════════════════════════════════════════════════════════
// TEST CALLS — uncomment each line as you implement the function above
// ═══════════════════════════════════════════════════════════════════════════
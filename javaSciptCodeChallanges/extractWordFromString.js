// Write a JavaScript function to extract a specified number of characters from a string.
// Define a function named truncate_string that takes two parameters: str1, representing the input string, and length, representing the maximum length of the truncated string
truncate_string = function (str1, length) {
    // Check if str1 is a string and length is a positive number
    if ((str1.constructor === String) && (length>0)) {
        // If both conditions are met, return a substring of str1 starting from index 0 and ending at length - 1
        return str1.slice(0, length);
    }
};
// Call the truncate_string function with the input string "Robin Singh" and length 4, and log the result to the console
console.log(truncate_string("Robin Singh",4));

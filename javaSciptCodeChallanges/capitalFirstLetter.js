// // Write a JavaScript function to capitalize the first letter of a string and each word capital.
const capitalFirstLetter= function(str1){
 const titleCaseresult = str1.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
    // const capitalFirstLetterresult = str1.charAt(0).toUpperCase().concat(str1.slice(1));
    return titleCaseresult
}
console.log(capitalFirstLetter('Js string exercises'))

// function toTitleCase(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
//   }
//   console.log(toTitleCase('Js string exercises'))
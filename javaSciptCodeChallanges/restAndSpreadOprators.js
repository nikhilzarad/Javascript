// Rest Operator
//  rest operator is used to collect element in the array either it single parm or multiple.
// we pass spread oprator as param then it call rest oprator

// example 1 avarage
function calculateAverageOfArrays(arrays) {
  if (arrays.length === 0) return 0;

  let sum = 0;
  let allnum = [].concat(...arrays);
  for (let num of allnum) {
    sum += num;
  }
  return sum / allnum.length;
}

// Example usage:
const arrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 888],
];
const average = calculateAverageOfArrays(arrays);
console.log("Average:", average);

//  example 2  sum of numbers
function sum(...numbers) {
    let result = 0;
    for (let num of numbers) {
      result += num;
    }
    return result;
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15


//   spread operators
// spread oprators used to spread or expand the elements of array 
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

function greet(name1, name2, name3) {
  console.log(`Hello, ${name1}, ${name2}, and ${name3}!`);
}

const names = ["Alice", "Bob", "Charlie"];
greet(...names); // Output: Hello, Alice, Bob, and Charlie!
let arr = [1,3,8,7,6,4,5]

// way 1 using function and for loop
function sumArrayForLoop(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  console.log(sumArrayForLoop(arr))
  
//   way 2 using for of loop

function sumArrayForOf(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  }
console.log(sumArrayForOf(arr));


// way 3 using reduce method

function sumArrayReduce(arr){
    return arr.reduce((sum,num)=>sum + num,0)
}

console.log(sumArrayReduce(arr));

// way 4 using forEach
function sumArrayForEach(arr) {
    let sum = 0;
    arr.forEach(num => {
      sum += num;
    });
    return sum;
  }
  console.log(sumArrayForEach(arr));
//   way 5 using map
function sumArrayMap(arr) {
    let sum = 0;
    arr.map(num => {
      sum += num;
    });
    return sum;
  }
  console.log(sumArrayForEach(arr));
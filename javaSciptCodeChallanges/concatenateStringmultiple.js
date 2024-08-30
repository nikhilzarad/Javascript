// Write a JavaScript function to concatenate a given string n times (default is 1).


// way 1
// function concatenateString(str,count){
//     if (typeof(count)=='undefined'){
//         count = 1;

//     }
//     return count < 1 ? '' : new Array(count + 1).join(str);
// }
// console.log(concatenateString('Hello!',5))

// way 2

concatenateString = function (str,n){
    if (typeof(n)=='undefined'){
        n = 1;
    }
    let result = '';
    for (let i = 0; i < n; i++){
        result +=str
    }
    return result
}
console.log(concatenateString('Hello!',2))
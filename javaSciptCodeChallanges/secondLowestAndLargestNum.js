function Second_Greatest_Lowest(arr) {
    // First, sort the array in ascending order
    arr.sort(function(a, b) {
      return a - b;
    });
    
    // Then, get the second lowest number by accessing the index 1
    let secondLowest = arr[1];
    
    // To get the second greatest number, reverse the array and get the element at index 1
    let reversedArr = arr.reverse();
    let secondGreatest = reversedArr[1];
    
    return [secondLowest, secondGreatest];
  }
  console.log(Second_Greatest_Lowest([1,2,3,4,5]));
  
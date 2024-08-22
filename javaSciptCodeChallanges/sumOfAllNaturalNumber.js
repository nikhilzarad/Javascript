function sumOfAllNaturalNumber(n) {
  let sum = 0;
  if (n < 1) return "please enter positive value";
  for (let i = 1; i < n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfAllNaturalNumber(0));

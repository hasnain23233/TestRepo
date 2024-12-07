let arr = [3, 5, 7, 2, 8, 9, 11, 29];
function GreaterNum(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log(GreaterNum(arr));

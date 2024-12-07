let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];
function areElementsUnique(arr) {
  const uniqueElements = new Set(arr);
  return uniqueElements.size === arr.length;
}
let result = areElementsUnique(arr1);
let result2 = areElementsUnique(arr2);

console.log(result);
console.log(result2);

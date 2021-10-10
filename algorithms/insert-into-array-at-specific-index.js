function insertAt(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}
console.log(insertAt([4, 5, 6], [1, 2, 3, 7, 8, 9], 3));
console.log(insertAt(['wed', 'thu', 'fri'], ['mon', 'tue', 'sat', 'sun'], 2));

// =====================================================================

function insertAt(arr1, arr2, n) {
  let localArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArr.splice(n, 0, arr1[i]);
    n++;
  }
  return localArr;
}
console.log(insertAt([4, 5, 6], [1, 2, 3, 7, 8, 9], 3));
console.log(insertAt(['wed', 'thu', 'fri'], ['mon', 'tue', 'sat', 'sun'], 2));

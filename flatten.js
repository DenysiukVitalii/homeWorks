/*
function flatten(arr) { 
let newArr = []; 
for (let i = 0; i < arr.length; i++){ 
if (Array.isArray(arr[i])) { 
for (let j = 0; j < arr[i].length; j++) 
newArr.push(arr[i][j]); 
} else newArr.push(arr[i]); 
} 
return newArr; 
} 
*/

function flatten(arr) {

  let newArr = [];

  function recFlatten(arr) { 
    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        recFlatten(arr[i]);
      } else {
        newArr.push(arr[i]);
      }
    }
  }
  recFlatten(arr);
  return newArr;
}

console.log(flatten([1, [2, 3, [3,8]], [4, [5 ,6],7]]));
// => [1, 2, 3, 4, 5, 6]
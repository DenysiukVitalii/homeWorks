function map(object, fun) {
 let arr = [];
 let newObject = {};
  if(Array.isArray(object)) {
   for(let i = 0; i < object.length; i++)
    arr[i] = fun(object[i]);
    return arr;
  } else {
      for (let key in object) 
       newObject[key] = fun(object[key]);
       return newObject;
      }
}
 
console.log(map([1, 2, 3, 4], (el) => ++el));
// => [2, 3, 4, 5]
console.log(map({a: 1, b: 2, c: 3}, (el) => ++el));
// => {a: 2, b: 3, c: 4}

function map(ob, fun) {
	let arr = [];
	let obj = {};
	 if(Array.isArray(ob)) {
	 	for(let i = 0; i < ob.length; i++)
	 		arr[i] = fun(ob[i]);
	 	return arr;
	 } else {
	 		for (let key in ob) 
   			obj[key] = fun(ob[key]);
			return obj;
	 }
}

console.log(map([1, 2, 3, 4], (el) => ++el));
// => [2, 3, 4, 5]
console.log(map({a: 1, b: 2, c: 3}, (el) => ++el));
// => {a: 2, b: 3, c: 4}
function map(ob, fun) {
	for (let key in ob) 
   ob[key] = fun(ob[key]);
	return ob;
}

//console.log(map([1, 2, 3, 4], (el) => ++el));
// => [2, 3, 4, 5]
//console.log(map({a: 1, b: 2, c: 3}, (el) => ++el));
// => {a: 2, b: 3, c: 4}
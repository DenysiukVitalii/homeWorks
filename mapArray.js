
function mapArray(arr, fun) {
	let newArr = [];
	for (var i = 0; i < arr.length; i++) {
		newArr[i] = fun(arr[i]);
	}
	return newArr;
}
 
console.log(mapArray([1, 2, 3, 4], (el) => ++el));
// => [2, 3, 4, 5]
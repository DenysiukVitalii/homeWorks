
function mapArray(arr, fun) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = fun(arr[i]);
	}
	return arr;
}

//console.log(mapArray([1, 2, 3, 4], (el) => ++el));
// => [2, 3, 4, 5]
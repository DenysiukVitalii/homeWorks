function leftPad(str, len, sym) {
    if (str.length >= len) {
        return str;
    }
    let arr = [];
    for (let i = 0; i < len - str.length; i++) {
        arr.push(sym);
    }
    arr.push(str);
    return arr.join("");
}


function leftPad2(number, len, num) {
	let arr = [];
	arr.length = len;
	for (let i = 0; i < len - (number + " ").length + 1; i++) {
        arr.push(num);
    }
    arr.push(number);
    return arr.join("");
}
/*
console.log(leftPad('foo', 5));
// => "  foo" 

console.log(leftPad('foobar', 6));
// => "foobar" 

console.log(leftPad2(1, 2, 0));
// => "01" 

console.log(leftPad2(17, 5, 0));
// => "00017"
*/ 
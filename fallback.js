let obj = { 
 id: 0,
 info: {
  name: 'Alex',
  surname: '',
  age: null
 }, 
 description: ''
};

let fallbackObj = {
 id: 2,
 info: {
  name: 'default name',
  surname: 'default surname',
  age: 22
  },
 description: 'default description'
}

function fallback(obj, fallbackO) {
	for(let key in obj) {
		if (typeof obj[key] === 'object' && obj[key] !== null) {
			fallback(obj[key], fallbackO[key]);
		} else 
		{
			if (!obj[key]) {
				obj[key] = fallbackO[key];
		} 
	}
		
	}
	return obj;
}

console.log(fallback(obj, fallbackObj));
  // => { id: 2, info: { name: 'Alex', surname: 'default surname', age: 22 }, description: 'default description' }
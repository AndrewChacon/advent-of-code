const fs = require('fs');
let array = fs
	.readFileSync('input.txt', { encoding: 'utf-8' })
	.split('\n')
	.map(x => parseInt(x));

let increasing1 = 0;
let increasing2 = 0;

for (let i = 1; i < array.length; i++) {
	let currentElement = array[i];
	let prevElement = array[i - 1];
	if (prevElement != null) {
		if (currentElement > prevElement) increasing1++;
	}
}

for (let i = 3; i < array.length; i++) {
	let currentData = array[i] + array[i - 1] + array[i - 2];
	let prevData = array[i - 1] + array[i - 2] + array[i - 3];
	if (currentData > prevData) increasing2++;
}

console.log(`Increasing Part 1: ${increasing1}`);
console.log(`Increasing Part 2: ${increasing2}`);

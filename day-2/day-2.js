const fs = require('fs');
let array = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n');

let forward1 = 0;
let depth1 = 0;

for (let i = 0; i < array.length; i++) {
	array[i] = array[i].split(' ');
}

for (let i = 0; i < array.length; i++) {
	switch (array[i][0]) {
		case 'forward':
			forward1 += parseInt(array[i][1]);
			break;
		case 'up':
			depth1 -= parseInt(array[i][1]);
			break;
		case 'down':
			depth1 += parseInt(array[i][1]);
			break;
		default:
	}
}

console.log(`Part 1`);
console.log(`Forward: ${forward1}, Depth: ${depth1}`);
console.log(`Result: ${forward1 * depth1}`);

let aim2 = 0;
let depth2 = 0;
let forward2 = 0;

for (let i = 0; i < array.length; i++) {
	switch (array[i][0]) {
		case 'forward':
			forward2 += parseInt(array[i][1]);
			depth2 += aim2 * parseInt(array[i][1]);
			break;
		case 'up':
			aim2 -= parseInt(array[i][1]);
			break;
		case 'down':
			aim2 += parseInt(array[i][1]);
			break;
		default:
	}
}

console.log(`Part 2`);
console.log(`Forward: ${forward2}, Depth: ${depth2}, Aim: ${aim2}`);
console.log(`Result: ${forward2 * depth2}`);

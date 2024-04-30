/**
 * автоматизация для теста на IQ
 */
function changeParity (prev, current) {
	return (prev % 2 === 0 && current % 2 !== 0) || (prev % 2 !== 0 && current % 2 === 0);
}

function iqTest(str) {
    const arr = str.split(' ');
	let idx = 0;
	let index;
	let stop = false;

	do {
		if (idx < 2) {
			if(changeParity(arr[0], arr[1])) {
				index = changeParity(arr[1], arr[2]) ? 2 : 1;
				stop = true;
			}
		} else {
			if (changeParity(arr[idx - 1], arr[idx])) {
				index = idx + 1;
				stop = true;
			}
		}
		idx++;
	} while (!stop);
	return index;
}

console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 1 1"));
console.log(iqTest("1 2 4 6"));
console.log(iqTest("2 4 6 8 9"));

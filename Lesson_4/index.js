/**
 * уменьшение вложенности массива
 */
function flat(array) {
	let newArr = [];
	
	
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArr = newArr.concat(flat(array[i]));
    } else {
		newArr.push(array[i]);
	}
  }

  return newArr;
}

console.log(flat([])); //[]
console.log(flat([[1, 5], 5, 10])); //, [1, 5, 5, 10]
console.log(flat([1, 2, [3, 4]])); //, [1, 2, 3, 4]
console.log(flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])); //, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/**
 * функция для получения числа из последовательности Фибоначчи
 */
function fibonacci(index) {
  let fibonacciList = [0, 1];
  if (index === 1 || index === 2) {
    return index - 1;
  }

  for (let i = 2; i <= index; i++) {
    fibonacciList.push(fibonacciList[i - 2] + fibonacciList[i - 1]);
  }
  
  return fibonacciList[index - 1];
}

console.log(fibonacci(1));// 0
console.log(fibonacci(2)); //1
console.log(fibonacci(13)); //144

/**
 * рекурсивный бинарный поиск
 */

function binarySearch(array, element) {
  let left = 0;
  let right = array.length - 1;
  let center = Math.floor((left + right)/2);

  if (array[center] === element) {
    return true;
  } else if (left > right) {
    return false;
  }
 
	let newArr;
	
	if (array[center] < element) {
		newArr = array.slice(center + 1);
	} else {
		newArr = array.slice(left, center - 1);
	}
	return binarySearch(newArr, element);
}

console.log(binarySearch([], 3));// false
console.log(binarySearch([3], 3));// true
console.log(binarySearch([1, 2, 3, 4, 5], 4));//true
console.log(binarySearch([1, 2, 3, 5, 6], 4));// false

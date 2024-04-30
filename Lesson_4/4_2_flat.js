/**
 * 4.2. уменьшение вложенности массива
 * 
 * Есть массив с элементами и другими массивами — вложенность может быть любой.
 * Нужно устранить вложенность, сохранив очерёдность элементов.
 * 
 * Примеры:
 * flat([]); // []
 * flat([[1, 5], 5, 10]); //[1, 5, 5, 10]
 * flat([1, 2, [3, 4]]); // [1, 2, 3, 4]
 * flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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

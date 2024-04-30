/**
 * 4.5. рекурсивный бинарный поиск
 * 
 * Чуть упростим задачу поиска.
 * Теперь будем не возвращать индекс искомого элемента, а лишь говорить,
 * присутствует элемент или нет
 * (этакий оптимизированный includes на сортированном массиве).
 * 
 * Примеры:
 * binarySearch([], 3);// false
 * binarySearch([3], 3);// true
 * binarySearch([1, 2, 3, 4, 5], 4);//true
 * binarySearch([1, 2, 3, 5, 6], 4);// false
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
  
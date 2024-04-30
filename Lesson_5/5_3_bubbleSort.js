/**
 * 5.3. реализация сортировки пузырьком
 * 
 * Примеры:
 * bubbleSort([5, 3, 2, 1]) => [1, 2, 3, 5]
 * bubbleSort([1, 2, 3]) => [1, 2, 3]
 */

function bubbleSort(array) {
  for (let i = 0, count = array.length; i < count; i++) {
    for (let j = 1; j < count - i; j++)
    if (array[j - 1] > array[j]) {
      array[j] = array[j - 1] + array[j];
      array[j - 1] = array[j] - array[j - 1];
      array[j] = array[j] - array[j - 1];
    }
  }
  return array;
}

console.log(bubbleSort([5, 3, 2, 1]));
console.log(bubbleSort([1, 2, 3]));

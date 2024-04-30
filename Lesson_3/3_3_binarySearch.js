/**
 * 3.3. реализация бинарного поиска на практике
 * 
 * Давайте напишем простенький бинарный поиск на примере из предыдущей статьи.
 * На входе будем иметь отсортированный в алфавитном порядке список из растений.
 * Напишем функцию, которая будет бинарным поиском искать позицию переданного в неё растения.
 * 
 * Примеры:
 * binarySearch(plants, "Пион"); // 5
 * binarySearch(plants, "Роза"); // null
 */
 function binarySearch(plants, plant) {
	let left = 0;
	let right = plants.length - 1;
	let center = 0;
	let i = 0;
	const stopCount = Math.log2(plants.length);
	
	do {
		center = Math.floor((right + left) / 2);

		if (plants[center] === plant) {
			return center;
		}
		if (plant > plants[center]) {
			if (right - left === 2) {
				return plants[right] === plant ? right : null;
			}
			left = center;
		} else {
			if (right - left === 2) {
				return plants[left] === plant ? left : null;
			}
			right = center;
		}
		i++;
	} while (i <= stopCount);
  return null;
}
const plants = [
  "Аспарагус",
  "Гвоздика",
  "Жасмин",
  "Калина",
  "Малина",
  "Пион",
  "Тысячелистник",
  "Хризантема",
  "Шафран",
  "Юкка",
];

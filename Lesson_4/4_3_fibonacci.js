/**
 * 4.3. функция для получения числа из последовательности Фибоначчи
 * 
 * Ещё одна классическая и простая для рекурсивного решения задача:
 * функция для получения числа из последовательности Фибоначчи по индексу.
 * Первое её число — 0, второе — 1, а каждое последующее — сумма двух предыдущих.
 * 
 * Примеры:
 * fibonacci(1);// 0
 * fibonacci(2); //1
 * fibonacci(13); //144
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
  
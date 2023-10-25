// 1. Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.

// function compact(arr) {
//     if(!Array.isArray(arr)) {
//         return [];
//     }
//     const uniqueArr = arr.reduce((accumulator, currentValue) => {
//         if (!accumulator.includes(currentValue)) {
//             accumulator.push(currentValue);
//         }
//         return accumulator;
//     }, []);
//     return uniqueArr;
// }
// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]

// 2. Написати функцію createArray(start, end), яка приймає на вхід 2 параметри: початкове значення та кінцеве значення, а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями).

// function createArray(start, end) {
//     const rangeValues = [];
//     for (let i = start; i <= end; i++) {
//         rangeValues.push(i);
//     };
//     return rangeValues;
// };
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]

// 3. Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится один раз, число а+1 - два рази і т.д.

// function printNumbers(a, b) {
//   if (a > b) {
//     throw new Error("a має бути менше b");
//   }
//   let count = 1;
//   for (let i = a; i <= b; i++) {
//     for (let j = 0; j < count; j++) {
//       console.log(i);
//     }
//     count++;
//   }
// }
// printNumbers(1, 5);

// 4. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.

// function randArray(k) {
//     let resultArr = [];
//     for (let i = 0; i < k; i++) {
//         const randomInt = Math.floor(Math.random() * 500) + 1;
//         resultArr.push(randomInt);
//     }
//     return resultArr;
// };

// const k = 5;
// const randomNumbers = randArray(k);
// console.log(randomNumbers);

// 5. Є масив arr, який може містити підмасиви, написати функцію showByTypes яка виведе у консоль масиви які складаються із примітивних даних початкового масиву і усіх вкладених масивів, але одного типу даних (не приводити тип String в Number навіть, якщо там лише число).

// function showByTypes(arr) {
//   const categorizedItems = {
//     numbers: [],
//     strings: []
//   };

//   function categorize(arr) {
//     for (let item of arr) {
//       if (Array.isArray(item)) {
//         categorize(item);
//       } else {
//         if (typeof item === 'number') {
//           categorizedItems.numbers.push(item);
//         } else if (typeof item === 'string') {
//           categorizedItems.strings.push(item);
//         }
//       }
//     }
//   }
//   categorize(arr);
//   return categorizedItems;
// }
// const arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
// showByTypes(arr);


// 6. Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.

// function calc(a, b, op) {
//   if (op === 1) {
//       return a - b;
//   } else if (op === 2) {
//       return a * b;
//   } else if (op === 3) {
//       if (b === 0) {
//           return "Помилка: ділення на нуль";
//       }
//       return a / b;
//   } else {
//       return a + b;
//   }
// }

// console.log(calc(5, 2, 2)) //10

// 7. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.

// function findUnique(arr) {
//   if (!arr || !Array.isArray(arr) || arr.length === 0) {
//       return false;
//   }

//   for (let i = 0; i < arr.length; i++) {
//       if (arr.indexOf(arr[i]) !== i) {
//           return false;
//       }
//   }
//   return true;
// }
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true
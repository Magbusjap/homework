// Задача 1.
// Напишите цикл, который выводит числа от 1 до 20, но пропускает те числа, которые делятся на 4 без остатка.

console.log("Задача 1");
for (let i = 1; i < 21; i++) {
	if (i % 4 === 0) {
		console.log(i);
	}
}

// Задача 2.
// С помощью цикла for вычислите факториал числа (произведение всех чисел от 1 до заданного числа).
// Используйте prompt для получение начального значения.

let num = +prompt("Введите факториал числа: ");
let result = 1;
for (let i = 1; i <= num; i++) {
	result *= i;
}
console.log("Задача 2");
console.log(`Факториал от числа ${num} равен: ${result}`);

// *Задача 3.
// Выведите в консоль шахматную доску размером 8x8, где символы чередуются (например, # и пробел).
// Начинайте с # в первой ячейке первой строки.

console.log("Задача 3");
for (let row = 8; row >= 1; row--) {
	let line = row + " ";
	for (let col = 1; col <= 8; col++) {
		if ((row + col) % 2 === 0) {
			line += "#\t";
		} else {
			line += "\t";
		}
	}
	console.log(line);
}

let numbers = "  ";
for (let number = 1; number <= 8; number++) {
	numbers += number + "\t";
}
console.log(numbers);

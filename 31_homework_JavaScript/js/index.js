// Функции

//----------------------------
// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку.
// Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.
// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90
//----------------------------

function calculateFinalPrice(basePrice, discountPercent, taxPercent) {
	const discountedPrice = basePrice - (basePrice * discountPercent) / 100;
	const totalPtice = discountedPrice + (discountedPrice * taxPercent) / 100;
	return totalPtice;
}

const basePrice = +prompt("Введите базовую цену: ");
const discountPercent = +prompt("Введите процент скидки: ");
const taxPercent = +prompt("Введите налоговую ставку: ");

console.log(
	"Итоговая цена: " +
		calculateFinalPrice(basePrice, discountPercent, taxPercent),
);

//----------------------------
// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456",
// функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".
//----------------------------

const checkAccess = (username, password) => {
	if (username === "admin" && password === "123456") {
		return "Доступ разрешен";
	} else {
		return "Доступ запрещен";
	}
};

const username = prompt("Введите имя пользователя: ");
const password = prompt("Введите пароль: ");

console.log(checkAccess(username, password));

//----------------------------
// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.
//----------------------------

const getTimeOfDay = (hour) => {
	if (hour >= 0 && hour <= 5) {
		return "Ночь";
	} else if (hour >= 6 && hour <= 11) {
		return "Утро";
	} else if (hour >= 12 && hour <= 17) {
		return "День";
	} else if (hour >= 18 && hour <= 23) {
		return "Вечер";
	} else {
		return "Некорректное время";
	}
};

let hour = +prompt("Введите текущее время (в часах): ");
console.log(getTimeOfDay(hour));

//----------------------------
// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"
//----------------------------

const findFirstEven = (start, end) => {
	for (let i = start; i <= end; i++) {
		if (i % 2 == 0) {
			return i;
		}
	}
	return "нет";
};

let start = +prompt("Введите начало диапазона: ");
let end = +prompt("Введите конец диапазона: ");
console.log(
	`Чётных чисел в диапазоне от ${start} до ${end} — ${findFirstEven(start, end)}.`,
);

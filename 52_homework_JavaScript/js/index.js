//----------------------------
// Задание 1.
// Дан массив пользователей:
// const users = [
//   { name: 'Alex', age: 24, isAdmin: false },
//   { name: 'Bob', age: 13, isAdmin: false },
//   { name: 'John', age: 31, isAdmin: true },
//   { name: 'Jane', age: 20, isAdmin: false },
//
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }
//----------------------------

console.log("Задание 1");
const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];

console.log(users);

users.push(
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

//----------------------------
// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users),
// которая возвращает средний возраст пользователей.
//----------------------------

console.log("Задание 2");
function getUserAverageAge(users) {
	if (users.length === 0) return 0;

	let totalAge = 0;
	users.forEach(function (user) {
		totalAge += user.age;
	});

	return totalAge / users.length;
}

console.log(`Средний возраст пользователей: ${getUserAverageAge(users)}`);

//----------------------------
// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users),
// которая возвращает массив всех администраторов.
//----------------------------

console.log("Задание 3");
function getAllAdmins(users) {
	const admins = [];
	users.forEach(function (user) {
		if (user.isAdmin) {
			admins.push(user);
		}
	});
	return admins;
}

const admins = getAllAdmins(users);
console.log(admins);

//----------------------------
// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [],
// если n == undefined, то возвращается массив с первым элементом.
//----------------------------

console.log("Задание 4");
function first(arr, n = 1) {
	const result = [];
	for (let i = 0; i < n; i++) {
		result.push(arr[i]);
	}
	return result;
}

console.log(first([1, 2, 3], 2));
console.log(first([1, 2, 3], 0));
console.log(first([1, 2, 3]));

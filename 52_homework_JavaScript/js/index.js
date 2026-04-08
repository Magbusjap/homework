//----------------------------
// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.
//----------------------------

const person = {
	name: "",
	age: "",
	role: "",
	isLearning: true,
};

const personName = prompt("Как тебя зовут? ");
const personAge = prompt("Сколько вам лет? ");
const personRole = prompt("Какая у вас роль? ");

person.name = personName;
person.age = personAge;
person.role = personRole;

console.log(person);

//----------------------------
// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.
//----------------------------

function isEmpty(object) {
	for (let obj in object) {
		return false;
	}
	return true;
}
// Проверка:
console.log(isEmpty({}));
console.log(isEmpty({ имя: "Арокен" }));

//----------------------------
// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения
// из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.
//----------------------------

const task = {
	title: "Выучить JavaScript",
	description: "Пройти модуль по объектам",
	isCompleted: false,
};

function cloneAndModify(object, modifications) {
	return { ...object, ...modifications };
}
const updatedTask = cloneAndModify(task, {
	isCompleted: true,
	priority: "Высокий",
});

for (let key in updatedTask) {
	console.log(`${key}: ${updatedTask[key]}`);
}

//----------------------------
// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);
//----------------------------

const callAllMethods = (obj) => {
	for (let key in obj) {
		if (typeof obj[key] === "function") {
			obj[key]();
		} else {
			console.log(`Свойство ${key}: ${obj[key]}`);
		}
	}
};

const myObject = {
	method1() {
		console.log("Метод 1 пошел");
	},
	method2() {
		console.log("Метод 2 пошел");
	},
	property: "Я просто строка",
};

callAllMethods(myObject);

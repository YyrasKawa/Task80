/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const myPerson = {
    name: 'Yury',
    surname: 'Kavalenka',
    favoriteNumber: 11
}

console.log(
  `My name is ${myPerson.name} ${myPerson.surname} and my favorite number is ${myPerson.favoriteNumber}`
);
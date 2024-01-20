/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *my profession is developer
 * 3. Выведите значение последней переменной в консоль
 */

const myName = 'Yury'
const myLastname = 'Kavalenka'
const myProfession = 'Developer'

const aboutMy = `Меня зовут ${myName} ${myLastname} и я ${myProfession}`
console.log(aboutMy)
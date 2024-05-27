
// Задача 2
// Написать функцию, которая на вход принимает число и возвращает строку с переданным числом и словом "копмьютер" в нужном падеже.

// Решение
// Для решения задачи необходимо всего два условия с соответсвующими исключениями:
// 1. Если на конце числа 1, за исключением случая когда два последних числа 1 и 1, то необходимо вернуть "компьюте-р"
// 2. Если на конце числа 2, 3, или 4, за исключением 12, 13 и 14, то нужно вернуть "компьюте-ра"
// Во всех остальных случаях вернется "компьюте-ров"

// Ответ

function getComputerStr(num) {
    const lastNum = num % 10;
    const lastTwoNums = num % 100;
  
    if (lastNum === 1 && lastTwoNums !== 11) return `${num} компьютер`;
  
    if ([2, 3, 4].includes(lastNum) && ![12, 13, 14].includes(lastTwoNums))
      return `${num} компьютерa`;
  
    return `${num} компьютеров`;
  }


function test () {
    n = 1000;
    while(n >= 0) {
        console.log(getComputerStr(n))
        n--
    }
}

test()


add(a,b)1 + 80 // 81
subtract(60) - 40 // 20
multiply(2) * 3.4 // 6.8 
divide(5.0) / 2.5// 2


var number = 5
 
number++ // 5... hmmmm
 
number // 6 -- the number was incremented after it was evaluated
 
number-- // 6
 
number // 5




var nuimber = 10

function add5() {
  number += 5
}
function divideBy3() {
  number /= 3
}
divideBy3()

console.log(number) //3.333333335

add5()

console.log(number) //8.33333333335

// reset number
number = 10

add5()

console.log(number) // 15

divideBy3()

console.log(number) // 5



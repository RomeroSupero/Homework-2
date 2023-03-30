//1 
let firstNumber = Number(prompt('one'));
let secondNumber = Number(prompt('two'));
let operation = prompt('+ - * /')

if (operation === '+') {
 console.log(firstNumber + secondNumber);
}
else if ( operation=== '-') {
  console.log(firstNumber - secondNumber);
}
else if (operation === '*') {
  console.log(firstNumber * secondNumber);
}
else if (operation === '/' && secondNumber === 0) {
  alert ('Error 404')
}
else if (operation === '/') {
  console.log(firstNumber / secondNumber);
}

//2

let i = 1

while (i <= 20) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++
}

//3
let login = prompt('login')
let password = prompt ('Password')

if ( login == 'admin' && password == '12345' ) {
  alert ('Welcome')
}
else {
  alert ('Not yet correct login')
}

//4

let age = Number(prompt('Напиши сколько лет'))
let resultAge = age >= 18 ? console.log(true) : console.log(false);

//5
 
let price = Number(prompt('Enter your price'))

if (price > 100 && price < 3000) {
  console.log(price-price*0.03);
}
else if (price > 3000 && price < 10000) {
 console.log (price-price*0.05);
} 
else if (price >= 10000) {
  console.log (price-price*0.07);
}
else {
  alert ('У вас немаэ знижки сплатiть данну сумму')
}
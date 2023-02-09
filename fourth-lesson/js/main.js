// function declaration
// function sayHi() {
//     console.log('Привіт привіт');
// }

// sayHi();
// // function expression
// let sayHi = function() {
//    console.log('Привіт');
// }; // потрібна крапка з комою

// console.log(sayHi);
// sayHi()
// console.log('sayHi()1111111111111', sayHi());


// різниця між ними - поняття heap

// function myFunc1() {
//     console.log('Function declaration');
// }

// myFunc1();

// let myFunc2 = function() {
//    console.log('Function expression');
// };

// myFunc2();
// let func = sayHi;
// console.log('create my func', func);
// console.log('call my func', func()); // Привіт
// sayHi(); // Привіт

// let func = sayHi(); // кожного разу, як викликаються () - спрацьовує функція
// console.log(func);
// func(); // Привіт
// sayHi(); // Привіт  

// аргументи
// function showMessage(name) {
//   console.log(`Hello ${name}!`);
// }

// showMessage('Mike');
// showMessage('John');


// function calculateSum(numToCalculate) {
//     let total = 0;
//     for(let i=0; i<=numToCalculate;i++) {
//         total = total + i; // total+=1
//     }
//     console.log('total', total);
// }

// calculateSum(6);
// calculateSum(10);
// calculateSum(100);

// function splitString(myString) {
//     console.log(myString.split(' '));
// }

// splitString('aa bb cc dd');
// splitString('11 22 33 33');

// showMessage(userName1, 10, );
// showMessage('John', 'Lennon');

// console.log('Mike', 'Jordan');
// console.log('John', 'lennon');
// console.log('John1', 'lennon1');

// return
// function add(a, b) {
//   const result = a + b;
//   let finishResult = 0;
//   if (result > 100) {
//     finishResult = result;
//   } else if(result <100 && result>50) {
//     finishResult = result/2;
//   } else {
//     finishResult = 0;
//   }
//   console.log(finishResult);
//   return finishResult;
// }

// function add1(a, b) {
//     const result = a + b;
//     if (result > 100) {
//       return result;
//     } 
//     if(result>50) {
//       return result/2;
//     }
//     return 0;
//   }

// const result = add(10, 10);
// console.log(result);

// function findLargestNumber(numbers) {
//   let max = numbers[0];
//   for (let i = 1; i < numbers.length; i += 1) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   return max;
// }
// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// дефолтні значення
// function min(a, b=15) {
//     console.log(a);
//     console.log(b);
//   return a < b ? a : b;
// }
// console.log(min(10, 20));
// console.log(5 < undefined);


// callstack - порядок виконання функцій(перший прийшов - останній пішов) + вкладка source в браузері
// function firstFunction() {
//     console.log('log1');
//     console.log('log2');
// }

// function secondFunction() {
//     console.log('log3');
//     firstFunction ();
// }
  
// const mySecFunc = secondFunction();


// асинхронні функції

// setInterval(function myCallback(a, b){
//  console.log(a);
//  console.log(b);
// }, 500, 'Parameter 1', 'Parameter 2');
// setTimeout(function callback(){
//     console.log('From inside setTimeout');
// }, 2000);

// callstack з асинхронними функціями
// setTimeout(function callback(){
//     console.log('From inside setTimeout');
// }, 3000);

// setTimeout(function callback(){
//     console.log('From inside second setTimeout');
// }, 1000);

// console.log('First console.log');


// область видимості функції
// function setColor(color){
//     // redColor = color === 'red' ? color : 'Not red';
//     if(color === 'red'){
//         redColor = color;
//         if(true){
//             var redColor;
//         }
//     } else {
//         redColor = 'Not red';
//     }
//     console.log(redColor);
// }
// setColor('red1');
// console.log('redColor', redColor);

// arguments псевдомасив
// function myFunc(a, b, c) {
//     console.log(arguments[0]);
//     // Expected output: 1
  
//     console.log(arguments[1]);
//     // Expected output: 2
  
//     console.log(arguments[2]);
//     // Expected output: 3
// }
  
// myFunc(1, 2, 4);


// патерн раннє повернення
// const courses = ['HTML', 'CSS', 'JS', 'React']

// function checkCourse(course) {
//     let myCourses = [];
//     if(!courses.includes(course)){
//         console.log('New course added');
//         courses.push(course);
//         myCourses = courses.slice();
//     } else {
//         console.log('This course already exists');
//         myCourses = courses.slice();
//     }
//     return myCourses;
// }

// function checkCourse1(course) {
//     let myCourses = [];
//     if(!courses.includes(course)){
//         console.log('New course added');
//         courses.push(course);
//         myCourses = courses.slice()
//         return myCourses;
//     }

//     console.log('This course already exists');
//     return courses.slice();
// }

// const newCourses = checkCourse1('React');
// console.log('' ,newCourses);

// console.log('join' ,newCourses.join(', '));

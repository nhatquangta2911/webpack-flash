require('./css/styles.scss');

window.onload = function() {


// 1. const
// const pi = 3.142;

// var calcArea = (r) => pi * r * r;
// console.log(Math.round(calcArea(4)));

// function calcArea(r) {
//    console.log('The area : ' + pi * (r ** 2));
// }

// var calcArea = (r) => {
//   const pi = 1;
//   console.log('The area is : ' + pi * r * r);
// };
// calcArea(5);

// Test jQuery
// window.onload = function() {
//
//   const pi = 3.14;
//   var title = document.getElementById("main-title");
//   title.onclick = function() {
//     console.log('Hi ' + pi);
//   };
//
// };


//  2. let

// window.onload = function() {
//
//   var items = document.getElementsByTagName("li");
//
//   for (let i = 0; i < items.length; i++) {
//     items[i].onclick = function() {
//       console.log(i + 1);
//     };
//   }
//
// };


// 3. default parameters


  // function log(number = 0) {
  //   console.log(number);
  // }
  //
  // log();

  // function specialLog(name = 'Quang', age = 22) {
  //   console.log('My name is ' + name +
  //              ' and I\'m turning ' + age +
  //              ' this year');
  // }
  //
  // specialLog('Ryan', 21); // Can be overrided


// 4. spread operator

// var numbers1 = [29, 11];
// var numbers2 = [...numbers1, 19, 97];
//
// function value(a, b, c, d) {
//     console.log(a + b + c + d);
// }
//
// value(...numbers2);


// 5. template strings

// var note = `Template strings is pretty similar to normal strings
// except that it has a lot more extra features and cool stuff you would be ablt to do`;

// console.log(note);

// function specialLog(name, age) {
//   console.log(`My name is ${name}
// I'm turning ${10 + 12 + age} this year`);
// }
//
// specialLog('Ryan', 22);
//


// 6. Object literal Enhancement

// var name = 'Ryan';
// var age = 22;
//
// var meMyself = {
//
//   name, age,
//
//   doStuff(something) {
//     console.log(`${name} - ${age} did not ${something} hard`);
//   }
//
// };
//
// console.log(meMyself.name);
// console.log(meMyself.doStuff('study'));


// 7. New String Methods (repeat, startsWith, endsWith, includes)

// var str = `It's time for goodbye!
// `;
//
// console.log(str.repeat(100));
//
// var str = "It's time for goodbye!";
//
// console.log(str.startsWith(`I`));
// console.log(str.startsWith('time', 5));
// console.log(str.endsWith('time', str.length - 13));


// 8. Arrow functions

// var dude = {
//   name: 'Ryan',
//   sleep(times) {
//     window.setInterval( () => {
//       if(times > 0) {
//         console.log(this.name + ` sleeped ${times} times in this week`);
//         times--;
//       }
//     }, 300);
//   }
// };
//
// dude.sleep(33);


// 9. Sets

// var numbers = [2, 9, 1, 1, 1, 9, 9, 7];
//
// var refinedNumbers = new Set(numbers);
//
// console.log(...refinedNumbers);


// 10. Generators

  // function* gen() {
  //   yield console.log('Work #1');
  //   console.log('Work #2');
  //   yield console.log('Work #3');
  //   yield console.log('DONE');
  // }
  //
  // // setting up generators + return an iterator
  // var myGen = gen();
  // myGen.next();

  function* generator() {
    var tweets = yield $.getJSON('./data/tweets.json');
  }

  function genWrapper(generator) {
    var myGen  = generator();

    function handle(yielded) {
      if(!yielded.done) {
        yielded.value.then(data => handle(myGen.next(data)));
      }
    }
  }




};

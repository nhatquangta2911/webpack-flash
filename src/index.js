require('./css/styles.scss');
import 'jquery';

// import { foo } from 'my-module.js';
// import * as myModule from 'my-module.js';
// import { foo } from "my-module";

import {
  sayHi,
  sayHello,
  pi,
  object
} from './my-module.js';

window.onload = function() {

  // $("#small-title").on("click", () => {
  //   $("#small-title").css({"color": "rgb(98, 199, 197)"});
  //   $("#small-title").css({"font-weight": "bold"});
  //   $("#small-title").css({"font-family": "sans-serif"});
  //   $("#small-title").css({"font-size": "30px"});
  // });

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


  // $("#small-title").on("click", () => {
  //   var request = new XMLHttpRequest();
  //   request.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
  //   request.onload = () => {
  //     var data = JSON.parse(request.responseText);
  //     console.log(data[1]);
  //   };
  //   request.send();
  // });

  // JS Coders Tokyo

  // var numbers = [2, 9, 1, 1, 1, 9, 9, 7];
  //
  // var setNumbers = new Set(numbers);
  //
  // var squaredNumbers = [...setNumbers].map(x => x * x );
  //
  // console.log(squaredNumbers);

  // function sum() {
  //
  //   const numbers = Array.from(arguments);
  //
  //   return numbers.reduce((sum, num) => {
  //     return sum + num;
  //   }, 0);
  //
  // }
  //
  //
  // console.log(sum(2, 9, 1, 1, 1, 9, 9, 7));
  //

  // function concatString() {
  //
  //   const words = Array.from(arguments);
  //
  //   return words.reduce((result, word) => {
  //     return result.concat(word, ' ');
  //   }, '');
  //
  // }
  //
  // console.log(concatString('Ta', 'Nhat', 'Quang'));

  // var student1 = {
  //   "name": "Ryan",
  //   "age": 22,
  //   "rate": 3
  // };
  // var student2 = {
  //   "name": "Andrew",
  //   "age": 19,
  //   "rate": 4
  // };
  //
  // var students = [student1, student2];
  //
  // function totalRate() {
  //
  //   const students = Array.from(arguments);
  //
  //   return students.reduce((totalRate, student) => {
  //     return totalRate + student.rate * student.age;
  //   }, 0);
  //
  // }
  //
  // console.log(totalRate(...students));

  // 9-10. call-apply

  // function specialGreeting() {
  //   console.log(`Hello ${this.name} !`);
  // }
  //
  // var boss = {
  //   name: 'Ryu',
  //   weight: 3.3
  // };
  //
  // specialGreeting.call(boss);

  // function sum() {
  //
  //   const summary = Array.from(arguments);
  //
  //   return summary.reduce((sum, num) => sum + num, 0);
  //
  // }
  //
  // function average() {
  //
  //   return sum.apply(null, arguments) / arguments.length;
  //
  // }
  //
  // console.log(average(2, 9, 1, 1, 1, 9, 9, 7));


  // 11. enhanced object literal

  // const name = 'Tom';
  // const weight = 2.1;
  //
  // const boss = {
  //
  //   name, weight,
  //   run() {
  //     console.log(`${this.name} is running`);
  //   }
  //
  // };
  //
  // const sen = boss;
  // sen.name = 'Sen';
  //
  // boss.run.call(sen);
  //

  // 12. class

  // class Mouse {
  //
  //   constructor(name) {
  //     this.name = name;
  //   }
  //
  //   run() {
  //     console.log(`${this.name} is running`);
  //   }
  //
  // }
  //
  // const boss = new Mouse('Jerry');
  // boss.run();

  // 13. class inheritance
  //
  // class Animal {
  //
  //   constructor(name) {
  //     this.name = name;
  //   }
  //
  //   eat() {
  //     console.log(`${this.name} is eating`);
  //   }
  //
  // }

  // function Bird(name) {
  //   Animal.apply(this, arguments);
  // }

  // Bird has the functions which belongs to Animal
  // Bird.prototype = new Animal();
  // Bird.prototype.fly = function() {
  //   console.log(`${this.name} is flying`);
  // };
  //
  // const palli = new Bird('PALLI');
  // palli.fly();
  //
  // const piggi = new Animal('PIGGI');
  // piggi.fly.apply(palli);

  // class Bird extends Animal {
  //   fly() {
  //     console.log(`${this.name} is flying`);
  //   }
  // }
  //
  // const dally = new Bird('Dally');
  // dally.fly();

  // 14. method overring

  // class Baking {
  //   bake() {
  //     console.log('Baking...');
  //   }
  // }
  //
  // function specialBake() {
  //   console.log('Make something special...');
  // }
  //
  // class SpecialBaking extends Baking {
  //   bake(cb) {
  //     console.log('Special Baking...');
  //     cb();
  //   }
  // }
  //
  // const baking = new Baking();
  // const specialBaking = new SpecialBaking();
  //
  // baking.bake();
  // specialBaking.bake(specialBake);

  // 15. super

  // class Hero {
  //
  //   constructor(name, hp, damage) {
  //     this.name = name;
  //     this.hp = hp;
  //     this.damage = damage;
  //   }
  //
  //   applyDamage(damage) {
  //     this.hp -= damage;
  //   }
  //
  //   attack(enemy) {
  //     enemy.applyDamage(this.damage);
  //   }
  //
  // }
  //
  // class SuperHero extends Hero {
  //
  //   constructor(name, hp, damage, specialDamageRate) {
  //     super(name, hp, damage);
  //     this.specialDamageRate = specialDamageRate;
  //   }
  //
  //   attack(enemy) {
  //     super.attack(enemy);
  //     this.hp += this.damage * this.specialDamageRate;
  //   }
  // }
  //
  // const heroA = new SuperHero('A', 100, 10, 2);
  // const heroB = new Hero('B', 200, 50);
  // console.log(`${heroA.name} : ${heroA.hp} & ${heroB.name} : ${heroB.hp}`);
  //
  // heroA.attack(heroB);
  // console.log(`${heroA.name} : ${heroA.hp} & ${heroB.name} : ${heroB.hp}`);

  // 16. static

  // const label = 'front-end';
  //
  // class FrontendDeveloper {
  //
  //   constructor(name) {
  //     this.name = name;
  //   }
  //
  //   static work() {
  //     console.log('working...');
  //   }
  //
  // }
  //
  // FrontendDeveloper.work();


  // 17. rest (gathering)

  // function sum(...numbers) {
  //
  //   return numbers.reduce( (a, b) => a + b, 0);
  //
  //
  // }
  //
  // console.log(sum(2, 9, 1, 1, 1, 9, 9, 7));

  // function myConcat(seperator, ...strings) {
  //
  //   return strings.join(seperator);
  //
  // }
  //
  // console.log(myConcat('$$ ', 'Ta ', 'Nhat ', 'Quang ', 'jjang!'));


  // 18. spread (spreading)

  // function sum(...numbers) { //gathering
  //   return numbers.reduce((a, b) => a + b, 0);
  // }
  //
  // const array = [2, 9, 1, 1];
  //
  // console.log(sum(...array)); // spread


  // 20. shallow cloning

  // const object1 = {
  //   a: 1,
  //   b: 2,
  //   c: {d: 3}
  // };
  //
  // const object2 = {
  //   ...object1, // shallow cloning (not deep)
  //   e: 4
  // };
  //
  // console.log(object1);
  // console.log(object2);


  // 21. closure

  // function notify(main) { // higher order function
  // // higher: parameter is a func || return a function
  //   return function(extra) {
  //     console.log(`[${main}] - ${extra}`);
  //   };
  //
  // }
  //
  // const note = notify('Main Note');
  // note('Extra note');

  // function WaitAndRun(ms, func) {
  //
  //   setTimeout(func, ms);
  //
  // }
  //
  // function run() {
  //   console.log('Runnnnnn');
  // }
  //
  // WaitAndRun(3000, run);


  // 23. Destructuring

  // const arr = [2, 9, 1, 1];
  //
  // const [a, , ...b] = arr;
  //
  // console.log(a, b);

  // const object = {
  //   a: 1,
  //   b: 2,
  //   c: {d: 4}
  // };
  //
  // const {a, ...b} = object;
  //
  // console.log(b);

  // FINISH JS ADV (ES6) COURSE

  // SUPER EXTRA

  // A. Promises
  //
  // let promiseToCleanTheRoom = new Promise((resolve, reject) => {
  //
  //   // You're going to clean the room as your promise
  //   // You promise to clean the room
  //   // So, now ...
  //   // You're cleaning the room
  //
  //   let isClean = true;
  //
  //   if(isClean) {
  //     resolve('VERY CLEAN');
  //   } else {
  //     reject('FILTHY');
  //   }
  //
  // });
  //
  // // When then() method is fired
  // // = the promise is resolved already (fulfilled)
  // // and pass the argument (status/ data) back
  // promiseToCleanTheRoom.then(state => console.log(state)).catch(state => console.log(state));

  // let studyBasicJS = () => {
  //   setTimeout(() => {
  //     console.log('Finish studying Basic JS');
  //   }, 3000);
  //   return new Promise((resolve, reject) => resolve('Complete Study Basic JS\n'));
  // };
  // let studyBasicHTML = (previousState) => new Promise((resolve, reject) => resolve(previousState + 'Complete Study HTML\n'));
  // let studyBasicCSS = (previousState) => new Promise((resolve, reject) => resolve(previousState + 'Complete Study CSS\n'));
  // let finishBasicCourse = (previousState) => new Promise((resolve, reject) => resolve(previousState + 'CONGRATULATION! You have completed this Basic Course'));
  //
  // studyBasicJS().then((state) => studyBasicHTML(state))
  //               .then((state) => studyBasicCSS(state))
  //               .then((state) => finishBasicCourse(state))
  //               .then((state) => console.log(state));


  // import, export, default

  // graph.options = {
  //     color:'blue',
  //     thickness:'3px'
  // };
  // graph.draw();
  // console.log(cube(3)); // 27
  // console.log(cube(10));

  // ES6 export & import

  // sayHi('Ryu');
  // sayHello();
  // console.log(pi);
  // console.log(object.address.city);


  // ES6 Tips & Tricks

  // var specialLog = (a, b, ...n) => console.log(a, b, ...n);
  //
  // const numbers = [2, 9, 1, 1, 1, 9, 9, 7];
  // specialLog(...numbers);

  // const numbers = [2, 9, 1, 1, 1, 9, 9, 7];
  //
  // var summary = numbers.reduce((sum, num) => sum + num);
  // var stringResult = numbers.reduce((result, num) => result + num, '');
  //
  // console.log(summary);
  // console.log(stringResult);

  // const arrDay = [2, 9];
  // const arrMonth = [1, 1];
  // const arrYear = [1, 9, 9, 7];
  //
  // const arrDateOfBith = ['DoB ', ...arrDay, ... arrMonth, ...arrYear, 'jjang!' ];
  // console.log(...arrDateOfBith);

  // var items = [
  //   'OHMYGIRL',
  //   'WJSN',
  //   'DREAMCATCHER',
  //   'TWICE',
  //   'BLACKPINK',
  //   'DIA'
  // ];
  //
  // var htmlContent = items.map((item) => `<li> ${item} </li>\n`);
  // console.log(...htmlContent);

  // var links = [
  //
  //   {
  //     domain: 'https://tnq29.com',
  //     name: "My Website"
  //   },
  //   {
  //     domain: 'https://linkedin.com/in/quangnhat2911',
  //     name: "My Profile"
  //   }
  //
  // ];
  //
  // var htmlContent = links.map((domain, name) => `
  // <div>
  //   <a href="${domain}"> ${name} </a>
  // </div>
  // `);
  //
  // console.log(...htmlContent);

  // var a = 10939;
  //
  // console.log(a.toString(2));
  //
  // function getStudent(name, age, score) {
  //   var student = {name, age, score};
  //   student['defaultScore'] = 0;
  //   return student;
  // }
  //
  // var newStudent = getStudent('Quang', 21, 9.4);
  // console.log(newStudent);

  // var student = {
  //   name: 'Ryan',
  //   age: 22,
  //   score: 9.94
  // };
  //
  // const {name, age, score} = student;
  //
  // console.log(name, age, score);

  // ES6 Promises

  // var promiseToCleanTheRoom = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve('Waiting for 3 seconds'), 3000);
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => resolve('Dull'), 2000);
  //   });
  // });
  //
  // promiseToCleanTheRoom.then((content) => {
  //   console.log(content);
  // }).then((feeling) => {
  //   console.log(feeling + '!');
  // });

  // Use Promise to fetch data from an API

  function getData(method, url) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = function() {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr.response);
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = () => {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };
      xhr.send();
    });
  }

  getData('GET', 'https://jsonplaceholder.typicode.com/todos').then((data) => {
    let todos = JSON.parse(data);
    var content = todos.map((item) => `
  <div class="item">
    <h1>${item.id}</h1>
    <p>${item.title}</p>
  </div>
  `);
    // console.log(...content);

    var btnShow = document.getElementById("show-content-btn");
    var htmlContent = document.getElementById('main-content');

    btnShow.onclick = () => {

      if (btnShow.innerHTML === 'Show') {
        htmlContent.innerHTML = content;
        btnShow.innerHTML = 'Hide';
      } else {
        if (btnShow.innerHTML === 'Hide') {
          htmlContent.innerHTML = '';
          btnShow.innerHTML = 'Show';
        }
      }
    };
    //
    // $("#show-content-btn").on("click", () => {
    //   $("#show-content-btn").html('Hide');
    //   $("#main-content").html(content);
    //
    // });

  }).catch((error) => console.log(error));









  //

};

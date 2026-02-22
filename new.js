// let stringToBePrinted = "";

// for (let size = 0; size < 8; size += 1) {
//     stringToBePrinted += "#";
//     console.log(stringToBePrinted)
// }

// let size = 10, flag = true, startFlag = true;
// for (let counter = 0; counter < size ; counter += 1) {
//     let line = "";
//     flag = startFlag;
//     for (let secondCounter = 0; secondCounter < size ; secondCounter += 1){
//         if (flag === true){
//             line += " ";
//         } else {
//             line += "#";
//         }
//         flag = !flag;
//     }
//     startFlag = !startFlag;
//     console.log(line);
// }

// for (let start = 0; start <= 100; start += 1) {
//     let stringToBePrinted = "";
//     if (start % 3 == 0){
//         stringToBePrinted += "Fizz";
//     }
//     if (start % 5 == 0) {
//         stringToBePrinted += "Buzz";
//     }
//     if (stringToBePrinted === "") {
//         console.log(start);
//         continue;
//     }
//     console.log(stringToBePrinted);
// }
// let name = 'Kabir';
// const obj = {
//     name: 'Alice',
//     arrowFunc: () => {
//         console.log(this.name);
//     },
//     standardFunc: function (){
//         console.log(this.name);
//     }
// }
// obj.arrowFunc();
// obj.standardFunc();
// let object1 = {value: 10};
// let object2 = object1;
// let object3 = {value: 10};

// let finder = {
// find(array) {
// return array.some((v)=>{console.log(this); return v == this.value}, {value: 99});
// },
// value: 5
// };
// console.log(finder.find([4, 5]));


// let protoRabbit = {
// speak(line) {
// console.log(`The ${this.type} rabbit says '${line}'`);
// }
// };
// let blackRabbit = Object.create(protoRabbit);
// blackRabbit.type = "black";
// console.log(Object.getPrototypeOf(blackRabbit)=== protoRabbit);
// blackRabbit.speak("I am fear and darkness");
// class Hero {
//     health = 100;
//     constructor(ability) {
//         this.ability = ability;
//         this.mentality = 'sick';
//     }
//     pose() {
//         console.log(`My ability is to ${this.ability}`);
//     }
// }
// let creep = new Hero("Fly");
// creep.attack = function() {
//     console.log(`I attack with my ${this.ability}`);
// }
// console.log(Object.getOwnPropertyDescriptors(creep));
// console.log(creep) // Hero { health: 100, ability: 'Fuck Bitches.', mentality: 'sick' }
// console.log(Object.getOwnPropertyNames(Hero.prototype)) //[ 'constructor', 'pose' ]
// console.log(Hero.prototype) // {}
// let creepPrototype = Object.getPrototypeOf(creep);
// let grandPrototype = Object.getPrototypeOf(creepPrototype);
// let greatPrototype = Object.getPrototypeOf(grandPrototype);
// console.log(Object.getOwnPropertyNames(Hero.prototype));
// console.log(Hero.length)
// console.log(typeof Hero)
// console.log(Object.getPrototypeOf(Hero))
// console.log(creepPrototype === Hero.prototype)
// let object = new class { getWord() { return "hello"; } };
// let parent = Object.getPrototypeOf(object);
// console.log(Object.getOwnPropertyNames(parent));

// let str = 'kabir';
// console.log(Object.getOwnPropertyNames(str)) // output of [ '0', '1', '2', '3', '4', 'length' ]

// let func = () => {
//     if (!func.age) func.age= 0;
//     console.log('Hey');
//     func.age++;
// }
// func();
// console.log(func.age)
// func();
// console.log(func.age)
// function createCounter() {
//   let count = 0; // Hidden state
//   return {
//     increment() { count++; },
//     get() { return count; }
//   };
// }
// let first = createCounter();
// let second = createCounter();
// first.increment();
// first.increment();
// console.log(first.get());
// console.log(second.get()); // each had its own count after all each are functions using closure.

// let test = Symbol('kabir');
// console.log(test === Symbol.for('kabir')); //Not equal even with double equal

// let okIterator = "OK"[Symbol.iterator]();
// console.log(okIterator.next());
// // → {value: "O", done: false}
// console.log(okIterator.next());
// // → {value: "K", done: false}
// console.log(okIterator.next());
// // → {value: undefined, done: true}

// class List {
//     constructor(value, rest) {
//         this.value = value;
//         this.rest = rest;
//     }
//     get length() {
//         return 1 + (this.rest ? this.rest.length : 0);
//     }
//     static fromArray(array) {
//         let result = null;
//         for (let i = array.length - 1; i >= 0; i--) {
//             result = new this(array[i], result);
//         }
//         return result;
//     }
// }

// class ListIterator {
//     constructor(list) {
//         this.list = list;
//     }
//     next() {
//         if (this.list == null) {
//             return { done: true };
//         }
//         let value = this.list.value;
//         this.list = this.list.rest;
//         return { value, done: false };
//     }
// }

// List.prototype[Symbol.iterator] = function () {
//     return new ListIterator(this);
// };

// let list = List.fromArray([1, 2, 3]);
// let lIterator = list[Symbol.iterator](); // Just testing to see if ListIterator was its own class
// console.log("console.log of lIterator is ",lIterator);
// console.log("console.log of lIterator prototype is ",Object.getPrototypeOf(lIterator));
// console.log("console.log of lIterator is ",lIterator);

// for (let element of list) {
//     console.log(element);
// }
// // → 1
// // → 2
// // → 3

// class LengthList extends List {
//     length;
//     constructor(value, rest) {
//         super(value, rest);
//         this.length = super.length;
//     }
//     get length() {
//         return this.length;
//     }
// }
// console.log(Object.getPrototypeOf(LengthList))
// let l = LengthList.fromArray([1, 2, 3]);
// console.log(l);

// let lister = new List(4,5);
// console.log(Object.getPrototypeOf(lister));
// console.log(Object.getPrototypeOf(lister) == List.prototype);
// console.log(Object.getOwnPropertyDescriptors(List.prototype));

// Testing memoization
// function remember(){
//     if (!remember.cache) {
//         remember.cache = 0;
//     }
//     console.log(`I've run ${remember.cache} times`);
//     remember.cache += 1;
// }
// remember();
// remember();
// remember();
// console.log(remember) // It really worked well.

// TESTING IF POINTING TO OBJECT INSIDE ANOTHER OBJECT WILL APPLY CHANGES TO ORIGINAL OBJECT
// let obj = {kabir: 'happy', anotherObj: {age: 26}}
// console.log(obj);
// let holder = obj.anotherObj
// holder.age = 21;
// console.log(obj);

// TESTING SHALLOW COPIES
// conclusion, both array point to the same object but popping one's link to object did nothing to the other's link
// arr = [1,2,3, {name: 'kabir'}];
// copyArr = [...arr];
// copyArr = arr;
// copyArr.pop();
// copyArr[3].name = 'fashola'
// console.log(copyArr)
// console.log(arr)

// let arr = [3,4];
// arr.feel = 'happy';
// console.log(arr);
// console.log(Object.getOwnPropertyDescriptors(arr))
// for (let e of arr){
//     console.log(e);
// }

// TESTING CLOSURE. Each function had its own arr. except if the arr was global scope
// function manipulate(){
//     let arr = ['kabir', 'atoyebi'];
//     return function annihilate(toDo) {
//         if (toDo) {
//             arr.pop();
//         }    
//         console.log(arr);
//     }
// }
// let ann = manipulate();
// let ann2 = manipulate();
// ann(true);
// ann2(false);
// ann2(false);
// ann(false);
// CONTINUATION OF CLOSURE TESTS. IT BEHAVED AS EXPECTED. BOTH arr(s) were isolated
// if (true) {
//     let arr = ['kabir', 'atoyebi'];
//     function annihilate(toDo) {
//         if (toDo) {
//             arr.pop();
//         }
//         console.log(arr);
//     }
// }
// if (true) {
//     let arr = ['kabir', 'atoyebi'];
//     function annihilate2(toDo) {
//         if (toDo) {
//             arr.pop();
//         }
//         console.log(arr);
//     }
// }
// annihilate(true);
// annihilate2(false);
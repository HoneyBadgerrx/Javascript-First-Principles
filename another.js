// "use strict";
// class Vec {
//     x;
//     y;
//     #length;
    // constructor(x, y) {
    //     this.x = x;
    //     this.y = y;
    // }
    // plus(vector) {
    //     return new Vec(this.x + vector.x, this.y + vector.y);
    // }
    // minus(vector) {
    //     return new Vec(this.x - vector.x, this.y - vector.y);
    // }
    // get length() {
    //     return Math.sqrt(this.x**2 + this.y**2);
    // }
// }
// class Group {
//     group;
//     constructor() {
//         this.group = [];
//     }
//     has(value) {
//         for (let i = 0; i < this.group.length; i++){
//             if (this.group[i] === value) {
//                 return true;
    //         }
    //     }
    //     return false;
    // }
    // add(value) {
    //     if ( !(this.has(value)) ) {
    //         this.group.push(value);
    //         return 'Added!';
    //     }
    //     return 'Already exists!';
    // }
    // delete(value) {
    //     if ( this.has(value) ) {
    //         let index = this.group.findIndex((groupMember) => groupMember === value);
    //         if (index > -1) {
    //             this.group.splice(index, 1);
    //         }
    //         return 'Removed successfully.'
    //     }
//         return 'Does not exist.'
//     }
//     static from(arr) {
//         let result = new this();
//         for (let i in arr) {
//             result.add(arr[i]);
//         }
//         return result;
//     }
//     static lol = 'asdf';
// }
// let testGroup = new Group();

// class GroupIterator {
//     group;
//     constructor(toIterate) {
//         this.group = [...toIterate.group];
//     }
//     next() {
//         let value = this.group.shift();
//         if (!value) {
//             return {done: true};
//         } else {
//             return {value, done: false};
//         }
//     }
// }
// Group.prototype[Symbol.iterator] = function() {
//     return new GroupIterator(this);
// }
// Group.prototype[Symbol.iterator] = function() {
//     return Array.prototype[Symbol.iterator]();
// }

// let newGroup = Group.from([4,5,7,9]);
// for (let i of newGroup){
//     console.log(i);
// }
// MOST OF THE CODE WAS TESTED IN REPL
// Testing various methods of array
// let testArray = ['kabir', 'rabbit']
// testArray.splice(1,1);
// console.log(testArray)
// let result = testArray.findIndex((groupMember) => groupMember === "rabbit");
// console.log(result);

// class MultiplicatorUnitFailure extends Error {};
// function primitiveMultiply(a, b) {
//     if (Math.floor(Math.random() * 100) > 19){
//         throw new MultiplicatorUnitFailure();
//     }
//     return a * b;
// }
// function neverGiveUp(a, b) {
//     let result = null;
//     do {
//         try {
//             result = primitiveMultiply(a, b);
//         } catch (e) {
//             if (e instanceof MultiplicatorUnitFailure) {
//                 console.log("Never Give Up!");
//             } else {
//                 throw e;
//             }
//         }
//     }   while (result === null)
//     return result;
// }

// neverGiveUp(2,2);

// STATISTICS ONLY MATTER WITH LARGE SAMPLES
// let tries = 100_000_000;
// let fail = 0; 
// for (let i = 0; i < tries; i++){   
//     if (Math.floor(Math.random() * 100) > 19){
//         fail += 1;  
//         }}
// console.log((tries - fail)/ tries)

// const box = new class {
//     locked = true;
//     #content = [];
//     unlock() { this.locked = false; }
//     lock() { this.locked = true; }
//     get content() {
//         if (this.locked) throw new Error("Locked!");
//         return this.#content;
//     }
// }

// function withBoxUnlocked(stealBox) {
//     try {
//         stealBox(box.content);
//     } catch (e) {
//         if (e.message === "Locked!"){
//             box.unlock();
//             stealBox(box.content);
//             box.lock();
//         } else {
//             throw e;
//         }
//     }
// }
// withBoxUnlocked(function(){});

// let name = "dea+hl[]rd";
// let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
// console.log(escaped)
// let regexp = new RegExp("(^|\\s)" + escaped + "($|\\s)",
// "gi");
// let text = "This dea+hl[]rd guy is super annoying.";
// console.log(regexp.exec(text));

// let input = "A string with 3 numbers in it... 42 and 88.";
// let matches = input.matchAll(/\d+/g);

// for (let match of matches) {
//     console.log(match)
// console.log("Found", match[0], "at", match.index);
// }
// console.log( /(?=(a+))a*b\1/.exec("baabac") ); // ['aba', 'a']
// Not ['aaba', 'a']
// let myPromise = new Promise( function(res, rej) {
//     setTimeout(()=>{res("setTimeout is done!")}, 2000);
// } )
// myPromise.then(()=>{throw new Error();console.log('I finished after setTimeout')}).catch(()=>{console.log('catch method rejection')})
// let doSomething = new Promise((res,rej)=>{
//     res("done");
// })
// let final = doSomething.then((value)=>{
//     console.log(value);
//     return 'value from then';
// }).then((value)=>{console.log('Here it is again ', value)})
// console.log(console.log('lol'))
// Promise.resolve()
//   .then(() => console.log('A'))     // Callback 1
//   .then(() => {                     // Callback 2
//     return Promise.resolve(new Promise((res, rej)=>{setTimeout(()=>{res()}, 2000)})).then(() => console.log('B'));
//   })
//   .then(() => console.log('C'));    // Callback 3
// Promise.resolve()
//   .then(() => console.log('A'))     // Callback 1
//   .then(() => {                     // Callback 2
//      return new Promise((res, rej)=>{setTimeout(()=>{res(); console.log("new promise just finished")}, 2000)});
//   })
//   .then(() => console.log('C'));    // Callback 3
// function lol(value){
//     console.log(value)
// }
// function jsonFile(filename) {
//     return new Promise((res, rej)=>{setTimeout(()=>{res(1)}, 3000)}).then((value)=>{console.log(value);return 5;});
// }
// jsonFile("package.json").then(lol).catch(()=>{console.log('caught the failure, relax!')});
// async function kabir(){
//     return "we lit";
// }
// kabir().then(console.log)

// await new Promise((resolve)=> {
//     console.log("he starts");
//     console.log(setTimeout(()=>{;resolve()}, 5000));
//     console.log('he runs');
    
// });
// console.log("You wait your turn lil nigga!");
// try {
//     setTimeout(() => {
//         throw new Error("Woosh");
//     }, 20);
// } catch (e) {
//     // This will not run
//     console.log("Caught", e);
// }
// let start = Date.now();
// setTimeout(() => {
// console.log("Timeout ran at", Date.now() - start);
// }, 20);
// while (Date.now() < start + 50) {}
// console.log("Wasted time until", Date.now() - start);
// → Wasted time until 50
// → Timeout ran at 55
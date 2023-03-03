"use strict";

let count = 100;
// function counter() {
//   let count = 0;
//   count++;
//   return count;
// }

// function createCounter(initialValue = 0) {
//   let count = initialValue;
//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter1 = createCounter();
// const counter2 = createCounter(20);
// const counter3 = createCounter(50);

function createCounter(initialValue = 0) {
  let count = initialValue;
  return {
    increment() {
      return count++;
    },
    decrement() {
      return count--;
    },
  };
}
const counter1 = createCounter();
const counter2 = createCounter(200);

function createAdder(initialValue) {
  let result = initialValue;
  return function (value) {
    return (initialValue += value);
  };
}

const createAdder = (initial) => (value) => (initial += value);

const adder = createAdder(100);
adder(15);

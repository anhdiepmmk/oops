"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHi = void 0;
const sayHi = (message) => {
  if (message) {
    console.log(message, "what");
  } else {
    console.log("hi");
  }
};
exports.sayHi = sayHi;

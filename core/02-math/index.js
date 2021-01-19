"use strict";

const add = (a, b) => {
  return a + b
}

const abs = function abs(x){
  return (x >= 0) ? x : -x
}

module.exports = { add, abs }

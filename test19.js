// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  // named iife
  console.log("it is a iife function");
})();

// problem with pollution in globle scope to prevent the pollution of global variable we use iife

(() => {
  console.log("our arrow function with iife");
})();

((name) => {
  console.log(`name is ${name} `);
})("pandey ji");

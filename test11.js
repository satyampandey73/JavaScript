// array 1

const arr = [0, 1, 2, 3, 4, 5, true, "satyam"];
const arr2 = new Array(1, 2, 3, 4, 5);

console.log(arr);
console.log(arr2);
console.log(typeof arr);
console.log(typeof arr2);
console.log(arr[7]);

arr2.push(8);
arr2.push(9);
arr2.push(-9);
arr2.pop();

arr2.unshift(55);
arr2.unshift(65);
arr2.shift();

console.log(arr2);

console.log(arr2.includes(55));
console.log(arr2.indexOf(55));

const arr1 = [1, 2, 3, 4, 5];

const newarr = arr1.join();

console.log(newarr);
console.log(typeof arr1);
console.log(typeof newarr);

// slice , splice

const slarr = new Array(3, 4, 5, 6, 7);

console.log(slarr);
console.log(slarr.slice(1, 3));

const splarr = new Array(1, 2, 3, 4, 5, 6);
console.log(splarr.splice(1, 4));
console.log(splarr);

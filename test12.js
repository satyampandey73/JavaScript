// array 2

const marvel = ["spiderman", "ironman", "thor"];
const dc = ["superman", "batman", "flash"];

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3][2]);

const allhero = marvel.concat(dc);
console.log(allhero);

// spread operator
const allnewone = [...marvel, ...dc, ...allhero];
console.log(allnewone);

const anotherarr = [
  12,
  3,
  4,
  5,
  6,
  7,
  [3, 4, 5, 6, 7],
  5,
  [3, 4, 5, [1, 2, [5, 6, 7]]],
];

const newanother = anotherarr.flat(Infinity);

console.log(anotherarr);
console.log(newanother);

console.log(Array.isArray("satyam"));
console.log(Array.from("satyam"));
console.log(Array.isArray(newanother));
console.log(Array.from({ name: "satyam" })); //intresting

let s1 = 100;
let s2 = 200;
let s3 = 300;
let s4 = 400;

console.log(Array.of(s1, s2, s3, s4));

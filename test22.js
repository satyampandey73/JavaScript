// high order array loops

// for of

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const str = "satyam";

for (const iterator of arr) {
  console.log(iterator);
}

for (const iterator of str) {
  console.log(`char are ${iterator}`);
}

//  MAP

const set = new Map();

set.set("in", "india");
set.set("fr", "france");
set.set("usa", "united state of america");
set.set("in", "india");
set.set("ind", "india");

console.log(set);

for (const iterator of set) {
  console.log(iterator);
}

for (const [key, value] of set) {
  console.log(key, value);
}

// for in

const myobj = {
  game1: "pubg",
  game2: "drdriving",
};

// for (const [k,v] of myobj) {
//     console.log(k,v);            // for of not allowed
// }

for (const key in myobj) {
  console.log(key);
}

for (const key in myobj) {
  console.log(myobj[key]);
}

for (const key in myobj) {
  console.log(`${key} is shortcut for ${myobj[key]}`);
}

const programing = ["cpp", "java", "python", "javascript", "reactjs"];

for (const key in programing) {
  console.log(key);
}

for (const key in programing) {
  console.log(programing[key]);
}

// for in is not valid on map

// use of forEach for printing an array

const coding = ["java", "python", "ruby", "reactjs", "cpp"];

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })

function print(item) {
  console.log(item);
}

// coding.forEach(print)

coding.forEach((val, index, arr) => {
  console.log(val, index, arr);
});

const mycoding = [
  {
    languagename: "c++",
    filename: "cpp",
  },
  {
    languagename: "python",
    filename: "py",
  },
  {
    languagename: "javascript",
    filename: "js",
  },
  {
    languagename: "java",
    filename: "java",
  },
];

mycoding.forEach((item) => {
  console.log(item.filename);
});

console.log(mycoding);

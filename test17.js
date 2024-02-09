// global and local scope

let a = 40;

console.log(c);

{
  let a = 4;
  const b = 6;
  var c = 8;
}

console.log(a);
// console.log(b);
console.log(c);

// scope level and mini hoisting

function one() {
  const username = "satyam";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}

one();

if (true) {
  const username = "satyam";
  if (username === "satyam") {
    const website = " youtube";
    console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ************** intresting **********************

console.log(addone(88));

function addone(num) {
  return num + 1.4;
}

console.log(addone(8));

// console.log(addtwo(5));

const addtwo = function (num) {
  return num + 2;
};

console.log(addtwo(5));
console.log(typeof addtwo);

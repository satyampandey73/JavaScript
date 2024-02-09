// control flow

const userloggedin = true;

if (userloggedin) {
  console.log("absolutely");
}

// < , > , >= , <= , == , != , === , !==

if (2 == "2") {
  console.log("2 is equal");
}

if (2 !== "2") {
  console.log("2 is not equal");
}

const month = 1;

switch (month) {
  case 1:
    console.log("jan");
  case 2:
    console.log("feb");
  case 3:
    console.log("mar");
    break;
  default:
    console.log("nothing");
    break;
}

// falsy value
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy value
// "0" , "false" , " " , [] , {} , function(){}

const useremail = [];

if (useremail.length === 0) {
  console.log("it is empty");
}

const userobject = {};

if (Object.keys(userobject).length === 0) {
  console.log("object is empty");
}

// Nullish coalescing operator (??): null undefined

let operat;

// operat = 8 ?? 7;
// operat= null ?? 89;
// operat = undefined ?? 89;

operat = undefined ?? 89 ?? 90;

console.log(operat);

// terniary operator

const terni = 800;

terni > 90 ? console.log("greator") : console.log("smaller");

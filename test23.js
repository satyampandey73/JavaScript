// filter map and reduce

const coding = ["java", "python", "ruby", "reactjs", "cpp"];

// const ourvalue = coding.forEach((val) => {
//   console.log(val);
//   return val;
// });
//                                         //  return nothing
// console.log(ourvalue);

const newnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const storenum = newnums.filter((num) => num > 6);
console.log(storenum);

const book = [
  { title: "book1", edition: 2000 },
  { title: "book2", edition: 2002 },
  { title: "book3", edition: 2003 },
  { title: "book4", edition: 2004 },
  { title: "book5", edition: 2005 },
  { title: "book6", edition: 2006 },
  { title: "book7", edition: 2000 },
];

const userbook = book.filter((bk) => bk.edition === 2000);

console.log(userbook);

const myNumber = [1, 2, 3, 4, 5, 6, 78, 41, 9];

console.log(myNumber.map((num)=>(num+10)));

// const printnum = myNumber.map((num) => num + 11);

// console.log(printnum);

const newNum = myNumber
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 40);

console.log(newNum);

// reduce

const mybill = [1, 3, 5, 7, 9, 11, 33, 55];

// const myTot = mybill.reduce(function (acc, currval) {
//   console.log(`acc ${acc} and currval ${currval}`);
//   return acc + currval;
// }, 10);

const myTotal = mybill.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);

const mycources = [
  { course: "py", price: 999 },
  { course: "java", price: 1999 },
  { course: "cpp", price: 2999 },
  { course: "js", price: 3999 },
  { course: "reactjs", price: 4999 },
];

const amounttopay = mycources.reduce((acc, item) => acc + item.price, 0);

console.log(amounttopay);

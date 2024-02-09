// number and maths

const source=400
console.log(source);

const newscore=new Number(345)

console.log(newscore.toString().length);
console.log(typeof newscore);

console.log(newscore);
console.log(newscore.toFixed(2));

const othernum=35423.3342
console.log(othernum.toPrecision(6));
console.log(othernum.toPrecision(5));

const hunderds=100000000000000
console.log(hunderds.toLocaleString('en-IN'));


console.log(Math);
console.log(Math.abs(-354));
console.log(Math.abs(354));
console.log(Math.round(354.9453))
console.log(Math.min(7,4,8,9,2,3,5));
console.log(Math.max(7,4,8,9,2,3,5));

console.log(Math.random());
console.log(Math.random()*100 + 1);
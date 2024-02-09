// datatype summary

//  primitive 
// 7 => string,number,bigint,symbol,null,undefined,boolean

const score=354
const player="asfadf"
const rate=45.34
const winner=true
const temp=null
let setemail


const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id===anotherid);

const bigint=245134613534532354453403289508350835068n

console.log(bigint);
console.log(id);
console.log(anotherid);


// reference (non primitive)
// array , object , function

const heros=["shaktiman","nagraj","doga"];

let myobj={
    name:"satyam",
    age:20,
}

const fxn=function(){
    console.log("satyam");
}

console.log(typeof heros);
console.log(typeof myobj);
console.log(typeof fxn);
console.log(typeof bigint);
console.log(typeof id);

fxn()

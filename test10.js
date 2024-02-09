// date and time ;

let mydate=new Date()

console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toTimeString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleTimeString());
console.log(typeof mydate);


let createan=new Date("2024-01-15")
let createan2=new Date("01-14-2023")
let createdate=new Date(2023,0,12,5,1)
console.log(createan.toLocaleString());
console.log(createan2.toLocaleString());
console.log(createdate.toLocaleString());

let mytimespan=Date.now()

console.log(mytimespan);
console.log(createan.getTime());
console.log(Math.floor(Date.now()/1000));


let newdate=new Date()

console.log(newdate.getMonth());

`${newdate.getMonth()} and the time is`

console.log(newdate.toLocaleString('default',{
    weekday:"long",
}))

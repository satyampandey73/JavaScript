// question
//1
const ob1={1:"a",2:"b"}
const ob2={3:"c",4:"d"}

const ob3=Object.assign(ob1,ob2)

console.log(ob3===ob1);
console.log(ob3===ob2);


//2
function add(num1,num2){
    console.log(num1+num2);
}

const result=add(4,5)

console.log(result);

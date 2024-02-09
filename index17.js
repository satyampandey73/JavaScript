// objects

function multiply(n) {
  return n * 5;
}

multiply.power = 3;

console.log(multiply(8));
console.log(multiply.power);
console.log(multiply.prototype);


function createUser(username,price){
    this.username=username
    this.price=price
}

createUser.prototype.increment=function(){
    this.price++
}

createUser.prototype.print=function(){
    console.log(`price is ${this.price}`);
}

const chai =new createUser("chai",45)
const tea=new createUser("tea",234)

chai.increment()
chai.print()

tea.increment()
tea.print()

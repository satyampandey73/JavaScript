// this and arrow function

const user = {
  username: "satyam pandey",
  price: 999,
  welcomemessage: function () {
    console.log(`${this.username} is the user name`);
    console.log(this);
  },
};

user.welcomemessage();
user.username = "pandey";
user.welcomemessage();

console.log(this);

function chai() {
  console.log(this);
}

// chai()

function chai2() {
  let username = "satyamji";
  // console.log(this.username);
  console.log(username);
}

chai2();

const chai3 = function () {
  let username = "pandeyji";
  //   console.log(this.username);
  console.log(username);
};

chai3();

const chai4 = () => {
  let username = "satya";
  console.log(this);
};

chai4();

// explicit return
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// implicit return
// const addTwo=(num1,num2)=>num1+num2

const addTwo = (num1, num2) => num1 + num2;

const addobject = () => ({ userone: "shivam" });

console.log(addobject());
console.log(addTwo(4, 7));

// objects 2 

// const tinderuser=new Object()        //singelton
const tinderuser={}                     //non singelton

tinderuser.id="123user"
tinderuser.name="satyam"
tinderuser.isloggedin=true

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('name'));

const regularuser={
    email:"pandey@gmail.com",
    fullname:{
        username:{
            firstname:"satyam",
            lastname:"pandey",
        }
    }
}

console.log(regularuser);
console.log(regularuser.fullname);
console.log(regularuser.fullname.username);
console.log(regularuser.fullname.username.lastname);

// combining of two objects

const ob1={1:"a",2:"b"}
const ob2={3:"a",4:"b"}

const ob3={ob1,ob2}
console.log(ob3);

const ob4=Object.assign({},ob1,ob2)
console.log(ob4);

const ob5={...ob1,...ob2}       //spread operator
console.log(ob5);



const user=[
    {
        id:1,
        name:"satyam",
    },
    {
        id:1,
        name:"satyam",
    },
    {
        id:1,
        name:"satyam",
    },
    {
        id:1,
        name:"satyam",
    },
]

console.log(user);
console.log(user[3].name);




// object destructuring

const course={
    coursename:"javascript",
    prise:"999",
    instructor:"satyam",
}

// const {coursename}=course
const {coursename:csna}=course

console.log(csna);

// objects 1

// singleton 
// object.create 
// created using constructor

// object literals 

const mysym=Symbol("itisasymbol")

console.log(mysym);
console.log(typeof mysym);

const jsuser={
    name:"satyam",
    "full name":"satyam pandey",
    [mysym]:"mykeyone",
    age:20,
    location:"gorakhpur",
    email:"satyam@gmail.com",
    isloggedin:false,
    lastlogindate:["monday","saturday"],
}

console.log(jsuser);
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[mysym]);
console.log(typeof jsuser[mysym]);


jsuser[mysym]="itisanewsymbol";
console.log(jsuser[mysym]);
console.log(jsuser);

jsuser.email="google.com"
// Object.freeze(jsuser)
jsuser.email="saytam.com"
console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello");
}
jsuser.greetingtwo=function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());


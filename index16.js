// OOP - collection of properties and methods

// - constructor function

const end=new Date()

// - object literal

const user = {
    username:"satyam",
    login:8,
    sinedin:true,
    getUserDetail:function(){
        // console.log("get the data from database");
        console.log(this.username);
        // console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetail());


function objectuser(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this
}

const userone=new objectuser("satyam",7,false);
const usertwo=new objectuser("pandey",3,true)

console.log(userone);
console.log(usertwo);
console.log(userone.constructor);



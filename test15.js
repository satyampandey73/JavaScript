// functions

function saymyname(){
    console.log("S");
    console.log("A");
    console.log("T");
    console.log("Y");
    console.log("A");
    console.log("M");
}

saymyname()

function addtwo(num1,num2){     //parameter
    console.log(num1+num2);
}

addtwo(4,9)                   //argument


function addit(num1,num2){
    // let result=num1+num2
    // return result
    return num1+num2
}

const res=addit(5,41)

console.log("result:",res);


function loginuser(username="pandey"){
    if(!username){                          //(username===undefined)
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginuser("satyam"));
console.log(loginuser());

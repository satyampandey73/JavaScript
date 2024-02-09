// stack and heap memory

// stack (primitive) send the copy 
// heap (non-primitive) send the reference

let youtube="satyam pandey"
let change=youtube
youtube="pandit satyam"

console.log(youtube);
console.log(change);


let userone={
    email:"user@google.com",
    upi:"user@yps"
}

let usertwo=userone

usertwo.email="satyam@google.com"

console.log(userone);
console.log(usertwo);
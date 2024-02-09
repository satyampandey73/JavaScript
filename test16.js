//function with object

function addtocard(val1,val2,...num1){       // rest or spread operator
    return num1
}

console.log(addtocard(5,6,7,8,5,6,7,8));
console.log(typeof addtocard());

const get=addtocard(9,8,7,6,5,4,3,2)

console.log(get);
console.log(typeof get);

const user={
    username:"satyam",
    price:199
};

function handleobject(anyobject){
    console.log(`usrname is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user)
handleobject({
    username:"pandey",
    price:455
})


const mynewarr=[3,6,7,8,9]

function newarray(mynew){
    return mynew[3]
}

// console.log(newarray(mynewarr));
console.log(newarray([456,98,122,432,555]));






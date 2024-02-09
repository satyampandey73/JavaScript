// string in js 

const name = "satyam";
const repo = 45;

// console.log(name + repo + " value");

console.log(`${name} ${repo}`);

const game=new String('satyampandit')

console.log(game);

console.log(game[5]);
console.log(game.__proto__);
console.log(game.length);
console.log(game.toUpperCase());
console.log(game.charAt(4));
console.log(game.indexOf('m'));

const newgame=game.substring(2,5)
console.log(newgame);

const gamechange=game.slice(1,4)
console.log(gamechange);

const get="           al;skdjfl     "
console.log(get);
console.log(get.trim());

const url="http//sat.yam pandeyji.co.in"
console.log(url);
console.log(url.replace(" ","-"));

console.log(url.includes("satyam"));
console.log(url.split('.'));
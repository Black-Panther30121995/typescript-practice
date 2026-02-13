// const User:(string|number)[]=[1,"shivani","saloni"];

// const User:[string,number,boolean]=["shivani",986,true]; //orders matter in tuple, first element should be string, second should be number and third should be boolean

let rgb:[number,number,number]=[255,0,0]; //rgb is a tuple of three numbers

type User=[number,string]; //User is a tuple of a number, a string and a boolean

const newUser:User=[113,"shivani"];
newUser[1]="shikha"; //we can change the value of the second element of the tuple, but we cannot change the type of the second element

// newUser.push(true); //Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

export{};


function addTwo(num: number): number
{
    // num.toUpperCase();  
    return num+2;
    // return "hello";
}
let myValue = addTwo(5);

function getUpper(val: string)
{
    return val.toUpperCase();
}
getUpper("hello world");

function signUpUser(name: string, email: string, password: string)
{
    return name + " " + email + " " + password;
}
signUpUser("John", "john@example.com", "password123");


let loginUser = (name: string, email: string, password: string = "password") =>
{
    return name + " " + email + " " + password;
}


// function getValue(myVal: number): boolean
// {
//     if(myVal > 5){
//         return true;
//     } 
//     return "200 OK";
// }

const getHello = (s: string): string => {
    return "Hello";
}   

// const heros = ["Thor", "Ironman", "Spiderman"];
const heros = [1,2,3];

heros.map((hero):string => {
    return `Hero : ${hero}`;
});

function consoleError(err: string): void{
    console.log(err);
}

function handleError(err: string): never{
    throw new Error(err);
}

export{};

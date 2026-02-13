let score: number|string=33; //score can be either a number or a string

score=44;
score="55";

type User={
    name:string;
    id:number|string;
}

type Admin={
    username:string;
    id:number|string;
}

let shivani:User|Admin={ //shivani can be either a User or an Admin
    name:"Shivani",
    id:986
}

shivani={username:"shivani", id:"986"};

// function getDbId(id: number|string)
// {
//     console.log(`DB id is : ${id}`);
// }
getDbId("5");

function getDbId(id: number|string)
{
    //id.toLowerCase(); //Error: Property 'toLowerCase' does not exist on type 'string | number'. Property 'toLowerCase' does not exist on type 'number'. 
    if(typeof id === "string"){
        console.log(`DB id is : ${id.toLowerCase()}`);
    } else{
        console.log(`DB id is : ${id}`);
    }
}

//array
// const data: number[] | string[]=[1,2,3,"4"]; //data can be an array of numbers or an array of strings, but not a mix of both

const data: (number| string | boolean)[]=[1,2,3,"4",true]; //data can be an array of numbers or an array of strings, and a mix of both

let pi:314=314; //pi can only be 3.14

let seatAllotment:"aisle"|"middle"|"window"; //seatAllotment can only be "aisle", "middle" or "window"
seatAllotment="aisle";
// seatAllotment="upper"; //Error: Type '"upper"' is not assignable to type '"aisle" | "middle" | "window"'.   


export{}; 

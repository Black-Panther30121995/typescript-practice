const superHeroes:  string[]=[];
// const heroPower: number[]=[];

const heroPower: Array<number>=[];

type User={
    name:string;
    isActive:boolean;
}                           

const allUsers: User[]=[];
const MLModels: number[][]=[
    [255,255,255],
    [255,0,0],
    [0,255,0],
    [0,0,255]
];

allUsers.push({name:"", isActive:true});

superHeroes.push("Ironman");
heroPower.push(100); //Error: Argument of type 'string' is not assignable to parameter of type 'number'.

//her
//  superHeroes.push(1); //Error: Argument of type 'number' is not assignable to parameter of type 'string'. 

let newArray: Array<Array<string>>=[["shivani","shikha"],["john","doe"]];

newArray.push(["hello","world"]);

export{};
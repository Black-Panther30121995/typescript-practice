interface User {
    readonly dbId:number;
    email:string;
    userId:number;
    googleId ?:string;
    // startTrial:()=>string;
    startTrial():string;
    getCoupon(couponname:string,value:number):number;
}

interface User { //re-opening the interface to add new properties
    githubToken:string;
}

interface Admin extends User{
    role:"admin"|"ta"|"learner";
}
// type User ={    type is kinda like interface, but we cannot use type to create a new type by extending an existing type, we can only use type to create a new type by combining existing types using union or intersection types.    
//     email:string;
//     emailId:number;
// }

const hitesh:Admin={
    dbId:22,
    email:"h@h.com",
    userId:345,
    role:"admin",
    startTrial:()=>{ return "trial started"; },
    getCoupon:(name:"hitesh10",off:10)=>{ return 10; },
    githubToken:"github"
}

hitesh.email="hitesh@h.com";
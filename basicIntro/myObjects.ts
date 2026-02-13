const User={
    name:"Shivani",
    email:"emai@example.com",
    isActive:true
}

// function createUser({name:string, isActive:boolean}){
// }

let newUser={
    name:"Shivani",
    isActive:true,
    email:"shivani@gmail.com"
}

// createUser(newUser);

// createUser({name:"Shivani", isActive:true});

function createCourse(): {name:string, price:number}{
    return {name:"reactjs course", price:399};
}

// type User = {
//     name:string;
//     email:string;
//     isActive:boolean;
// }   

// type MyString=string;

// function createUser(user: User): User{
//     return user;
// }

// createUser({name:"Shivani", email:"shivani@gmail.com", isActive:true});

type User = {
    readonly _id:string; //readonly means this property cannot be changed after it is assigned a value
    name:string;
    email:string;
    isActive:boolean;
    creditCardDetails?:number; //? means this property is optional
}   

let myUser:User={
    _id:"12345",
    name:"s",
    email:"h@h.com",
    isActive:false
}

myUser.email="h@gmail.com";

// myUser._id="54321"; //Error: Cannot assign to '_id' because it is a read-only property.

type cardNumber={
    cardnumber:string;
}

type cardDate={
    cardDate:string;
}

type cardDetails=cardNumber & cardDate & {
    cvv:number;
};

let card:cardDetails={
    cardnumber:"1234 5678 9012 3456",
    cardDate:"12/24",
    cvv:123
}

export{};   
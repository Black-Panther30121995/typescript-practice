// class User{
//     email:string; //default is public
//     name:string;
//     private readonly city:string="Jaipur"; //only accessible within the class and cannot be modified after initialization
//     constructor(email: string,name: string)
//     {
//         this.email=email;
//         this.name=name;
//         console.log(this.city);
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // email:string; //default is public
        // name:string;
        this._courseCount = 1;
        this.city = "Jaipur"; //only accessible within the class and cannot be modified after initialization
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(value) {
        if (value <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = value;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    deleteToken() {
        console.log("Token deleted");
    }
}
class Subuser extends User {
    constructor() {
        super(...arguments);
        //cannot acquire private properties and methods of the parent class
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const user1 = new User("user@example.com", "John Doe");
// user1.city="New York"; //Error: Cannot assign to 'city' because it is a read-only property. 
// user1.deleteToken(); //Error: Property 'deleteToken' is private and only accessible within class 'User'.
console.log(user1.courseCount);

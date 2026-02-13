const score: Array<number>=[];
const names: Array<string>=[];

function identityOne(val:boolean|number):boolean | number{
 return val;
}

function identityTwo(val:any):any{
    return val;
}

function identityThree<Type>(val:Type):Type{
    return val;
}

identityThree("shivani");

function identityFour<T>(val:T):T
{
    return val;
}

interface Bottle{
    brand:string,
    type:number
}

identityFour<Bottle>({brand:"coke",type:1});

function getSearchProducts<T>(products: T[]):T[]
{
    return products;
}

const getMoreSearchProducts=<T,>(products: T[]):T|undefined => // , is used to tell the compiler that this is a generic function and not a JSX element  
{
    return products[0];
};

getMoreSearchProducts<string>(["a","b","c"]);

function anotherFunction<T,U extends number>(val1:T,val2:U):object{
    return {val1,val2};
}

anotherFunction(3,4);


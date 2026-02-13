const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree("shivani");
function identityFour(val) {
    return val;
}
identityFour({ brand: "coke", type: 1 });
function getSearchProducts(products) {
    return products;
}
const getMoreSearchProducts = (products) => // , is used to tell the compiler that this is a generic function and not a JSX element  
 {
    return products[0];
};
getMoreSearchProducts(["a", "b", "c"]);
function anotherFunction(val1, val2) {
    return { val1, val2 };
}
anotherFunction(3, 4);
export {};
//# sourceMappingURL=myGenerics.js.map
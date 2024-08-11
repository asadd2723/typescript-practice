"use strict";
// string
let a = "202020";
//boolean
let bool = true;
//number
let num = 1000;
//array 
let arr = ["string"];
let arr1 = [20];
//tuple jab multi data types ki value add krni ho array ma
let tuple = ["339", 3994, 304];
//tupleWithRest ..... tb use krta hain jab koi same data type ki multi values hoon unko array ma add krna hoo .
let tuplewithrest = ["string", "asad"];
console.log(a, arr);
// Any in typeScript
let val; // any sy koi bi data type krskta hoon ap variable ma
val = 12; // idr maine number add ki ya phela
val = "12"; // ab maine change kr k string add kr diya to koi error nii aya
//unknown in typescript
let val1; // unknown sy koi bi data type krskta hoon ap variable ma
val1 = 120; // idr maine number add ki ya phela
val1 = "120"; // ab maine change kr k string add kr diya to koi error nii aya
//Void in TS 
// woh function jo kuch return nhi krta tb void use krta hain mean jis function ma sirf console karain ga.... void use kry ga
function abc() {
    console.log("hey");
}
abc();
//enum or enumeration in TS
// jab koi different values ko group krna ho
var direction;
(function (direction) {
    direction["up"] = "UP";
    direction["down"] = "DOWN";
})(direction || (direction = {}));
console.log(direction.up);
// union type in ts
// union ma do koi sy bi 2 data ayy skti hai or chly ga code ek k.... mean koi bi 2 data type use kr skta hoon function ma is sy conditional check kr skta hain jo data type hai uska code run kr do
let unions; // isma 2 data add ki hain
unions = 12; // number value add ki hai koi error nhi
unions = "12"; //  string value add ki hai koi error nhi 
// unions = true  .... mgr maine idr boolean add ki ya to error ayy ga
// union type in function 
function abcd(unionVal) {
    if (typeof unionVal === "number") {
        unionVal.toFixed(2);
        console.log(unionVal);
    }
    else if (typeof unionVal === "string") {
        unionVal.toUpperCase();
        console.log(unionVal);
    }
}
abcd(12);
abcd("asad");
let classIn = {
    name: "Asad",
    section: "a",
    age: 22
};
let userAge = 23;
let userName = 'asad';
const person = {
    name: "Asad", // object type ma name or age type add hai to sirf wohi value or type kr skta hoo is ma
    age: 12,
    // val: true, idr maine jab third value add ki to error ayy gya tha mean jo ap object type ma define krdoo ga woh add value or type add krskta hoon object ma
};
let userId = "abc123"; // union type sy hum dono type ki value jon si mrzi add krskta hoo
let productId = 456; // idr number ki hai or upr string

"use strict";
// why use Typescript?
// jissy k javascript dynamic language jis sy hum koi bi variable yn function ma koi data type add kr deta tha jis code thora mess hojata tha humain data type pta bi laggta error k nhi pta lagta q aa raha kis wajah sy aa raha hai to Typescript hum face ni krni prhti typescript thora restricted mode rkhta k jo bi variable function bano mujhe uska type btao us ma konsy or kasy data ayy is code mess nhi hota hai error handling easy hojati hai 
// typescript vs javascript 
// ts superset hai js k... js ma kaffiii chezein jo nhi thi jo ts ma or specific TS type k liya use hoti ha jo JS ma data ki wajah sy error ata tha k ap data send or receive kr raha wagira data type batai yeh issue nhi ata TS mma jis error handling easy hojati hai
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
console.log(classIn);
let userAge = 23;
let userName = 'asad';
const person = {
    name: "Asad", // object type ma name or age type add hai to sirf wohi value or type kr skta hoo is ma
    age: 12,
    // val: true, idr maine jab third value add ki to error ayy gya tha mean jo ap object type ma define krdoo ga woh add value or type add krskta hoon object ma
};
let userId = "abc123"; // union type sy hum dono type ki value jon si mrzi add krskta hoo
let productId = 456; // idr number ki hai or upr string
let getUser = {
    name: "Asad",
    username: "asadd2723",
    phone: 923117737399,
    email: "asadu3040@gmail.com",
    password: "asad0000"
};
function interUser(userr) {
    userr.name;
    userr.age;
}
const employer = {
    name: 'asad',
    age: 22,
    empId: 400595
};

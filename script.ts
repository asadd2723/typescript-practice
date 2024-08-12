// why use Typescript?
// jissy k javascript dynamic language jis sy hum koi bi variable yn function ma koi data type add kr deta tha jis code thora mess hojata tha humain data type pta bi laggta error k nhi pta lagta q aa raha kis wajah sy aa raha hai to Typescript hum face ni krni prhti typescript thora restricted mode rkhta k jo bi variable function bano mujhe uska type btao us ma konsy or kasy data ayy is code mess nhi hota hai error handling easy hojati hai 

// typescript vs javascript 
// ts superset hai js k... js ma kaffiii chezein jo nhi thi jo ts ma or specific TS type k liya use hoti ha jo JS ma data ki wajah sy error ata tha k ap data send or receive kr raha wagira data type batai yeh issue nhi ata TS mma jis error handling easy hojati hai

// string 
let a:string = "202020";

//boolean
let bool: boolean = true;

//number
let num: number =  1000;

//array 
let arr:[string] = ["string"]
let arr1: [number] =[20];

//tuple jab multi data types ki value add krni ho array ma
let tuple:[string, number,number]=["339",3994,304];

//tupleWithRest ..... tb use krta hain jab koi same data type ki multi values hoon unko array ma add krna hoo .
let tuplewithrest:[...string[]] = ["string", "asad"]

console.log(a, arr);

// Any in typeScript

let val: any; // any sy koi bi data type krskta hoon ap variable ma
val = 12; // idr maine number add ki ya phela
val = "12"; // ab maine change kr k string add kr diya to koi error nii aya

//unknown in typescript

let val1: unknown; // unknown sy koi bi data type krskta hoon ap variable ma
val1 = 120; // idr maine number add ki ya phela
val1 = "120"; // ab maine change kr k string add kr diya to koi error nii aya

//Void in TS 
// woh function jo kuch return nhi krta tb void use krta hain mean jis function ma sirf console karain ga.... void use kry ga

function abc() :void{
  console.log("hey")
}

abc();

//enum or enumeration in TS
// jab koi different values ko group krna ho

enum direction{
  up="UP",
  down="DOWN"
}
console.log(direction.up)

// union type in ts
// union ma do koi sy bi 2 data ayy skti hai or chly ga code ek k.... mean koi bi 2 data type use kr skta hoon function ma is sy conditional check kr skta hain jo data type hai uska code run kr do

let unions:string| number; // isma 2 data add ki hain
unions=12; // number value add ki hai koi error nhi
unions="12"; //  string value add ki hai koi error nhi 
// unions = true  .... mgr maine idr boolean add ki ya to error ayy ga

// union type in function 
function abcd (unionVal: number | string){
  if(typeof unionVal === "number"){
    unionVal.toFixed(2)
    console.log(unionVal)
  }else if(typeof unionVal === "string"){
    unionVal.toUpperCase()
    console.log(unionVal)
  }
}

abcd(12)
abcd("asad")

// intersection in TS
// intersection ma jo bi 2 data type add kro gi to uski value zaror add krni hogi 
type classMate = {
  section : string,
  age: number
}

type student = {
  name: string
}

type newClass = classMate & student;
let classIn: newClass ={
  name: "Asad",
  section:"a",
  age: 22
}

// type aliases
//primitive type aliases
// primitive type aliases ma apni type banao string number yn boolean sy usko jidr mrzi kro 
type name =string; // ab "name" k type banai ha jis ki string type hai
type age = number; // is age ko number type dii hai ab age ko as a type use kr skta hain 

let userAge:age = 23; 
let userName:name= 'asad';

// object type aliases
// yeh object ma type define ki hai phela sy hi jis sy...
type person ={ 
  name:string, // phela sy hi define hai object ma type 
  age: number,
}

const person: person = { // yeh person object bana ga to woh person object type sy define hoga k is ma kia kia ayy or kis type ki value ayy gi  
  name:"Asad", // object type ma name or age type add hai to sirf wohi value or type kr skta hoo is ma
  age:12, 
  // val: true, idr maine jab third value add ki to error ayy gya tha mean jo ap object type ma define krdoo ga woh add value or type add krskta hoon object ma
}

//Example of Union Type Alias
type ID = string | number; // is ma do type add ki hai 

let userId: ID = "abc123"; // union type sy hum dono type ki value jon si mrzi add krskta hoo


let productId: ID = 456; // idr number ki hai or upr string
// apni mrzi ki type banao or type ki wajah sy data fixed hojai ga k is type ma yeh data ana zarori hai wrna error ayy ga.... 
// yeh boht acha feature jis sy typescript apko restrict kr deta hai k jo data type hai is type k hi data add ho object ma....
type getUserDetail ={
  name:string,
  username:string,
  email:string,
  phone:number,
  password:string
}

let getUser: getUserDetail ={
  name:"Asad",
  username:"asadd2723",
  phone:923117737399,
  email:"asadu3040@gmail.com",
  password:"asad0000"
}

//interface in TS 

// type nm = string;
// type nm= number;  type ma type name same hoga to error ayy ga 
// mgr interface ma same name hoga to yeh unko merge krdai ga or hum is merge value ko use kr skta hain
interface user {
  name:string
}

interface user {
  age:number
}
function interUser(userr:user){ // idr yeh merge ho raha hain 
  userr.name;
  userr.age;
}

//interface extends
// interface extends tab use krta jab different type ki property mgr unka kuch common bi ho jis ko merge krna to extends use kr skta haiin

interface person0 {
  name:string,
  age:number
}
interface employ extends person0 {
  empId:number
}

const employer :employ={
  name:'asad',
  age:22,
  empId:400595
}



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


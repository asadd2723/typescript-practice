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
console.log(classIn);

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

// type and interface difference
// first difference
type checktype = number; // type ko equal sy assign krta is ki type
interface checkInterface{ // is ko direct as object type krta hain 
  name:string
}
//second difference
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
//third difference ma ap interface ko extend kr skta hoo 
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

// classes in TS

class AirConditioner{
  color ="white";
  category="ac";
  company ="gracee";
  temp =22;

  turnOn(){
    console.log("turning on....");
    console.log("turned on....");
  }
  turnOff(){
    console.log("turning off....");
    console.log("turned off....");
  }
  incTemp (name:string){
    this.temp++;
    console.log(`${name} is temperature increased by ${this.temp}`);
  }
  decTemp (name:string){
    this.temp--
    console.log(`${name} is temperature decreased by ${this.temp} `);
  }
}

let ac1 = new AirConditioner(); // new sy ek instance bana ga jis ka mtlb ek object bana ga ma ap apni mrzi koi property add krskta hoo
// class k instance bana kr ap unique property sy different object bana skta hoon
let ac2 = new AirConditioner(); // ac2 ek new object instance ki wajah sy is ko ap different property dai skta hain koi error ni ayy ga is k koi link nhi ac1 sy 

ac1.incTemp("ac one");
ac2.incTemp("ac two");

// class extend in TS
class simpleRoom {
  table= "yes"
  paint="yes"
  chair="yes"
  light="yes"
  fan="yes"
}

class computerRoom extends simpleRoom{
  laptop="yes"
  pc="yes";
  monitor="yes"
}

let newRoom = new computerRoom() // jab hum ek instance bbnaya hai computerRoom k to us ma sari property thi jo simpleRoom ma thi is trhan hum class ko extend bi kr skta hain differenct other classes sy
console.log(newRoom) // is ma sub property jo dono class ki merge hui hain extend krna sy 


// Constructor in TS
// agr class sy ek new instance create krain ga to constructor phela chly ga to hum is value add kr skta hai yeh jab run hoga to automatically value assign hojai gaiii mgr jab instance banao ga tb value sub pass krni hogi jo jo constructor ma use hui hai as a parameter agr nhi kro ga to error ayyy ga

class earphone{
  public name: string;
  public price: number;

  constructor(name:string, price:number){
    this.name = name;
    this.price=price 
  }
}

let newEarphone = new earphone("apple",75000) //agr idr ek value pass kroon ga to error agyy q k constructor ma parameter do hain error hanlding boht achi hai Typescript ma yeh sub javascript ma nhi hoti 
console.log(newEarphone);

//more example 

class phone{
  // public name: string;
  // public price: number; agr yeh sub nhi likha to ap direct ko parameter ko hi access modifier (public, private, protected) bana do is sy apko itna sara code likhna zaror nhi 

  constructor(public name:string, public price:number){
    this.name = name;
    this.price=price 
  }
}

let newPhone = new phone("Iphone 15 Pro Max",450000) //agr idr ek value pass kroon ga to error agyy q k constructor ma parameter do hain error hanlding boht achi hai Typescript ma yeh sub javascript ma nhi hoti 
console.log(newPhone);

//Access modifier in TS

//class ma variable by default public hota hai to public nhi likho to by default public hi hoga
// public ko change bi krskta access bi kr skta hoon class k bahir sy or andr sy
class hp{
   public name="laptop"; // by default yeh variable public hoga to public na likho to kuch nhi hoga or isko class k andr or bahir sy change ki ya ja skta hai
  getvalue(){
    console.log(this.name);
    
  }
}
let newhp = new hp() 
console.log(newhp.getvalue()) 
newhp.name = "notebook pro" // maine is ki value idr change ki hai
console.log(newhp.getvalue()) 

// private in ts
// private variable tb use krta hain jab variable ko private rkhna ho koi us ko access kr change na kry 
class bankAccount{
  private balance=1200; // private variable ko sirf class ma hi use kr skta hain mgr class k bahir use nhi kr skta or is ko extend class ma bi use nhi kr skta
 getvalue(){
   console.log(this.balance);
   
 }
}
let newBankAccount = new bankAccount() 
// newBankAccount.balance =120000 agr ma private variable ko bahir use kroon ga to yn uski value change kroon to error ayy ga q k private variable ko bahir nhi use kr skta
console.log(newBankAccount.getvalue()) //private value ko dekh skta ho uska liya class ma function banao jis ma private ko access kro ga to ap is trhan is private value ko class k bahir dekh skta hoo

// protected in TS
// protected bi same private ki trhan mgr jab koi class extends hoti hai kisi or class k saath tb ap protected k use kr skta hoo q k protected other class ma share ho jata mgr classes k bahir nhi....

class admin{
  protected usr = "Asad" // is ko private krdo ga to yeh extend class ma access nhi hoga protected or private ma itna farak hai k protected extends ho kr use kr hojata hai dusri classes ma private nhi hota
}
class adminUser extends admin{
  private isUser = true 
  getvale(){
    console.log(this.usr) // idr variable access ho rha hai protected ki wajah sy agr private hota to error ata 
  }

}

let getAdmin = new adminUser()
getAdmin.getvale() 

//difference between access modifier (public, private protected)
// public jo ap jidr mrzi use or change kr skta hoon class k bahir bi or andr bi
// private class k bahir use nhi ho skta
// protected class k extend hona py other classes ma use ho skta hai mgr class k bahir nhi....

// readonly in ts

// readonly value ko sirf read kr skta ho ek dafa assign hogi dubara change nhi kr skta hai... 
class read{
  constructor(public readonly reader:string){ 
    this.reader =reader // idr assign ki hai ab is ko change nhi kr skta
  }
  getvalue(){
    // this.reader = name // idr agr maine readonly ki value change ki to error ayy ga
    console.log(this.reader) // is trhan use kr skta hai console py
  }
}
let newRead = new read("reading")
newRead.getvalue()

//2. Readonly Arrays
// The readonly modifier can also be used with arrays to create immutable arrays:
const numbers: readonly number[] = [1, 2, 3, 4, 5];

console.log(numbers[0]); // 1

// numbers[0] = 10; // Error: Index signature in type 'readonly number[]' only permits reading property
// numbers.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'


// 3. Readonly Properties in Interfaces 
// You can use readonly in interfaces to define immutable properties:

interface readInterface {
  readonly name: string;
  readonly age: number;
}
// is ko use kr skta hoon mgr change nhi q k yeh properties ab readonly ban gaai hain 
const readinter: readInterface = {
  name: "Alice", 
  age: 30
};

console.log(readinter.name); // Alice 
console.log(readinter.age); // 30

// readinter.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property

// getter and setter in TS
//getter sy hum value get krta hain class ma or setter sy set krta hain value class ma or get or set hota hai function mgr use as object hota hai
class animal{
  constructor(public name:string){ 
    this.name = name 
  }
  get getAnimal(){ // get humesha value return krta hai
    return this.name 
  }
  set setAnimal(name:string){ // set ma humesha value ati hai 
    this.name = name
  }
}

let an1 =new animal("cat")
console.log(an1)
console.log(an1.getAnimal) // getter or setter function hain mgr use idr object jsy huwa hai
an1.setAnimal = "dog"
console.log(an1.getAnimal)

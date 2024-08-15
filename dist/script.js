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
// classes in TS
class AirConditioner {
    constructor() {
        this.color = "white";
        this.category = "ac";
        this.company = "gracee";
        this.temp = 22;
    }
    turnOn() {
        console.log("turning on....");
        console.log("turned on....");
    }
    turnOff() {
        console.log("turning off....");
        console.log("turned off....");
    }
    incTemp(name) {
        this.temp++;
        console.log(`${name} is temperature increased by ${this.temp}`);
    }
    decTemp(name) {
        this.temp--;
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
    constructor() {
        this.table = "yes";
        this.paint = "yes";
        this.chair = "yes";
        this.light = "yes";
        this.fan = "yes";
    }
}
class computerRoom extends simpleRoom {
    constructor() {
        super(...arguments);
        this.laptop = "yes";
        this.pc = "yes";
        this.monitor = "yes";
    }
}
let newRoom = new computerRoom(); // jab hum ek instance bbnaya hai computerRoom k to us ma sari property thi jo simpleRoom ma thi is trhan hum class ko extend bi kr skta hain differenct other classes sy
console.log(newRoom); // is ma sub property jo dono class ki merge hui hain extend krna sy 
// Constructor in TS
// agr class sy ek new instance create krain ga to constructor phela chly ga to hum is value add kr skta hai yeh jab run hoga to automatically value assign hojai gaiii mgr jab instance banao ga tb value sub pass krni hogi jo jo constructor ma use hui hai as a parameter agr nhi kro ga to error ayyy ga
class earphone {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let newEarphone = new earphone("apple", 75000); //agr idr ek value pass kroon ga to error agyy q k constructor ma parameter do hain error hanlding boht achi hai Typescript ma yeh sub javascript ma nhi hoti 
console.log(newEarphone);
//more example 
class phone {
    // public name: string;
    // public price: number; agr yeh sub nhi likha to ap direct ko parameter ko hi access modifier (public, private, protected) bana do is sy apko itna sara code likhna zaror nhi 
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
}
let newPhone = new phone("Iphone 15 Pro Max", 450000); //agr idr ek value pass kroon ga to error agyy q k constructor ma parameter do hain error hanlding boht achi hai Typescript ma yeh sub javascript ma nhi hoti 
console.log(newPhone);
//Access modifier in TS
//class ma variable by default public hota hai to public nhi likho to by default public hi hoga
// public ko change bi krskta access bi kr skta hoon class k bahir sy or andr sy
class hp {
    constructor() {
        this.name = "laptop"; // by default yeh variable public hoga to public na likho to kuch nhi hoga or isko class k andr or bahir sy change ki ya ja skta hai
    }
    getvalue() {
        console.log(this.name);
    }
}
let newhp = new hp();
console.log(newhp.getvalue());
newhp.name = "notebook pro"; // maine is ki value idr change ki hai
console.log(newhp.getvalue());
// private in ts
// private variable tb use krta hain jab variable ko private rkhna ho koi us ko access kr change na kry 
class bankAccount {
    constructor() {
        this.balance = 1200; // private variable ko sirf class ma hi use kr skta hain mgr class k bahir use nhi kr skta or is ko extend class ma bi use nhi kr skta
    }
    getvalue() {
        console.log(this.balance);
    }
}
let newBankAccount = new bankAccount();
// newBankAccount.balance =120000 agr ma private variable ko bahir use kroon ga to yn uski value change kroon to error ayy ga q k private variable ko bahir nhi use kr skta
console.log(newBankAccount.getvalue()); //private value ko dekh skta ho uska liya class ma function banao jis ma private ko access kro ga to ap is trhan is private value ko class k bahir dekh skta hoo
// protected in TS
// protected bi same private ki trhan mgr jab koi class extends hoti hai kisi or class k saath tb ap protected k use kr skta hoo q k protected other class ma share ho jata mgr classes k bahir nhi....
class admin {
    constructor() {
        this.usr = "Asad"; // is ko private krdo ga to yeh extend class ma access nhi hoga protected or private ma itna farak hai k protected extends ho kr use kr hojata hai dusri classes ma private nhi hota
    }
}
class adminUser extends admin {
    constructor() {
        super(...arguments);
        this.isUser = true;
    }
    getvale() {
        console.log(this.usr); // idr variable access ho rha hai protected ki wajah sy agr private hota to error ata 
    }
}
let getAdmin = new adminUser();
getAdmin.getvale();
//difference between access modifier (public, private protected)
// public jo ap jidr mrzi use or change kr skta hoon class k bahir bi or andr bi
// private class k bahir use nhi ho skta
// protected class k extend hona py other classes ma use ho skta hai mgr class k bahir nhi....
// readonly in ts
// readonly value ko sirf read kr skta ho ek dafa assign hogi dubara change nhi kr skta hai... 
class read {
    constructor(reader) {
        this.reader = reader;
        this.reader = reader; // idr assign ki hai ab is ko change nhi kr skta
    }
    getvalue() {
        // this.reader = name // idr agr maine readonly ki value change ki to error ayy ga
        console.log(this.reader); // is trhan use kr skta hai console py
    }
}
let newRead = new read("reading");
newRead.getvalue();
//2. Readonly Arrays
// The readonly modifier can also be used with arrays to create immutable arrays:
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // 1
// is ko use kr skta hoon mgr change nhi q k yeh properties ab readonly ban gaai hain 
const readinter = {
    name: "Alice",
    age: 30
};
console.log(readinter.name); // Alice 
console.log(readinter.age); // 30
// readinter.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property
// getter and setter in TS
//getter sy hum value get krta hain class ma or setter sy set krta hain value class ma or get or set hota hai function mgr use as object hota hai
class animal {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    get getAnimal() {
        return this.name;
    }
    set setAnimal(name) {
        this.name = name;
    }
}
let an1 = new animal("cat");
console.log(an1);
console.log(an1.getAnimal); // getter or setter function hain mgr use idr object jsy huwa hai
an1.setAnimal = "dog";
console.log(an1.getAnimal);
//Function in TS
//void in function jab function kuch nhi return kr rha ho udr void use krta
function fnvoid() {
    console.log("hello world"); // idr return nhi ho rha just console ki ya
}
// function ma function ki type zaror batao jis sy code ko samajna easy hota 
// explicit return function jis ap batao k function konsy type yn kia return kry ga 
function explicitFn() {
    return "asad";
}
// implicit return mtlb jis function hum nahi batain ga k function kia return kr rha mgr typescript data sy us function ki type decide kry function kia return kry ga.....
function implicitFn() {
    return 29;
}

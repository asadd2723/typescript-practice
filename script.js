// string
var a = "202020";
//boolean
var bool = true;
//number
var num = 1000;
//array 
var arr = ["string"];
var arr1 = [20];
//tuple jab multi data types ki value add krni ho array ma
var tuple = ["339", 3994, 304];
//tupleWithRest ..... tb use krta hain jab koi same data type ki multi values hoon unko array ma add krna hoo .
var tuplewithrest = ["string", "asad"];
console.log(a, arr);
// Any in typeScript
var val; // any sy koi bi data type krskta hoon ap variable ma
val = 12; // idr maine number add ki ya phela
val = "12"; // ab maine change kr k string add kr diya to koi error nii aya
//unknown in typescript
var val1; // unknown sy koi bi data type krskta hoon ap variable ma
val1 = 120; // idr maine number add ki ya phela
val1 = "120"; // ab maine change kr k string add kr diya to koi error nii aya
//Void in TS 
// woh function jo kuch return nhi krta tb void use krta hain mean jis function ma sirf console karain ga.... void use kry ga
function abc() {
    console.log("hey");
}
abc();

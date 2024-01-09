let symbol1 =Symbol("symbol")
let symbol2 = Symbol("symbol")

console.log(symbol1 === symbol2) // false
console.log(typeof symbol1) //symbol
console.log("symbol: " + symbol1.toString()) //symbol: Symbol(symbol)

console.log("//===================================================")

const MY_KEY= Symbol();
let obj  = {};

obj[MY_KEY]=123;
console.log(obj[MY_KEY]);//123

console.log("//===================================================")

let obj2 = {}

obj2["prop"]="value2";
obj2[Symbol()]="value2";
obj2[Symbol()]="value2";
obj2["prop1"]="value2";

for (let key in obj2){
    console.log(key + " " + obj2[key])
}

// prop value2
// prop1 value2

console.log(JSON.stringify(obj2))
// {"prop":"value2","prop1":"value2"}

console.log("//===================================================")

let s4 = Symbol.for("fred")

console.log(s4) // Symbol(fred)
console.log(Symbol.keyFor(s4))// fred

let k4 = Symbol.keyFor(s4)
console.log(k4) //fred


console.log("//===================================================")
const COLOR_RED=Symbol("Red");
const COLOR_ORANGE=Symbol("Orange");
const COLOR_WHITE=Symbol("White");

function getColor(color){
    switch (color) {
        case "red":
            return COLOR_RED
        default:
            break;
    }
}

let color=getColor("red");

console.log(color) //Symbol(Red)
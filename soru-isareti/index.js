//=========================1====================================

console.log(2 + '2' * '2'); // (2 + Number(2*2)) ->6


//=========================2====================================

let a = [1, 2, 3];
let b = [4, 5, 6];

let s = a + b;
console.log(s) //-> 1,2,34,5,6
console.log(typeof s) // string

//=========================3====================================

const array = ['10', '10', '10'].map(parseInt);

console.log(parseInt('10')) // 10 
console.log(typeof parseInt('10')) // number
console.log(array);//[ 10, NaN, 2 ]
array.forEach(x => console.log(x))

function parseNumber(x, y) {
    console.log(x, y)
}

const array2 = ["8", "8", "8"].map(parseNumber);

// 8 0
// 8 1
// 8 2

console.log(parseInt(10, 0)) //10 ->parseInt(string,radix)
console.log(parseInt(10, 1)) //NAN ->parseInt(string,radix)
console.log(parseInt(10, 2)) //2 ->parseInt(string,radix)



//=========================4====================================
//soldan sağa doğru
console.log("1" + 1 - 1 +1) //11  
console.log("1" + 1 - 1 ) //11   
console.log(typeof (("1" + 1) -1)) //number
console.log("1" - 1 + 3) //3  

//=========================5====================================

var variable;
console.log(variable); //undefined

var sayHi ="hello";

function greet(){
    console.log(sayHi);
}

greet(); //hello


function getVariable(){
    var funcVariable="function scope variable";
    return funcVariable;
}

console.log(getVariable()); //function scope variable

//console.log(funcVariable); // error

function getVariable2(){
    var funcVariable = "function scope variable2"

    function returnVariable(){
        return funcVariable;
    }

    return returnVariable();
}

console.log(getVariable2()); //function scope variable2
// console.log(funcVariable) //ReferenceError: funcVariable is not defined


//====================var
function foodPrices(prices, addValue){
    var newPricelist = [];
    for (var index = 0; index < prices.length; index++) {
        var finalPrice = prices[index] + addValue;
        newPricelist.push(finalPrice);
    }

    console.log(index) //3
    console.log(finalPrice) // 40
    return newPricelist
}

console.log(foodPrices([10,20,30],10)) //[ 20, 30, 40 ]

// console.log(varFirst) //undefined
//  var varFirst=10;

var greeter ="javascript";

greeter= "nodejs";

console.log(greeter) //nodejs








//===============let

//let -> block scope

function foodPrices2(prices,addValue){
    let newPriceList = [];
    for (let index = 0; index < prices.length; index++) {
        const  finalPrice= prices[index] + addValue;
        newPriceList.push(finalPrice);
    }

    //console.log(finalPrice); //ReferenceError: finalPrice is not defined
    console.log(newPriceList); //[ 15, 25, 35 ]

    return newPriceList;
}

console.log(foodPrices2([10,20,30],5)) //[ 15, 25, 35 ]

// console.log(first) // ReferenceError: Cannot access 'first' before initialization

// let first=10;


let greeterLet ="javascript";

greeterLet= "nodejs";

console.log(greeterLet) //nodejs


//====================const 

//const -> block scope
const variableConst = 5;

console.log(variableConst) //5

//variableConst = 10;  //immutable(Değişmez)
//console.log(variableConst); //TypeError: Assignment to constant variable.


const person ={
    name:"Ayhan"
}
console.log(person.name) //Ayhan
person.name="Gungor" //mutable
console.log(person) //{name:'Gungor'} 
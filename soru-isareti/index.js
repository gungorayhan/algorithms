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
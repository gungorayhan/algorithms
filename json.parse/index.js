let data ={
    name:'ayhan',
}

console.log(data) //{ name: 'ayhan' }
console.log(typeof data) //object

let dataString= JSON.stringify(data);

console.log(dataString) //{"name":"ayhan"} 
console.log(typeof dataString) // string

console.log(JSON.parse(dataString)) //{ name: 'ayhan' }

//localStorage da bilgileri string olarak tutarız
// window.localStorage.setItem("myObject", JSON.stringify(myObject));
// let newObject = window.localStorage.getItem("myObject");
// console.log(JSON.parse(newObject));
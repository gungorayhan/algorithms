// var Module =(function(){
//     var privateMethod=function(){

//     }
//     return{
//         publicMethod:function(){

//         }
//     }
// })()

var Module = (function(){

    //private members
    let number =0;
    let increment = function (){
            return ++number;
    }

    let decrement = function(){
        return --number;
    }
    return {
        //public members
        increment,
        decrement
    }
})()

console.log(Module.increment())
console.log(Module.increment())
console.log(Module.decrement())


var Module2=(function(){
    var name="Ayhan"
    console.log(name)
})()


var Module3=(function(){
    var name="Ayhan"
    console.log(name)
})()


// 1
// 2
// 1
// Ayhan
// Ayhan
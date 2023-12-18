(function() { 
    
    class Name {
    constructor(name){
        this.name=name;
    }

    get(){
        return this
    }
}

var name1= new Name("Ayhan");
var name2= new Name("Yıldız");



console.log(name1.get());
console.log(name2.get());
// Name { name: 'Ayhan' }
// Name { name: 'Yıldız' }

const nameObject ={
    name:"",
    constructor (name){
       this.name=name
       return this.get();
    },
    get(){
       return this
    }
}

console.log(nameObject.constructor("Ayhan"))
console.log(nameObject.constructor("Yıldız"))
console.log(nameObject.name) 
// {
//     name: 'Ayhan',
//     constructor: [Function: constructor],
//     get: [Function: get]
//   }
//   {
//     name: 'Yıldız',
//     constructor: [Function: constructor],
//     get: [Function: get]
//   }
//   Yıldız

})()
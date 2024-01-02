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


//========================================== Model-Services =============================================================

class Services {
    constructor(model){
        this.model=model
    }

     async create(name,email){
        return new Promise((resolve,reject)=>{
           setTimeout(()=>{
            let object = this.model.create(name,email);
            resolve(object);
           },3000)
        }) 
    }

}



class Person {
    constructor(name,email){
        this.name=name
        this.email=email
    }
    static create(name,email){
        return new Person(name,email);
    }
}

class PersonServices extends Services{
    constructor(){
        super(Person)
    }
}

const personSercices = new PersonServices()

 function personThen (){
    personSercices.create("ayhan","ayhan@gmail.com")
    .then((result)=>{
        console.log(result)
    })
}

async function personAsync(){
 let data = await personSercices.create("ayhan","ayhan@gmail");
 console.log(data)
 return data;
}

personThen();
personAsync();

async function data(){
    let data= await personAsync();
    console.log(data.name +"  veri çekme işlemini başarıyla tamamladı");
}

data();
// Person { name: 'ayhan', email: 'ayhan@gmail.com' }
// Person { name: 'ayhan', email: 'ayhan@gmail' }
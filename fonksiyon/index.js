
//===========================1============================
console.log("//===========================1============================")

function func1(a,b){
    return a+b
}

console.log(func1(2,3))

//===========================2============================
console.log("//===========================2============================")

function func2(a,b){
        a+b;
}

console.log(func2(1,2)) // undefined

//===========================3============================
console.log("//===========================3============================")

let a = 4;

function globalVariable(){
    return a*a;
}

console.log(globalVariable()) //16

//===========================4============================
console.log("//===========================4============================")

//variable Lifetime

let counter = 0;

function add(){
    counter+=1;
}

add();
add();
add();

console.log(counter)//3

//===========================5============================
console.log("//===========================5============================")

function nested(){
    let counter =0;
     function nested1(){
        counter =+1;
     }

     nested1();
     return counter;
}

console.log(nested()); //1


//===========================6============================
console.log("//===========================6============================")

const selfInvoking=(function(){
let counter = 0;
return function(){counter+=1; return counter;}
})();

console.log(selfInvoking()); //1
//===========================7============================
console.log("//===========================7============================")

const object2 ={
    thisifadesi:"this ifadesine ulaşıldı",
    fonk:function(){
        return this.thisifadesi
    }
   
}

console.log(object2.fonk()) //this ifadesine ulaşıldı--> this=object2


function thisFonk(){
    let thisifadesi ="arrow fonksiyon"
    function fonk(){
        console.log(this.thisifadesi); 
    }
    fonk();
}

thisFonk() //undefined


function arrowThis(){
    var thisifadesi ="arrow fonksiyon";
    ()=>{
        this.thisifadesi;
    }
    
}

arrowThis();
//=========================== ============================
console.log("//=========================== ============================")
//call()
const person ={
    fullName :function(){
        return this.firstName + " " + this.lastName;
    }
}


const person1 ={
    firstName :"Ayhan",
    lastName:"Gungor"
}

const person2={
    firstName:"AYHAN",
    lastName:"GUNGOR"
}

console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));


const call ={
    fullName:function(name,surname){
        return this.firstName  + " - " + this.lastName + ", " + name + " " + surname
    }
}

const call1 ={
    firstName:'ayhan',
    lastName:'gungor'
}


console.log(call.fullName.call(call1,"AYHAN","GÜNGÖR")) //ayhan - gungor, AYHAN GÜNGÖR




//=========================== ============================
console.log("//=========================== ============================")
//apply()


const apply ={
    fullName:function(name,surname){
        return this.firstName  + " - " + this.lastName + ", " + name + " " + surname
    }
}

const apply1 ={
    firstName:'ayhan',
    lastName:'gungor'
}

console.log(apply.fullName.apply(apply1,["AYHAN","GÜNGÖR"])) //ayhan - gungor, AYHAN GÜNGÖR


//=========================== ============================
console.log("//=========================== ============================")
//bind()

const bind = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);
  console.log(fullName()) //Hege Nilsen
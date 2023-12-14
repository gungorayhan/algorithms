Person = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.meetups=[];
    }

    greet(person) {
        console.log("Hello " + person.name + ", my name is " + this.name)
    }

    attend(meetup) {
        this.meetups.push(meetup);
        meetup.attendees.push(this)
    }
}


var armagan = new Person('Armagan', 35);
var mert = new Person('Mert', 34);

armagan.greet(mert);
mert.greet(armagan);

// Hello Mert, my name is Armagan
// Hello Armagan, my name is Mert

Meetup = class {
    constructor(name) {
        this.name = name
        this.attendees = []
    }
    printAttendeeNames(){
        this.attendees.forEach(element=>{
            console.log(element)
        });
    }
}

var wtmb = new Meetup('Women Techmakers Berlin');

armagan.attend(wtmb);
mert.attend(wtmb);

console.log(armagan);
console.log(mert);

// Person {
//   name: 'Armagan',
//   age: 35,
//   meetup: Meetup { name: 'Women Techmakers Berlin' }
// }
// Person {
//   name: 'Mert',
//   age: 34,
//   meetup: Meetup { name: 'Women Techmakers Berlin' }
// }

//mongodb tasarımına benzedi iki ayrı şema oluşturuyoruz kendilerine ait değişkenleri. karşılıklı ilişkilieri var
//person şema ve meetup şema -> şemalar arası ilişki aslında nesneler arası ilişki ve nesnelerin bir birbiri içerisinde var olması sonrasında tüm nesnelerin sahnede var olması
//neslerin kendi datalarını yönetebilmeleri için fonksiyonlar yazıyoruz. bu fonksiyonlar sayesinde farklı nesneler ile veri alışverişi kendi iç datasını dinamik hale getirmek gibi özellikler kazanıyor

// Person {
//     name: 'Armagan',
//     age: 35,
//     meetup: <ref *1> Meetup {
//       name: 'Women Techmakers Berlin',
//       attendees: Person { name: 'Mert', age: 34, meetup: [Circular *1] }
//     }
//   }



console.log(wtmb.attendees)
// [
//     Person { name: 'Armagan', age: 35, meetups: [ [Meetup] ] },
//     Person { name: 'Mert', age: 34, meetups: [ [Meetup] ] }
//]

console.log(wtmb.attendees[0].meetups)
// [
//     Meetup {
//       name: 'Women Techmakers Berlin',
//       attendees: [ [Person], [Person] ]
//     }
//]

console.log(wtmb.attendees[0].meetups[0].attendees[0]);
// Person {
//     name: 'Armagan',
//     age: 35,
//     meetups: [ Meetup { name: 'Women Techmakers Berlin', attendees: [Array] } ]
//   }

//buradan şunuda anlıyoruz ki bir tane meetup nesnesi oluşturduk ve işlemlerimizi onun üzerinde gerçkeleştiriyoruz
//yazılımlardan veri tabanı başlantılarında singleton patern uygulamadığımızda verilerimiizin farklı databse bağlantı yolu(meetup) üzerinden işlem göreceğini ve veriler arasında ir tutarsızlık oalcağını düşüneiliriz

mihri = new Person('Mihri', 33);
mihri.attend(wtmb);

wtmb.printAttendeeNames();
// [
//     Person { name: 'Armagan', age: 35, meetups: [ [Meetup] ] },
//     Person { name: 'Mert', age: 34, meetups: [ [Meetup] ] },
//     Person { name: 'Mihri', age: 33, meetups: [ [Meetup] ] }
// ]
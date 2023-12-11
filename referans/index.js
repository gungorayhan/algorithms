var referans = [1,2,3];
//=================================1======================================

var referans2 = referans;

referans2.push(2);
console.log(referans2)
console.log(referans2)
// [ 1, 2, 3, 2 ]
// [ 1, 2, 3, 2 ]

//=================================2======================================
var referans3 = JSON.parse(JSON.stringify(referans)) 

referans3.push(4)

console.log(referans3)

// [ 1, 2, 3, 2 ]
// [ 1, 2, 3, 2 ]
// [ 1, 2, 3, 2, 4 ]

//=================================3======================================

var referans4 = referans.slice();
referans4.push(5);

console.log(referans4)

// [ 1, 2, 3, 2 ]
// [ 1, 2, 3, 2 ]
// [ 1, 2, 3, 2, 4 ]
// [ 1, 2, 3, 2, 5 ]
//=================================4======================================
var referansObje ={
    adi:'ayhan',
    soyadi:'gungor'

}

var referans5 = [...referans]
var referansObje5 ={...referansObje}
referans5.push(6)

console.log(referans5)
referansObje5={...referansObje}
referansObje5.name='AYHAN';

console.log(referansObje);
console.log(referansObje5);

// [ 1, 2, 3, 2 ]
// [ 1, 2, 3, 2 ]
// [ 1, 2, 3, 2, 4 ]
// [ 1, 2, 3, 2, 5 ]

//=================================5======================================
var referans6 = Object.assign({name:'Ayhan'},referansObje);

console.log(referans6)

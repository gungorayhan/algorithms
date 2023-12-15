// ====Synchronous Programlama Nedir?====
// Synchronous programlamada işlemler sırayla gerçekleşir. 
// Başka bir deyişle bir işlem bitmeden diğerine geçiş yapılmaz. 
// Aktif olan devam ederken sıradaki işlem bloklanır.

console.log("Hello,");
const syncExample = () => {
    console.log("How are you?");
};
//syncExample();
console.log("World.");

// Hello,
// How are you?
// World.


// ====Asynchronous Programlama Nedir?====
// Asynchronous programlama paralel programlamayı mümkün kılar. 
// Başka bir deyiş ile main akışı engellemeden kod yazabiliriz.
// Şimdi az önceki örneğimizi asynchronous şekilde düzenleyelim.


console.log("Hello,");

const asyncExample = () => {
    setTimeout(() => {
        console.log("How are you?");
    }, 3000);
};
//asyncExample();
console.log("World.");

// Hello,
// World.
// How are you?

// Temel olarak, JavaScript derleyicisi asynchronous
// işlevle karşılaştığında, bu yürütme bağlamını 
// WebAPI’ye gönderir ve kodun geri kalanı standart
// çalışma sistemi ile yani kodu satır satır okuyarak çalışmaya devam eder. 
// Bu sırada WebAPI setTimeOut fonksiyonunun takibini 
// yapar ve zamanı geldiğinde işlevi gerçekleşir.
//HEAP -> CALL STACK -> WEB API -> QUEUE -> EVENT LOOP-> CALL STACK

function printString(string) {
    setTimeout(() => {
        console.log(string);
    }, Math.floor((Math.random() * 100) + 1));
}


function printAllString() {
    printString('A');
    printString('Y');
    printString('H');
    printString('A');
    printString('N');
}

//printAllString();

// A
// Y
// A
// N
// H

// N 
// H
// Y
// A
// A

//peki kodumuzun sırayla çalışmasını istiyorsak. örnek kodumuzun Api haberleşmesi sonrasında 
//gelen bilgi ile devam etmesini sitediğimiz durumlarda ne yapmalıyız
//bunun için callback, promise ve async/await yöntemlerini kullanacağız

//===============callback

// Callback fonksiyonları bağımsız bir değişken
//  olarak başka bir fonksiyona geçirilen ve ilk 
//  fonksiyonun işlemi tamamlandıktan sonra diger 
//  fonksiyonun işlevini başlatan fonksiyonlardır.
//   Callbackler genellikle asynchronous 
// işlemler tamamlandıktan sonra kod yürütülmesine 
// devam etmek için kullanılır.

function addString(previous, current, callback) {
    setTimeout(() => {
        callback((previous + ' ' + current))
    }, Math.floor((Math.random() * 100) + 1))
}

function addAll() {
    addString('', 'A', result => {
        addString(result, 'Y', result => {
            addString(result, 'H', result => {
                addString(result, 'A', result => {
                    addString(result, 'N', result => {
                        console.log(result  + " callback");
                    })
                })
            })
        })
    })
}

addAll(); //A Y H A N callback

// bu tip kullanım ve yazımlar kodun okunmasında ve hata ayıklamada bize sıknıtılar çıkaracaktır 
//callback hell adı verilen problem ortaya çıkacak
// Callback’in beklenenden erken çağrılması,
// Callback’in hiç çağrılmaması,
// Callback’in beklenilenden az veya çok çağrılması,
// Gerekli parametreleri doğru bir şekilde alamaması,
// Hataların kontrolünde zayıflık


//===============promise
// Promiseler, ‘Callback Hell’ durumundan kaçınmak 
// için ve beklenmeyen durumla karşılaşıldığında
// hata kontrolünün daha rahat yapılabilmesi için geliştirilmiş
// ES6 olarak bilinen ECMAScript 2015 ile bize sunulan asynchronous bir yapıdır.

// Pending: Bu başlangıç aşamasıdır. Bu aşamada bir şey gerçekleşmez. Bu aşama için şöyle düşünebiliriz,
//          müşteri sana bir sipariş verecektir. Ama henüz bir şey sipariş etmemiştir.
// Resolved: Bu aşama ise işlemin sonuçlandığı ve başarılı olduğu aşamadır. Yani müşteri siparişini almış ve memnun kalmıştır.
// Rejected: Bu aşama ise hata ile sonuçlanan aşamadır. İstenen sipariş gelmemiş ve müşteri restoranı terk etmiştir.

function addStringPromise(previous, current) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(current , ' Promise');
            resolve(previous + ' ' + current)
        }, Math.floor((Math.random() * 100) + 1))
    })
}

//then() catch() yapıları ile gelen cevaplarımızı yakalayacağız;
// then ile ile resolve cevaplarını catch ile hata durumunu yakalayacağız

function addAllPromise(){
    addStringPromise("","A")
    .then((result)=>{
        return addStringPromise(result,"Y")
    })
    .then(result =>{
        return addStringPromise(result,'H');
    })
    .then(result=>{
        return addStringPromise(result,"A")
    })
    .then(result=>{
        return addStringPromise(result,"N")
    })
    .catch(error=>{
        console.log(error)
    })
}

addAllPromise();
// A
// Y
// H
// A
// N

// Promise.all( ), birden fazla promise tek bir then( ) ve catch( ) ile yazılabiliyor. Promise’lerden biri reject( ) olursa direk catch( )’e girer. Tüm Promise başarıyla tamamlanmasını bekler.
// Promise.race( ), ise promiselerden en önce hangi promise tamamlanırsa onun sonucunu alır.
// Promise.allSettled( ), tüm Promise başarılı, başarısız işletimleri bitince sonuçlarını status leri ile birlikte geriye döner.
// Promise.any( ), bu yöntem, yerine getiren ilk promisi döndürmek için kullanışlıdır. Bir promise yerine getirildikten sonra kısa devre yapar, bu nedenle bir resolve olmuş 
// bir promise bulduktan sonra diğer promiselerin tamamlanmasını beklemez.


//============================ async / await ========================

// Async/Await yapısı asynchronous işlemleri daha anlaşılması kolay bir hale getiren ECMAScript 
// 2017 ile kullanıma sunulan promise tabanlı bir Javascript özelliğidir.

function addStringAsync(previous, current) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(previous + ' ' + current)
        }, Math.floor((Math.random() * 100) + 1))
    })
}

async function AddAllAsync(){
    let toPrint = await addStringAsync("","A");
        toPrint = await addStringAsync(toPrint,"Y");
        toPrint = await addStringAsync(toPrint,"H");
        toPrint = await addStringAsync(toPrint,"A");
        toPrint = await addStringAsync(toPrint,"N");

    console.log(toPrint + " async/await");

    //anlalamızı gereken durum kod satırlarının bir biri ardına çalışma durumu
}


AddAllAsync();//A Y H A N async/await

//Anlaşılması kolay derken neyden bahsettiğimi açıklayayım. 
// Şöyle ki biz geliştiriciler olarak, çoğunlukla synchrounous 
// kod yazmaya alışkınız, yani birbiri ardına komut dizileri yazarız. 
// Çünkü bu tarz yazım şeklinin okunması ve anlaşılması çok daha kolaydır. 
// Callbackler ve promiseler 
// döngüsellikleri nedeniyle bizi bu açıdan biraz yorar. 
// Async-await tam olarak o anda yardımımıza koşar.
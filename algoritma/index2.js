console.log("//=====================Sıralama Algoritması=====================")

console.log("//=====Bubble Sort")
// Bubble Sort, her iki elemanı karşılaştırarak sıralama yapan bir algoritmadır.
// Her iterasyonda en büyük eleman, dizinin sonuna doğru "baloncuk" gibi yükselir.

function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            console.log("j <", "n-i-1: ", j, " - ", n - i - 1);
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

const arrayToSort = [64, 25, 12, 22, 11];
const sortedArray = bubbleSort(arrayToSort.slice()); //nesne üzerinde değişiklik olmaması adına slice() ile arrayToSort dizisinin kopyasını gönderiyorum
console.log("arrayToSort", arrayToSort);
console.log("Bubble Sort: ", sortedArray);
// arrayToSort [ 64, 25, 12, 22, 11 ]
// Bubble Sort:  [ 11, 12, 22, 25, 64 ]


console.log("//=====Merge Sort")
// Merge Sort, bir diziyi sıralamak için aşağıdaki adımları takip eder:
// Diziyi ortadan ikiye böler, her iki parçayı sıralar, ardından iki sıralı parçayı birleştirir.

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    console.log("leftHalf: ", leftHalf, " - ", " rightHalf: ", rightHalf)

    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(left, right) {
    console.log("left: ", left, " - ", " right: ", right)
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) { // > , <
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const arrayToSortMerge = [64, 25, 12, 11];
const sortedArrayMerge = mergeSort(arrayToSortMerge.slice());
console.log("Merge Sort: ", sortedArrayMerge)
// leftHalf:  [ 64, 25 ]  -   rightHalf:  [ 12, 11 ]
// leftHalf:  [ 64 ]  -   rightHalf:  [ 25 ]
// left:  [ 64 ]  -   right:  [ 25 ]
// leftHalf:  [ 12 ]  -   rightHalf:  [ 11 ]
// left:  [ 12 ]  -   right:  [ 11 ]
// left:  [ 25, 64 ]  -   right:  [ 11, 12 ]
// Merge Sort:  [ 11, 12, 25, 64 ]




console.log("//===================== Arama Algoritmaları =====================")

console.log("//=====Binary Search")
// Binary Search, sıralı bir dizide bir elemanı bulmak için kullanılan hızlı bir arama algoritmasıdır. 
// Ancak, dizi sıralı olmalıdır!!!!!!!!!!!!

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        console.log("mid: ", mid);
        console.log("low: ", low);
        console.log("high: ", high);
        console.log("========");

        //if else blokları dizi sıralı ise doğruyu yansıtacaktır.
        // mid değişkenini eksilterek ve artırarak -> sola ve sağa doğru ilerleme kaydediyoruz
        if (arr[mid] === target) {
            return mid; //hedef bulundu
        } else if (arr[mid] < target) {
            low = mid + 1; //hedef sağ tarafta
        } else {
            high = mid - 1;//hedef sol tarafta
        }
    }

    return -1; // hedef bulunamadı
}

const sortedArrayBinary = [11, 12, 22, 25, 64];
const targetElement = 22;
const result = binarySearch(sortedArrayBinary, targetElement);
console.log(`Binary Search: Index of ${targetElement} is ${result}`);

// mid:  2
// low:  0
// high:  4
// ========
// Binary Search: Index of 22 is 2


console.log("//===== Linear Search")
// Linear Search, bir dizide bir elemanı bulmak için sırayla 
// her elemanı kontrol eden basit bir arama algoritmasıdır.

function linearSearch(arr, target){
    for(let i=0; i < arr.length;i++){
        console.log(arr[i]);
        if(arr[i] === target){
            return i;//hedef bulundu
        }
    }
    return - 1; //hedef bulunamadı
}

const arrayToSearchLinear=[64,25,12,22,11];
const targetElementLinear =12;
const resultLinear = linearSearch(arrayToSearchLinear,targetElementLinear)
console.log(`Linar Search: Index of ${targetElementLinear} is ${resultLinear}`);

// 64
// 25
// 12
// Linar Search: Index of 12 is 2

console.log("//===================== Veri Yapıları =====================")

console.log("//=====Array(Dizi)")
//Dizi, aynı türdeki verileri içeren bir veri yapısıdır

let myArray =[1,2,3,4,5];

//eleman ekleme
myArray.push(6)

//eleman erişimi
console.log(myArray[2]); //3

//Dizi uzunluğu

console.log(myArray.length) //6

console.log("//=====Nesne(Object)")
//Nesne, anahtar-değer çiftleri içeren bir veri yapısıdır.

let person ={
    name:"John",
    age:30,
    city:"New York"
}

//veri okuma
console.log(person.name); //John
//yeni özellik ekleme
person.job="Developer"
//nesne içinde dolaşma
for(let key in person){
    console.log(`${key}: ${person[key]}`)
}

// name: John
// age: 30
// city: New York
// job: Developer



console.log("//=====Set")
// Set, benzersiz değerleri içeren bir veri yapısıdır.

// Set oluşturma
let mySet = new Set([1, 2, 3, 4, 5, 5]);

// Değer ekleme
mySet.add(6);

// değer kontrolü
console.log(mySet.has(3)); // true

// Set içinde dolaşma
mySet.forEach(value => {
  console.log(value);
});

// 1
// 2
// 3
// 4
// 5
// 6


console.log("//=====Harita (Map)")
// Map, anahtar-değer çiftleri içeren bir veri yapısıdır. 
// Nesnelere benzer, ancak anahtarlar string olmak zorunda değildir.

let myMap = new Map();

//değer ekleme
myMap.set("name","Alice");
myMap.set("age",25);
myMap.set(15,25);

//değer okuma
console.log(myMap.get("name")); //Alice

//map içinde dolaşma
myMap.forEach((value,key)=>{
    console.log(`${key}: ${value}`)
})
// name: Alice
// age: 25
// 15: 25

console.log("//=====Bağlı Liste (Linked List)")
// Bağlı liste, düğümlerden oluşan bir veri yapısıdır. 
// Her düğüm, bir veri elemanını ve bir sonraki düğümü işaret eden bir referansı içerir.
// dinamik boyutlara sahiptir ve elemanları birbirine bağlar

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null
    }

    append(data){
        let newNode= new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }
        let current = this.head;
        
        while(current.next){ 
            current = current.next
        }
        current.next=newNode;
    }

}

let myList = new LinkedList()
myList.append(1);
myList.append(2);
myList.append(3);

console.log(myList.head)

// Node {
//     data: 1,
//     next: Node { data: 2, next: Node { data: 3, next: null } }
//   }



function LinkedListWhile(data){
    let current = data ;
    while(current.next){
        current=current.next;
        console.log(` data: ${current.data} : ${current.next}`);
    }
}

LinkedListWhile(myList.head);


console.log("//=====Yığıt (Stack)")

// Yığıt, son giren, ilk çıkan (LIFO - Last In, First Out) prensibiyle çalışan bir veri yapısıdır.

let stack = [];

// Eleman ekleme
stack.push(1);
stack.push(2);
stack.push(3);

// Eleman çıkarma
let poppedElement = stack.pop();
console.log(poppedElement); // 3

console.log("//=====Kuyruk (Queue)")
// Kuyruk, ilk giren, ilk çıkan (FIFO - First In, First Out) prensibiyle çalışan bir veri yapısıdır.
let queue = [];

// Eleman ekleme
queue.push(1);
queue.push(2);
queue.push(3);

// Eleman çıkarma
let dequeuedElement = queue.shift();
console.log(dequeuedElement); // 1



console.log("//=====Hash Tablosu (Hash Table)")
// Hash tablosu, anahtar-değer çiftlerini saklayan bir veri yapısıdır. 
// Anahtarlar benzersiz bir şekilde hashlenir ve bu hash, değerleri 
// tutmak için bir dizine indeks olarak kullanılır.

class HashTable{
    constructor(){
        this.table={}
    }

    hash(key){
        let hash=0;
        for(let i = 0; i<key.length;i++){
            hash+=key.charCodeAt(i);
        }
        return hash % 37; //Mod işlemi ile indeks hesaplama
    }

    set(key,value){
        const index=this.hash(key);
        this.table[index]=value;
    }

    get(key){
        const index = this.hash(key);
        return this.table[index];
    }

}

let myHashTable=new HashTable()

myHashTable.set("name","John");
myHashTable.set("lastname","John");
console.log(myHashTable.get("name")); //John
console.log(myHashTable.table)
// John
// { '2': 'John', '10': 'John' }
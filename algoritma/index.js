//====================================== 1 ============================================
//[8,4,6,2,3] => output [4,2,4,2,3]

const cikarmaIslemi = (arr) => {
    return arr.map((_, i) => {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                arr[i] = arr[i] - arr[j]
                break;
            }
        }
        return arr[i];
    });
}

//console.log(cikarmaIslemi([8, 4, 6, 2, 3]))

//====================================== 2 ============================================

//input [[4,3,2,-1],[3,-2,-1,6],[5,-4,0,-1]] kaç eksi(-) değer var 

let input = [
    [4, 3, 2, -1],
    [3, -2, -1, 6],
    [5, -4, 0, -1],
]

const eksiDegerSayisi = (arr) => {

    return arr.map(row => row.filter(r => r < 0).length).reduce((a, b) => a + b, 0);

    // let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     for (j = 0; j < arr[i].length; j++) {
    //         if (arr[i][j] < 0) {
    //             newArr.push(arr[i][j])
    //         }
    //     }
    // }
    // return newArr.length;
}


//console.log(eksiDegerSayisi(input))

//====================================== 3 ============================================

//[555,901,899,1276,12] => çift basamaklı kaç sayı var 

const ciftBasamak = (arr) => {

    return arr.filter(number => number % 2 == 0).length

    // let cift=0;

    // for(let i=0; i<arr.length;i++){
    //     if(arr[i] % 2 ===0){
    //         cift+=1;
    //     }
    // }
    // return cift;
}

//console.log(ciftBasamak([555,901,899,1276,12]))


//====================================== 4 ============================================

//5 elemanlı bir dizi yap ve toplamları 0 olsun 

const toplamSifir = (num) => {
    let newArray = [];

    if (num % 2 == 1) {
        newArray.push(0);
    }

    for (let i = 1; i < num / 2; i++) {
        newArray.push(i);
        newArray.unshift(-i);
    }

    return newArray;
}


//console.log(toplamSifir(5))


//====================================== 5 ============================================

//n = 434 => 4*3*4 =>48 , 3+4+4=11 result => 48 - 11 = 37

const sayiToplaCikar = (number) => {

    let arr = number.toString().split('').map(n => Number(n))

    return arr.reduce((a, b) => a * b, 1) - arr.reduce((a, b) => a + b, 0);

    // let carp = 1;
    // let topla = 0;
    // let sonuc = 0;
    // let arr = Array.from(number.toString());
    // for (let i = 0; i < arr.length; i++) {
    //     carp *= Number(arr[i]);
    //     topla += Number(arr[i]);
    // }

    // return sonuc = carp - topla;

}

//console.log(sayiToplaCikar(434));


//====================================== 6 ============================================

//nums =[1,2,3,4,4,3,2,1] ,n=4 değerlerini alan bir fonksiyon

//output [1,4,2,3,3,2,4,1] nums ı 4 birim ardındaki değerini koy

const yeniDiziOlustur = (arr, num) => {
    let newArr = []

    for (let i = 0; i < num; i++) {
        newArr.push(arr[i]);
        newArr.push(arr[i + num]);

        // console.log(newArr)
        // [1, 4]
        // [1, 4, 2, 3]
        // [1, 4, 2, 3, 3, 2]
        // [
        //     1, 4, 2, 3,
        //     3, 2, 4, 1
        // ]
    }

    return newArr;
}


//console.log(yeniDiziOlustur([1, 2, 3, 4, 4, 3, 2, 1], 4))


//====================================== 7 ============================================

//input:[-2,1,-3,4,-1,2,1,-5,4] tekrar eden değerleri tekil hale getir ve topla 
//output -4

const tekilDegerToplam = (arr) => {


    // let newArr = [...new Set(arr)]

    // return newArr.reduce((a,b)=>a+b,0);

    let deger;
    let sonuc = 0;
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        deger = arr.pop();
        if (!arr.includes(deger)) {
            newArray.push(deger);
            sonuc += deger;
        }
    }
    return sonuc

}

//console.log(tekilDegerToplam([-2,1,-3,4,-1,2,1,-5,4]))

//====================================== 8 ============================================

//input: x=123
//output: 321
//input: x=-123
//output: -321
//input: x=120
//output: 21
const tersGosterim = (x) => {


    return x < 0 ? -1 * Number(x.toString().split('').filter(x => x != "-").reverse().join(''))
        : Number(x.toString().split('').filter(x => x != "-").reverse().join(''))

    // let n=0;
    // if(x<0){
    //     n=-1*x
    // }else{
    //     n=x;
    // }

    // let newArr = n.toString().split('').reverse().filter(x=> x!=0)
    // let number="";
    // for(let i=0; i < newArr.length; i++){
    //     number+=newArr[i];
    // }

    // return x < 0 ? Number(number) * -1 : Number(number)
}

//console.log(tersGosterim(132))

//====================================== 9 ============================================

//input : [2,7,11,15] , 9  => 2+7 =9 ise return [0,1]  dizi ve bir sayı alan fonksiyon yaz. dizi içinde seçilen iki sayının toplamı girilen sayıya eşit ise indexlerni dön

const sayiIndex = (arr, num) => {


    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) {
                return [arr.indexOf(arr[i]), arr.indexOf(arr[j])]
            }
        }
    }

}

//console.log(sayiIndex([2, 7, 11, 15], 9))


//====================================== 10 ============================================

//input: arr1:[2,4,3] arr2:[5,6,4]
//output [7,0,8]
// 342 + 465 = 807

const arrTopla = (arr1, arr2) => {

    return (Number(arr1.reverse().join('')) + Number(arr2.reverse().join(''))).toString().split('').reverse()

}


//console.log(arrTopla([2,4,3] ,[5,6,4]))

//====================================== 11 ============================================
//input: arr1:[1,3]  arr2:[2] median array
//output: 2.0000
//explanation: mergen array than median 2.0000

const median = (arr1, arr2) => {
    arr1.push(...arr2)
    arr1.sort((a, b) => a - b)
    let decimal = arr1.length / 2 - Math.floor(arr1.length / 2);
    if (arr1.length % 2 == 1) {
        return arr1[arr1.length / 2 - decimal]
    }
    else {
        return ((arr1[arr1.length / 2 - decimal] + arr1[arr1.length / 2 - decimal - 1]) / 2).toFixed(4)
    }
}

//console.log(median([1,3],[2]))

//====================================== 12 ============================================

// input: "5.5.5.5.5"  
//output: "5[.]5[.]5[.]5[.]5"

const degistir = (n) => {
    return n.replaceAll(".", "[.]")
}

//console.log(degistir("5.5.5.5.5"))

//====================================== 13 ============================================

// verilan sayının asal çarpanlarını bulan fonksiyonu yazınız

const asalCarpan = (num) => {
    let carpanlar = [];

    let start = 2;

    while (num > 2) {
        if (num % start == 0) {
            carpanlar.push(start)
            num = num / start
        } else {
            start++
        }
    }

    return carpanlar
}

//console.log(asalCarpan(69))

//====================================== 14 ============================================

//fibonacci hesabı 

const fibonacci = (num) => {
    var fibon = [0, 1];
    if (num <= 2) return 1
    for (let i = 2; i <= num; i++) {
        fibon[i] = fibon[i - 1] + fibon[i - 2]
    }
    return fibon[num]

}

console.log(fibonacci(12))

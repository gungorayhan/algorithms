//=====================Sıralama Algoritması=====================

//=====Bubble Sort 
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


//=====Merge Sort 
// Merge Sort, bir diziyi sıralamak için aşağıdaki adımları takip eder:
// Diziyi ortadan ikiye böler, her iki parçayı sıralar, ardından iki sıralı parçayı birleştirir.

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    console.log("leftHalf: " ,leftHalf, " - " ," rightHalf: ", rightHalf)

    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(left, right) {
    console.log("left: " ,left, " - " ," right: ", right)
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
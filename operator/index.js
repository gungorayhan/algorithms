console.log("//======================================1===============================")

function aritmatik() { // - + * / %
    let x = 5;
    let y = 10;

    let sum = x + y;
    console.log(sum);
}

aritmatik(); //15

console.log("//======================================2===============================")

function karsilastirma() { // == === != !== < > <= >=
    let x = 10;
    let y = 5;

    let isGreater = x > y;
    console.log(isGreater);
}

karsilastirma(); // true

console.log("//======================================3===============================")

function logical() {

    console.log("and")
    console.log(true && false); //false
    console.log(true && true); //true;
    console.log(false && false); //false
    console.log(false && true); //false
    console.log("or")
    console.log(true || false); //true
    console.log(true || true); //true;
    console.log(false || false); //false
    console.log(false || true); //true
    console.log("---")
    console.log("first" && true) //true
    console.log("" && true) //
    console.log(true && "" ) //
    console.log(" " && true) //true
    console.log("----")
    console.log("first" && false) //false
    console.log("" && false) //
    console.log(false && "" ) //false
    console.log(" " && false) //false

    console.log(true && "ayhan gungor"); //ayhan gungor
    console.log(false && "ayhan gungor"); //false
    console.log(true || "ayhan gungor"); //true
    console.log(false || "ayhan gungor"); //ayhan gungor
}

logical();
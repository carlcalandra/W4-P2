// Esercizio 21
const x = "John";
const y = "Doe";
console.log(x + " <> " + y);

// Esercizio 22
const es22Obj = {
    name:"John",
    surname:"Doe",
    email:"johndoe@test.com"
}

console.log(es22Obj);

// Esercizio 23
delete es22Obj.email;

// Esercizio 24
const myArray = ["Questo", "è", "un", "array", "di", "dieci", "elementi", "di", "tipo", "stringa"]

// Esercizio 25
for (let stringa of myArray) {
    console.log(stringa);
}

// Esercizio 26
const randNumArr = [];
for (let i = 0; i < 100; i++) {
    let randNum = Math.floor(Math.random()*100);
    randNumArr.push(randNum);
}

console.log(randNumArr);
// Esercizio 27
const findMaxAndMin = function(randArr) {
    let maxValue = randArr[0];
    let minValue = randArr[0];
    for (let i = 1; i < 100; i++){
        maxValue = randArr[i] > maxValue ? randArr[i] : maxValue;
        minValue = randArr[i] < minValue ? randArr[i] : minValue;
    }
    console.log("Max value is "+ maxValue);
    console.log("Min value is " + minValue);
}

findMaxAndMin(randNumArr);

// Esercizio 28 - Non essendo specificati quanti array figli sono da creare, ne creo un numero random tra 0 e 5

const fatherArray = [];
let randomNumOfSubArrays;
//avoid that the number of subarrays can be 0
do {
    randomNumOfSubArrays = Math.floor(Math.random()* 5);
} while (randomNumOfSubArrays === 0);
console.log(randomNumOfSubArrays);
for (let i = 0; i < randomNumOfSubArrays; i++) {
    let childArray = [];
    for (let j = 0; j < 10; j++) {
        let randomNumbChildArray = Math.floor(Math.random()*100);
        childArray.push(randomNumbChildArray)
    }
    fatherArray.push(childArray);
}

console.log(fatherArray);

// Esercizio 29

const longestArray = function(arr1, arr2) {
    return arr1.length > arr2.length ? arr1 : arr2;
}

console.log(longestArray([1,2,3,4,56,12,23], [11,12,34]))

// Esercizio 30

const higherSum = function(arr1, arr2) {
    sumArr1 = arr1.reduce(function(partialSum,  a){return partialSum + a},0);   
    sumArr2 = arr2.reduce(function(partialSum,  a){return partialSum + a},0);
    console.log(sumArr1);
    console.log(sumArr2);
    return sumArr1 > sumArr2 ? arr1 : arr2;
}

console.log(higherSum([1,2], [11,12,34]));

// Esercizio 31

let elContainer = document.getElementById("container");
console.log(elContainer);

// Esercizio 32

let elTds = document.getElementsByTagName("td");
console.log(elTds);

// Esercizio 33 

for (let elTd of elTds) {
    console.log(elTd.innerText);
}

// Esercizio 34

const changeTitle = function(newTitle) {
    document.title = newTitle;
}

changeTitle("Change Title func works")

// Esercizio 35

const addRowToTable = function() {
    const tableEl = document.getElementsByTagName("table")[0];
    const numberOfColumns = 5;
    let elRow = document.createElement("tr");
    for (let i = 0; i < numberOfColumns; i++){
        let elTd = document.createElement("td");
        elTd.innerText = "This cell was created with JS"
        elRow.appendChild(elTd);
    }
    tableEl.appendChild(elRow);
}

addRowToTable();

// Esercizio 36

const addTestClass = function(){
    let elTrs = document.getElementsByTagName("tr");
    for (let elTr of elTrs) {
        elTr.classList.add("test");
    }
}

addTestClass();

// Esercizio 37
const addRedBG = function(){
    let elAnchs = document.getElementsByTagName("a");
    for (let elAnch of elAnchs) {
        elAnch.style.backgroundColor = "red"
    }
}

addRedBG();

// Esercizio 38

window.onload = function(){
    console.log("Page loaded")
}

// Esercizio 39

const addNewListItem = function(listItem){
    let elUl = document.getElementsByTagName("ul")[0];
    let newLi = document.createElement("li");
    newLi.innerText = listItem;
    elUl.appendChild(newLi);
}

addNewListItem("Questo e' stato aggiunto con Js");

// Esercizio 40 - non ho capito quale deve essere il criterio di selezione della lista. 
//Per questo esercizio ho preso la lista ordinata

const emptyList = function(){
    let elOl = document.getElementsByTagName("ol")[0];
    elOl.innerHTML='';
}
//emptyList();
//Alternativa

const emptyList2 = function(){
    let elOl = document.getElementsByTagName("ol")[0];
    while (elOl.children.length > 0) {
        elOl.removeChild(elOl.lastChild);
    }
}

emptyList2();

// Esercizio 41

const elAnchs = document.getElementsByTagName("a");
for (let elAnch of elAnchs) {
    elAnch.addEventListener("mouseover", function(event){
        alert(event.currentTarget.href);
    })
}


// Esercizio 42
let body = document.getElementsByTagName("body")[0];
let but1 = document.createElement("button");
but1.innerText = "Nascondo le immagini"
but1.addEventListener("click", function(){
    let elImgs = document.getElementsByTagName("img");
    for (let elImg of elImgs) {
        elImg.style.visibility = "hidden";
    }
})
body.appendChild(but1);

// Esercizio 43 -- body definito nel precedente esercizio

let but2 = document.createElement("button");
but2.innerText = "Nascondo o mostro la tabella"
but2.addEventListener("click", function(){
    let elTable = document.getElementsByTagName("table")[0];
    elTable.classList.toggle("hidden-element");
})
body.appendChild(but2);

// Esercizio 44

const sumOfTds = function(){
    let sum = 0;
    let elTds = document.getElementsByTagName("td");
    for (let elTd of elTds){
        let value = parseInt(elTd.innerText);
        if (!isNaN(value)){
            sum += value
        }
    }
    return sum;
}

console.log(sumOfTds());

// Esercizio 45

let titolo = document.getElementsByTagName("h1")[0];
titolo.addEventListener("click", function(){
    titolo.innerText = titolo.innerText.substring(0, titolo.innerText.length-1);
})
// Esercizio 46 - elTds definiti nell'esercizio 32
for (let elTd of elTds) {
    elTd.addEventListener("click", function(event){
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        event.currentTarget.style.backgroundColor = randomColor;
    })
}
// Esercizio 47 - elTds definiti nell'esercizio 32 body nell'esercizio 42

let but3 = document.createElement("button");
but3.innerText = "Elimino una cella casuale"
but3.addEventListener("click", function(){
    if (elTds.length > 0) {
        let randomIndex = Math.floor(Math.random()*(elTds.length - 1));
        elTds[randomIndex].remove();
    } else {
        alert("non ci sono piu' celle nella tabella")
    }
})
body.appendChild(but3);

// Esercizio 48
for (let elTd of elTds) {
    elTd.addEventListener("mouseover", function(event){
        event.currentTarget.style.borderColor = "pink";
    })
}

//Esercizio 49

const createTable = function(){
    const numbOfRows = 4;
    const numbOfColumns = 3;
    let newTableEl = document.createElement("table");
    for (let i = 0; i < numbOfRows; i++) {
        let newRowEl = document.createElement("tr");
        for (let j = 0; j< numbOfColumns; j++){
            let newCellEl = document.createElement("td");
            newCellEl.innerText = "tabella creata con Js"
            newRowEl.appendChild(newCellEl)
        }
        newTableEl.appendChild(newRowEl);
    }
    body.appendChild(newTableEl);
}
createTable();

//Esercizio 50
const deleteLastTable = function(){
    let elTables = document.getElementsByTagName("table");
    elTables[elTables.length - 1].remove();
}

deleteLastTable();
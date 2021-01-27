console.log("Primer console.log de prueba");
console.log("Hello World");
console.log("----------------------------------");
//types
//Creando variables 
var myString = "Bon dia Mon y Galaxia";
myString = 22 + "";
var myNumber = 22;
var myBool = true || false;
var myVar = "hello";
myVar = false;
//Arrays
var StringArray = ["item1", "item2", ""];
var NumberArray = [1, 2, 3, 4];
var BooleanArray = [true, false, true];
var AnyArray = [1, 2, true, "hello", [], {}];
//tuple
//solo lee los dos primeros sean string number lo que pongas despues si eso esta bien da igual
var strNumTuple;
strNumTuple = ["Hello", 22];
//void, undefined, null
//var myVoid: void = undefined;
//var myNull: null = null;
//var myUndefined: undefined = undefined;
//Para escribir en documento
//document.write(typeof(myVoid));
//Functions
var sumar;
sumar = function (num1, num2) {
    return num1 + num2;
};
var getname;
getname = function (firstName, lastName) {
    return firstName + ' ' + lastName;
};
console.log("Provando clases para concatenar strings y sumar numeros");
console.log(sumar(1, 2));
console.log(getname('Pedro', 'López Castro'));
console.log("----------------------------------");
//Objetos
// implementation of a person object
var person = {
    name: 'Isaac',
    heighInCentimeters: 181,
    alias: 'Aissac'
};
console.log("Creando un objeto de persona");
console.log(person);
console.log("----------------------------------");
// js allow us, any 
var test;
test = function (a, b) {
    return a + b;
};
document.write("Provando document write con un calambur: ");
document.write(test('mas', 'cara'));

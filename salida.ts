console.log("Primer console.log de prueba");
console.log("Hello World")
console.log("----------------------------------")

//types
//Creando variables 
var myString: string = "Bon dia Mon y Galaxia";
myString = 22 + "";

var myNumber: number = 22;
var myBool: boolean = true || false;

var myVar: any = "hello";
myVar = false;

//Arrays
var StringArray: string[] = ["item1","item2",""]
var NumberArray: number[] = [1,2,3,4];
var BooleanArray: boolean[] = [true, false, true];
var AnyArray: any = [1, 2 ,true, "hello", [], {}];

//tuple
//solo lee los dos primeros sean string number lo que pongas despues si eso esta bien da igual
var strNumTuple: [string, number];
strNumTuple = ["Hello", 22];

//void, undefined, null
//var myVoid: void = undefined;
//var myNull: null = null;
//var myUndefined: undefined = undefined;
//Para escribir en documento
//document.write(typeof(myVoid));

//Functions
var  sumar;
sumar = function (num1, num2) {
    return num1 + num2;
}

var getname;
getname = function (firstName: any, lastName:any): any {
return firstName + ' ' + lastName;
}
console.log("Provando clases para concatenar strings y sumar numeros")
console.log(sumar(1,2));
console.log(getname('Pedro', 'López Castro'));
console.log("----------------------------------")

//Objetos
// implementation of a person object

var person = {
    name: 'Isaac',
    heighInCentimeters: 181,
    alias: 'Aissac'
    
};
console.log("Creando un objeto de persona");
console.log(person);
console.log("----------------------------------")

// js allow us, any 
var test;

test = function(a: string, b: string):string {
    return a + b;
}

document.write("Provando document write con un calambur: ");
document.write(test('mas', 'cara'));


//Interfaces
interface ITodo {
    title: String;
    text: string
}


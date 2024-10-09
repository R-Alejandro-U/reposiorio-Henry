"Ejercicio 1:" //Array.prototype.myMap

//Consigna: Implementa un método myMap en el prototipo de los arrays. 
//Este método debe funcionar de manera similar al método map de los arrays,  
//tomando una función de callback que se aplicará a cada elemento del array original,
//y devolver un nuevo array con los resultados.

    
Array.prototype.myMap = function(callback){

    let nuevo = [];
    for(let num of this){
        nuevo.push(callback(num));
    };

    return nuevo;
};

//Ejemplo:

var numeros = [1, 2, 3];
var cuadrados = numeros.myMap(num => num * num);
console.log(cuadrados); // [1, 4, 9]

"Ejercicio 2:" //Array.prototype.myReduce

//Consigna: Implementa un método myReduce en el prototipo de los arrays. 
//Este método debe funcionar de manera similar al método reduce de los arrays, 
//tomando una función de callback y un valor inicial (opcional) para reducir el 
//array a un solo valor.


Array.prototype.myReduce = function(callback, valorInicial){

    let acumulador = valorInicial !== undefined ? valorInicial : valorInicial = this[0];
    let inicio = valorInicial !== undefined ? 0 : 1;

    for(let i = inicio; i < this.length; i++){
        acumulador = callback(acumulador, this[i]);
    };

    return acumulador;
}

//Ejemplo:

var numeros = [1, 2, 3];
var suma = numeros.myReduce((acc, num) => acc + num, 0);
console.log(suma); // 6

"Ejercicio 3:" //Array.prototype.mySome

//Consigna: Implementa un método mySome en el prototipo de los arrays. 
//Este método debe funcionar de manera similar al método some de los arrays, 
//tomando una función de callback que se aplicará a cada elemento del array y 
//devolver true si al menos un elemento cumple con la condición, y false en caso 
//contrario.

Array.prototype.mySome = function(callback){

    for(let num of this){
        if(callback(num)){
            return true;
        };
    };

    return false;
}

//Ejemplo:

var numeros = [1, 2, 3];
var tieneMayoresDeDos = numeros.mySome(num => num > 2);
console.log(tieneMayoresDeDos); // true

"Ejercicio 4:" //Array.prototype.myFilter

//Consigna: Implementa un método myFilter en el prototipo de los arrays. 
//Este método debe funcionar de manera similar al método filter de los arrays, 
//tomando una función de callback que se aplicará a cada elemento del array y 
//devolver un nuevo array con los elementos que cumplen con la condición.

Array.prototype.myFilter = function(callback){
        
    let nuevo = [];

    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            nuevo.push(this[i]);
        };
    };

    return nuevo;
    }

//Ejemplo:

var numeros = [1, 2, 3, 4];
var pares = numeros.myFilter(num => num % 2 === 0);
console.log(pares); // [2, 4]

"Ejercicio 5:" //Array.prototype.myFind

//Consigna: Implementa un método myFind en el prototipo de los arrays. 
//Este método debe funcionar de manera similar al método find de los arrays, 
//tomando una función de callback que se aplicará a cada elemento del array y 
//devolver el primer elemento que cumple con la condición. Si ningún elemento 
//cumple con la condición, debe devolver undefined.

Array.prototype.myFind = function(callback){

    for(let element of this){
        if(callback(element)){
            return element;
        };
    };

    return undefined;
}

//Ejemplo:

var numeros = [1, 5, 3, 4];
var primerPar = numeros.myFind(num => num % 2 === 0);
console.log(primerPar); // 2




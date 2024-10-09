/*Ejercicio: Calcular Promedio de Edades
Objetivo: La funcion calcularPromedioEdad debe calcular el promedio de edad de un grupo de personas.

Descripción de la Tarea:
Se proporciona un arreglo de objetos personas, donde cada objeto representa una persona con las siguientes propiedades: nombre (string) y edad (número).
La función debe calcular y retornar el promedio de edad de las personas en el arreglo.
Si el arreglo está vacío, la función debe retornar 0.
*/

function calcularPromedioEdad(personas){
 //aqui tu código

    if(personas.length === 0){
        return 0;
    };
    return (personas.reduce((total, persona) => total + persona.edad, 0) / personas.length);

}





/*no tocar*/

module.exports = { calcularPromedioEdad };

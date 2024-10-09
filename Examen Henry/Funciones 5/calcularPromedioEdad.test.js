const { calcularPromedioEdad } = require('./index');

describe('calcularPromedioEdad', () => {
    test('calcula correctamente el promedio de edad', () => {
        const personas = [{ nombre: 'Ana', edad: 25 }, { nombre: 'Juan', edad: 30 }];
        expect(calcularPromedioEdad(personas)).toBe(27.5);
    });

    test('calcula correctamente el promedio de edad', () => {
        const personas = [{ nombre: 'Ana', edad: 25 }, { nombre: 'Juan', edad: 30 }, { nombre: 'Rosa', edad: 20 }];
        expect(calcularPromedioEdad(personas)).toBe(25);
    });

    test('retorna 0 para un arreglo vacío', () => {
        expect(calcularPromedioEdad([])).toBe(0);
    });
});

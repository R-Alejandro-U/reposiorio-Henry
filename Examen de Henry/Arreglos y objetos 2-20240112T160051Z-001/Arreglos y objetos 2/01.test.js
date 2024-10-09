const buscarFamiliar = require('./index');

describe('buscarFamiliar', function() {
    var familiares = [{ nombre: 'Mario', edad: 55 } , { nombre: 'Mercedes', edad: 25 }];

    it('should return "{ nombre: "Mario", edad: 55 }"', function() {
      expect(buscarFamiliar(familiares, 'Mario').nombre).toBe('Mario');
    });
    it('should return "{ nombre: "Mercedes", edad: 25 }"', function() {
      expect(buscarFamiliar(familiares, 'Mercedes').nombre).toBe('Mercedes');
    });
    it('should return "No se encontro un familiar con ese nombre"', function() {
      expect(buscarFamiliar(familiares, 'Maria')).toBe('No se encontro un familiar con ese nombre');
    });
  });

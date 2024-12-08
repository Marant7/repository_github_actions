const Calculadora = require('../src/calculadora');

describe('Calculadora', () => {
  let calculadora;

  beforeEach(() => {
    calculadora = new Calculadora();
  });

  describe('sumar', () => {
    test('debe sumar dos números positivos correctamente', () => {
      expect(calculadora.sumar(2, 3)).toBe(5);
    });

    test('debe sumar un número positivo y uno negativo correctamente', () => {
      expect(calculadora.sumar(2, -3)).toBe(-1);
    });

    test('debe lanzar error para parámetros que no son números', () => {
      expect(() => calculadora.sumar('2', 3)).toThrow('Los parámetros deben ser números');
    });
  });

  describe('dividir', () => {
    test('debe dividir dos números correctamente', () => {
      expect(calculadora.dividir(6, 2)).toBe(3);
    });

    test('debe lanzar error al dividir por cero', () => {
      expect(() => calculadora.dividir(6, 0)).toThrow('No se puede dividir por cero');
    });
  });
});

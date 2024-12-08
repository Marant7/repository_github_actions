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

    test('debe sumar dos números negativos correctamente', () => {
      expect(calculadora.sumar(-2, -3)).toBe(-5);
    });

    test('debe lanzar error para parámetros que no son números', () => {
      expect(() => calculadora.sumar('2', 3)).toThrow('Los parámetros deben ser números');
      expect(() => calculadora.sumar(2, '3')).toThrow('Los parámetros deben ser números');
      expect(() => calculadora.sumar(null, 3)).toThrow('Los parámetros deben ser números');
    });
  });

  describe('restar', () => {
    test('debe restar dos números correctamente', () => {
      expect(calculadora.restar(5, 3)).toBe(2);
    });

    test('debe restar con números negativos correctamente', () => {
      expect(calculadora.restar(5, -3)).toBe(8);
    });

    test('debe lanzar error para parámetros inválidos', () => {
      expect(() => calculadora.restar('5', 3)).toThrow('Los parámetros deben ser números');
    });
  });

  describe('multiplicar', () => {
    test('debe multiplicar dos números correctamente', () => {
      expect(calculadora.multiplicar(4, 3)).toBe(12);
    });

    test('debe multiplicar con números negativos', () => {
      expect(calculadora.multiplicar(4, -3)).toBe(-12);
      expect(calculadora.multiplicar(-4, -3)).toBe(12);
    });

    test('debe lanzar error para parámetros inválidos', () => {
      expect(() => calculadora.multiplicar('4', 3)).toThrow('Los parámetros deben ser números');
    });
  });

  describe('dividir', () => {
    test('debe dividir dos números correctamente', () => {
      expect(calculadora.dividir(6, 2)).toBe(3);
    });

    test('debe dividir con números negativos', () => {
      expect(calculadora.dividir(-6, 2)).toBe(-3);
      expect(calculadora.dividir(6, -2)).toBe(-3);
      expect(calculadora.dividir(-6, -2)).toBe(3);
    });

    test('debe lanzar error al dividir por cero', () => {
      expect(() => calculadora.dividir(6, 0)).toThrow('No se puede dividir por cero');
    });

    test('debe lanzar error para parámetros inválidos', () => {
      expect(() => calculadora.dividir('6', 2)).toThrow('Los parámetros deben ser números');
    });
  });
});
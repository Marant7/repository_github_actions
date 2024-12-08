class Calculadora {
    sumar(a, b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Los parámetros deben ser números');
      }
      return a + b;
    }
  
    restar(a, b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Los parámetros deben ser números');
      }
      return a - b;
    }
  
    multiplicar(a, b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Los parámetros deben ser números');
      }
      return a * b;
    }
  
    dividir(a, b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Los parámetros deben ser números');
      }
      if (b === 0) {
        throw new Error('No se puede dividir por cero');
      }
      return a / b;
    }
  }
  
  module.exports = Calculadora;
const Validadores = require('../src/validadores');

describe('Validadores', () => {
  describe('esCorreoValido', () => {
    test('debe retornar verdadero para correo válido', () => {
      expect(Validadores.esCorreoValido('prueba@ejemplo.com')).toBe(true);
    });

    test('debe retornar falso para correo inválido', () => {
      expect(Validadores.esCorreoValido('correo.invalido')).toBe(false);
    });
  });

  describe('esContraseñaValida', () => {
    test('debe retornar verdadero para contraseña válida', () => {
      expect(Validadores.esContraseñaValida('Contraseña123')).toBe(true);
    });

    test('debe retornar falso para contraseña sin mayúsculas', () => {
      expect(Validadores.esContraseñaValida('contraseña123')).toBe(false);
    });
  });
});

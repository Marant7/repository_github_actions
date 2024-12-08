const Validadores = require('../src/validadores');

describe('Validadores', () => {
  describe('esCorreoValido', () => {
    test('debe retornar verdadero para correos válidos', () => {
      expect(Validadores.esCorreoValido('prueba@ejemplo.com')).toBe(true);
      expect(Validadores.esCorreoValido('usuario.nombre@dominio.co')).toBe(true);
      expect(Validadores.esCorreoValido('email@subdomain.dominio.com')).toBe(true);
    });

    test('debe retornar falso para correos inválidos', () => {
      expect(Validadores.esCorreoValido('correo.invalido')).toBe(false);
      expect(Validadores.esCorreoValido('@dominio.com')).toBe(false);
      expect(Validadores.esCorreoValido('usuario@')).toBe(false);
      expect(Validadores.esCorreoValido('usuario@dominio')).toBe(false);
      expect(Validadores.esCorreoValido('')).toBe(false);
    });
  });

  describe('esContraseñaValida', () => {
    test('debe retornar verdadero para contraseñas válidas', () => {
      expect(Validadores.esContraseñaValida('Contraseña123')).toBe(true);
      expect(Validadores.esContraseñaValida('Password123')).toBe(true);
      expect(Validadores.esContraseñaValida('Abc12345')).toBe(true);
    });

    test('debe retornar falso para contraseñas sin mayúsculas', () => {
      expect(Validadores.esContraseñaValida('contraseña123')).toBe(false);
      expect(Validadores.esContraseñaValida('password123')).toBe(false);
    });

    test('debe retornar falso para contraseñas sin números', () => {
      expect(Validadores.esContraseñaValida('Contraseña')).toBe(false);
      expect(Validadores.esContraseñaValida('Password')).toBe(false);
    });

    test('debe retornar falso para contraseñas cortas', () => {
      expect(Validadores.esContraseñaValida('Abc123')).toBe(false);
      expect(Validadores.esContraseñaValida('Pw1')).toBe(false);
    });
  });

  describe('esUsuarioValido', () => {
    test('debe retornar verdadero para usuarios válidos', () => {
      expect(Validadores.esUsuarioValido('usuario123')).toBe(true);
      expect(Validadores.esUsuarioValido('user_name')).toBe(true);
      expect(Validadores.esUsuarioValido('abc123')).toBe(true);
    });

    test('debe retornar falso para usuarios inválidos', () => {
      expect(Validadores.esUsuarioValido('ab')).toBe(false); // muy corto
      expect(Validadores.esUsuarioValido('usuario@123')).toBe(false); // caracteres especiales
      expect(Validadores.esUsuarioValido('usuario_muy_largo_123456')).toBe(false); // muy largo
    });
  });
});
const ServicioUsuario = require('../src/servicioUsuario');

describe('ServicioUsuario', () => {
  let servicioUsuario;

  beforeEach(() => {
    servicioUsuario = new ServicioUsuario();
  });

  describe('crearUsuario', () => {
    test('debe crear usuario exitosamente', () => {
      const usuario = servicioUsuario.crearUsuario('usuarioprueba', 'prueba@ejemplo.com');
      expect(usuario.nombreUsuario).toBe('usuarioprueba');
      expect(usuario.correo).toBe('prueba@ejemplo.com');
    });

    test('debe lanzar error para nombre de usuario duplicado', () => {
      servicioUsuario.crearUsuario('usuarioprueba', 'prueba@ejemplo.com');
      expect(() => {
        servicioUsuario.crearUsuario('usuarioprueba', 'otro@ejemplo.com');
      }).toThrow('El nombre de usuario ya existe');
    });
  });

  describe('actualizarCorreo', () => {
    test('debe actualizar correo exitosamente', () => {
      servicioUsuario.crearUsuario('usuarioprueba', 'prueba@ejemplo.com');
      const actualizado = servicioUsuario.actualizarCorreo('usuarioprueba', 'nuevo@ejemplo.com');
      expect(actualizado.correo).toBe('nuevo@ejemplo.com');
    });

    test('debe lanzar error para usuario inexistente', () => {
      expect(() => {
        servicioUsuario.actualizarCorreo('noexiste', 'nuevo@ejemplo.com');
      }).toThrow('Usuario no encontrado');
    });
  });
});
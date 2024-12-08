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
      expect(usuario.creadoEn).toBeInstanceOf(Date);
    });

    test('debe lanzar error para nombre de usuario duplicado', () => {
      servicioUsuario.crearUsuario('usuarioprueba', 'prueba@ejemplo.com');
      expect(() => {
        servicioUsuario.crearUsuario('usuarioprueba', 'otro@ejemplo.com');
      }).toThrow('El nombre de usuario ya existe');
    });
  });

  describe('obtenerUsuario', () => {
    test('debe obtener usuario existente', () => {
      servicioUsuario.crearUsuario('usuarioprueba', 'prueba@ejemplo.com');
      const usuario = servicioUsuario.obtenerUsuario('usuarioprueba');
      expect(usuario.nombreUsuario).toBe('usuarioprueba');
      expect(usuario.correo).toBe('prueba@ejemplo.com');
    });

    test('debe lanzar error para usuario no existente', () => {
      expect(() => {
        servicioUsuario.obtenerUsuario('noexiste');
      }).toThrow('Usuario no encontrado');
    });
  });

  describe('actualizarCorreo', () => {
    test('debe actualizar correo exitosamente', () => {
      servicioUsuario.crearUsuario('usuarioprueba', 'prueba@ejemplo.com');
      const actualizado = servicioUsuario.actualizarCorreo('usuarioprueba', 'nuevo@ejemplo.com');
      expect(actualizado.correo).toBe('nuevo@ejemplo.com');
      
      // Verificar que el cambio persistió
      const recuperado = servicioUsuario.obtenerUsuario('usuarioprueba');
      expect(recuperado.correo).toBe('nuevo@ejemplo.com');
    });

    test('debe lanzar error para usuario inexistente', () => {
      expect(() => {
        servicioUsuario.actualizarCorreo('noexiste', 'nuevo@ejemplo.com');
      }).toThrow('Usuario no encontrado');
    });
  });

  describe('eliminarUsuario', () => {
    test('debe eliminar usuario exitosamente', () => {
      servicioUsuario.crearUsuario('usuarioprueba', 'prueba@ejemplo.com');
      servicioUsuario.eliminarUsuario('usuarioprueba');
      expect(() => {
        servicioUsuario.obtenerUsuario('usuarioprueba');
      }).toThrow('Usuario no encontrado');
    });

    test('debe lanzar error al intentar eliminar usuario inexistente', () => {
      expect(() => {
        servicioUsuario.eliminarUsuario('noexiste');
      }).toThrow('Usuario no encontrado');
    });
  });
});
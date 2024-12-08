class ServicioUsuario {
    constructor() {
      this.usuarios = new Map();
    }
  
    crearUsuario(nombreUsuario, correo) {
      if (this.usuarios.has(nombreUsuario)) {
        throw new Error('El nombre de usuario ya existe');
      }
  
      const usuario = { nombreUsuario, correo, creadoEn: new Date() };
      this.usuarios.set(nombreUsuario, usuario);
      return usuario;
    }
  
    obtenerUsuario(nombreUsuario) {
      const usuario = this.usuarios.get(nombreUsuario);
      if (!usuario) {
        throw new Error('Usuario no encontrado');
      }
      return usuario;
    }
  
    actualizarCorreo(nombreUsuario, nuevoCorreo) {
      const usuario = this.obtenerUsuario(nombreUsuario);
      usuario.correo = nuevoCorreo;
      this.usuarios.set(nombreUsuario, usuario);
      return usuario;
    }
  
    eliminarUsuario(nombreUsuario) {
      if (!this.usuarios.has(nombreUsuario)) {
        throw new Error('Usuario no encontrado');
      }
      this.usuarios.delete(nombreUsuario);
    }
  }
  
  module.exports = ServicioUsuario;
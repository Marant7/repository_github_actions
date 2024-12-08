class Validadores {
  static esCorreoValido(correo) {
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correoRegex.test(correo);
  }

  static esContraseñaValida(contraseña) {
    return contraseña.length >= 8
      && /[A-ZÁÉÍÓÚÑ]/.test(contraseña)
      && /[a-záéíóúñ]/.test(contraseña)
      && /\d/.test(contraseña);
  }

  static esUsuarioValido(usuario) {
    const usuarioRegex = /^[a-zA-Z0-9_]{3,20}$/;
    return usuarioRegex.test(usuario);
  }
}

module.exports = Validadores;
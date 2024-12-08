class Validadores {
  static esCorreoValido(correo) {
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correoRegex.test(correo);
  }

  static esContraseñaValida(contraseña) {
    // Al menos 8 caracteres, 1 mayúscula, 1 minúscula, 1 número
    return (
      contraseña.length >= 8 && // Al menos 8 caracteres
      /[A-ZÁÉÍÓÚÑ]/.test(contraseña) && // Al menos una mayúscula
      /[a-záéíóúñ]/.test(contraseña) && // Al menos una minúscula
      /\d/.test(contraseña) // Al menos un número
    );
  }

  static esUsuarioValido(usuario) {
    // 3-20 caracteres, letras, números, guiones bajos
    const usuarioRegex = /^[a-zA-Z0-9_]{3,20}$/;
    return usuarioRegex.test(usuario);
  }
}

module.exports = Validadores;
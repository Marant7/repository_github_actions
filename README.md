
# Demo de Gestión de Pruebas

Este repositorio demuestra herramientas y prácticas de gestión de pruebas usando una aplicación simple en Node.js.

## Características

- Clase Calculadora con operaciones aritméticas básicas
- Servicio de gestión de usuarios
- Validadores de entrada
- Suite de pruebas completa
- Pipeline CI/CD con GitHub Actions

## Pipeline CI/CD

El pipeline de GitHub Actions:
1. Se ejecuta en push a main y pull requests
2. Instala dependencias
3. Ejecuta linting
4. Ejecuta pruebas con cobertura
5. Sube reportes de cobertura
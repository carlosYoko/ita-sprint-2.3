# Memoize Function

Aplicación memoize function utilizando TypeScript y el patrón MVC.  
Incluye interfaz CLI, testing y frontend básico en HTML e integración continua (CI) con GitHub Actions.

##### Trabajo del Sprint 2.3 de IT-Academy en la especialización de Node.js.<br>

La función memoize permite optimizar el rendimiento en funciones que tienen una gran complejidad computacional o se ejecutan con frecuencia. Consiste en guardar en una memoria caché (caché) los resultados de las llamadas anteriores y asociarlos con los valores de entrada correspondientes.

Cuando la misma función se invoca con los mismos valores de entrada, en lugar de ejecutar toda la lógica de la función, primero se verifica si ya existe un resultado almacenado para esos valores y se devuelve directamente. Esto ahorra tiempo de cálculo y mejora el rendimiento de la función.

- La función debe ser implementada utilizando TypeScript y TDD.

⭐ Nivel 1
Implementa una función memoize.
Utiliza pruebas para verificar la funcionalidad de la función memoize.

⭐⭐ Nivel 2
Crea una interfaz de línea de comandos (CLI) para verificar la funcionalidad de la función memoize.

⭐⭐⭐ Nivel 3
Crea un front-end para verificar la funcionalidad de la función memoize.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

## Instalación

Para clonar el repositorio e instalar las dependencias necesarias, usa los siguientes comandos:

```bash
git clone https://github.com/carlosYoko/ita-sprint-2.3.git
cd ita-sprint-2.3
npm install
```

## Comandos

### Para transpilar el proyecto:

Para transpilar el proyecto, usa el siguiente comando:

```bash
npm run build
```

### Ejecutar la aplicacion por CLI

Para ejecutar la aplicacion mediante CLI, usa el siguiente comando:
Este comando ejecuta el CLI del proyecto compilado.

```bash
npm run start
```

### Ejecutar tests

Para ejecutar los tests, usa el siguiente comando:

```bash
npm run test
```

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE.md para más detalles.

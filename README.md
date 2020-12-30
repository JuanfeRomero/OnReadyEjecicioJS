# Ejercicio Onready Java
## Objetivo:
Imaginemos una concesionaria de autos y motos.
Crear un programa en Java o Javascript que, al ejecutarse, se visualice lo siguiente por consola:

```

**Marca: Peugeot // Modelo: 206 // Puertas: 4 // Precio: $200.000,00**
**Marca: Honda // Modelo: Titan // Cilindrada: 125cc // Precio: $60.000,00**
**Marca: Peugeot // Modelo: 208 // Puertas: 5 // Precio: $250.000,00**
**Marca: Yamaha // Modelo: YBR // Cilindrada: 160cc // Precio: $80.500,50**
=============================
Vehículo más caro: Peugeot 208
Vehículo más barato: Honda Titan
Vehículo que contiene en el modelo la letra ‘Y’: Yamaha YBR $80.500,50
=============================
Vehículos ordenados por precio de mayor a menor:
Peugeot 208
Peugeot 206
Yamaha YBR
Honda Titan

```
## La solución debe cumplir con los siguientes requisitos:
- Estar programada en Java o Javascript según tu lenguaje de preferencia.
- Subir la solución a un repositorio Git público para que podamos descargar la solución directamente.
- Diseñar una solución **orientada a objetos y subir al repositorio un diagrama de clases junto con el código.**
- La salida es por consola y **exactamente como se requiere.**
- **NO** usar librerías de terceros.
- Cargar la lista de autos en un único método. No hay ingreso por pantalla de ningún tipo.
- El algoritmo usado para la impresión no tiene que depender de la cantidad, modelo o tipo de vehículo.

### Solución
La solución está subida en el Archivo Ejercicio.js con el sistema de clases ES6 de Javascript, que no representa una orientación a objetos real, simplemente es una decoración de sintaxis, está incluido una imagen con un diagrama de clases indicando como está compuesta la herencia de clases, en el archivo se carga una lista de vehiculos en un unico metodo, tambien se implementa un metodo especifico para cada salida de información, al agregar el formato del precio implemente una función que da formato de dinero al numero, pero lo adapté con una manipulación de String para que los puntos y las comas sean representados de la misma manera que lo indica el ejercicio, puede verse la coincidencia en la imagen checkDiff.

**Si bien la solución indica que el programa puede crearse en Java o Javascript, al requerir una solución orientada a objetos creo que la manera mas correcta de realizar este tipo de programa es a traves de Java que puede encontrarse en el siguiente [repositorio](https://github.com/JuanfeRomero/EjercicioOnReadyJava), por favor tenga en cuenta el repositorio de Java a la hora de analizar el ejercicio. Muchas gracias.**
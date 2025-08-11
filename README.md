# Análisis final
## ¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con prototype y usar class?
### Diferencias
- Primero, `Class` lo que tiene es que es más moderno, a la hora de usar `prototype` directamente te recomienda utilizar `Class`. Se pueden encontrar ciertas diferencias en la escritura, como por ejemplo en `prototype` se utiliza `function` para definir donde se van a guardar los atributos.

### Ventajas
- Para mi `Class` es mucho más fácil, siento que es más intuitivo, tiene una sintaxis mucho más legible que prototype.
- Se pueden usar campos privados.

### Desventajas
- `Class` lo que tiene es que al ser más nuevo, puede no llegar a funcionar en navegadores viejos.
- `Prototype` para mi tiene una sintaxis menos intuitiva y es más facil cometer errores.
---
## ¿Cuáles son las ventajas de usar getters y setters?
### Ventajas
- Estos te permiten controlar cómo uno puede acceder y modificar propiedades.
- Se puede proteger el estado del objeto gracias al encapsulamiento.
---
## ¿Qué problemas pueden surgir al modificar prototipos nativos como String?
- Si se llegan a modificar los prototipos nativos, pueden existir riesgos al querer el mismo método en otra parte del código, si nos olvidamos de la modificación de ese método puede ser que afecte a todo el código y no sepamos de donde surge el error.
---
## Teniendo en cuenta un objeto personPrototype que contiene un método greet, ¿qué diferencias encontrás entre asignar ese método directamente al prototype de una función constructora o usar Object.assign?
- Primero al asignar el método `greet` directamente al `prototype` de una función constructora, lo que pasa es que tenemos la posibilidad de agregar un método de forma muy especifico al prototype, puede ser más controlado, pero ahí tendriamos que asignar uno por uno.
- Ahora con el `Object.assign` lo que va a pasar es que vamos a copiar todos los métodos y propiedades del objeto a la vez, ya con esto nos damos cuenta que es muchisimo más que hacerlo con el anterior método.
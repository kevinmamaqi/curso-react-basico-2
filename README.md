# 1. Introducción

## Como seleccionar la plantilla:
1. CTRL + SHIT + P
2. Escribir Color theme
3. Pinchar ENTER
4. Dark+ (default)

## Extensiones a utilizar:
1. GitLens - Git supercharged
2. ES7+ React/Redux/React Native shortcodes
3. vscode-styled-components
4. ESLint
5. Prettier

## Iniciar un proyecto con Vite
1. Ir a https://vitejs.dev/
2. Get Started
3. Correr en la terminal integrada `npm create vite@latest`
4. Seguir las opciones seleccionando como nombre del proyecto `.`, como plantilla `react` y `javascript`.

## Busqueda
1. CTRL + P para hacer un fuzzysearch/sort.

___

# 2. ¿Qué es React?
Librería para construir interfaces:
- Poca estructura y mucha libertad.
- Se avanza muy rápido.
- Fácil equivocarse si no se sigue algun patrón solido de arquitectura.

## Ventajas
1. Sintaxis: JSX. Unifica en un mismo archivo (sintaxis/lenguaje), html, css y javascript.
2. Hooks: Reutilizar lógica personalizada en la aplicación.

## Desventajas
1. Hooks: Demasiada magia (useState, useEffect, etc...).

___

# 3. Estructura del proyecto

## Organización de las carpetas
Para organizar las carpetas se utiliza el modelo Atómico de Brad Frost: https://bradfrost.com/blog/post/atomic-web-design/

- assets
- components
    - atoms
    - molecules
    - organisms
    - layout
- styles
    - colors
    - dimensions

Exportar los distintos módulos desde la carpeta:
1. Usar un indice (index.js)
2. Ordenar las exportaciones alfabeticamente.

# 4. useState
Enlace a la documentación oficial: https://es.reactjs.org/docs/hooks-reference.html#usestate

Consideraciones:
1. Devuelve el estado (en una variable) y una función para actualizar el estado.
2. El estado persiste si el componente se re-renderiza.
3. El cambio de estado provoca que los componentes se re-rendericen. Puede causar problemas de performance.
4. Se puede inicializar el estado.

# 5. useEffect
Enlace a la documentación oficial: https://es.reactjs.org/docs/hooks-reference.html#useeffect

1. Se usa para gestionar "sideEffects" porque `Las mutaciones, suscripciones, temporizadores, registro y otros efectos secundarios no están permitidos dentro del cuerpo principal de un componente de función (denominado como render phase de React). Si lo hace, dará lugar a errores confusos e inconsistencias en la interfaz de usuario.`
2. El array de dependencias determina cuando se ejecuta el código de useEffect.
3. Si el array de dependecians esta vacio. useEffect solo se ejecuta cuando el componente renderiza.
4. La función return (o cleanUp) se ejecuta cuando el componente se "desmonta".

```
// useEffect se ejecuta cada vez que tSize, cSize o sSize cambian.
useEffect(() => {
 if (tSize === cSize && cSize === sSize) {
   alert('Todas las figuras tienen el mismo tamaño')
 }
}, [tSize, cSize, sSize]) // Array de dependencias -> Aquí especificamos de que "variables" depende nuestra función

useEffect(() => {
 console.log('Primer render')
}, []) // Cuando el array de dependencias esta vacio, solo se ejecuta cuando renderiza.

useEffect(() => {
 window.addEventListener('click', handleKeyUpEv)
 return () => window.removeEventListener('click', handleKeyUpEv) // El return (cleanUp), se ejecuta cuando el componente se "desmonta", es decir antes de renderizarse de nuevo, desaparece.
}, [])
```


# Extras JS
1. Destructuración de variables en JS: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
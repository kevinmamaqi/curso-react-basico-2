// Para guardar datos en JS, un objeto suele ser la mejor manera.
// Por eso REDUX usa un objeto para guardar los datos.
const estadoA = {
  tipo: 'garaje',
  ciudad: 'madrid',
}
const estadoB = estadoA // Esto no es una copia, es una referencia al mismo objeto.

// Para evitar sideEffects, no ha de modificar el objeto original.
const pisos = [
  {
    id: 1,
    nombre: 'Piso 1',
    precio: 100000,
    foto: 'https://kevinmamaqi.com/static/casas/1.jpg',
    type: 'garaje',
    city: 'madrid',
  },
  {
    id: 2,
    nombre: 'Piso 2',
    precio: 838000,
    foto: 'https://kevinmamaqi.com/static/casas/2.jpg',
    type: 'chalets',
    city: 'barcelona',
  },
]

const pisosNormalizados = {
  1: {
    ...pisos[0],
  },
  2: {
    ...pisos[1],
  },
}

const pisos {
    byId: {
        1: {
            ...pisos[0],
        },
    },
    allPisos: [1, 2],
    byWeek: {
        1: [1, 2],
    }
}

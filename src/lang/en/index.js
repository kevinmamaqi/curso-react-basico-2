const listaCompra = []

const manzana = {
  id: 'manzana',
  precio: 1,
  nombre: 'Manzana',
}

const addToCart = (product, cantidad) => {
  const idx = listaCompra.findIndex((item) => item.id === product.id)
  if (idx !== -1) {
    listaCompra.push({ ...product, cantidad })
  } else {
    listaCompra[idx].cantidad += cantidad
  }
}

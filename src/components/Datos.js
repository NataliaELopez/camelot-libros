export const traerProd = async () => {
    const response = await fetch('../json/productos.json')
    const productos = await response.json()
    return productos
}
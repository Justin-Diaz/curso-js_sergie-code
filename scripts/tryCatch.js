//* TRY CATCH SINCRONO

try {
    console.log('llamando al backend')
    throw ('peticion fallida')
}
catch (error) {
    console.log('algo fallo: ', error)
} 
finally {
    console.log('se ejecuta siempre')
}

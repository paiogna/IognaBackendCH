const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hola")
})

const createdServer = server.listen(8080, () => {
    console.log(`Escuchando puerto ${server.address().port}`)
})
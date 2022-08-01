const express = require('express')
const fs = require('fs')
const Contenedor = require("./contenedor.js");

const app = express()
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Escuchando puerto ${server.address().port}`)
})
server.on('error', (err) => console.log(err))

app.get('/', (req, res) => {
    res.send('Bienvenido al desafio servidor con express')
})


app.get('/productos', async (req, res) => {
    try {
        const contenedor = new Contenedor('./productos.txt')
        const showAll = await contenedor.getAll()
        // console.log(showAll) 
        res.json({showAll})
    } catch (err) {
        console.log(err)
    }
})

app.get('/productosRandom', async (req, res) => {
    try{
        const contenedor = new Contenedor('./productos.txt')
        const showRandom = await contenedor.getByIdRandom()
        res.json({showRandom})
    } 
    catch (err) {
        console.log()
    }
})

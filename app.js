const express = require('express')
const path = require('path')
const { v4 } = require('uuid')

const PORT = 8000
const app = express()

//midlewers
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

let notes = [
    { id: v4(), title: 'Nota 1', content: 'Contenido de la nota 1' },
    { id: v4(), title: 'Nota 2', content: 'Contenido de la nota 2' }
]

//GET
app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.listen(PORT, () => {
    console.log(`El servidor se inicializo en el puerto ${PORT}`)
})
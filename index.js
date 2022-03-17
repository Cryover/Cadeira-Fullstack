const express = require('express')
const app = express()
const port = 3000

/*app.get('/', (req, res) => {
    res.send('Hello World!')
})*/

app.get('/', function(req, res) {
    res.send('<h1>Hello World!</h1>')
})

app.get('/hello', function(req, res) {
    if (req.query && req.query.nome) {
        res.send('<h1>Hello ' + req.query.nome + '!</h1>')
    } else {
        res.send('<h1>Hello World</h1>')
    }
})

app.get('/api', function(req, res) {
    res.send('<h1>Hello World!</h1>')
})

app.get('/produtos', function(req, res) {
    res.send('<h1>Hello World!</h1>')
})

app.get('/clientes', function(req, res) {
    res.send('<h1>Hello World!</h1>')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
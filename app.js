const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (_req, res) => res.render('pages/home'))
app.get('/about', (_req, res) => res.render('pages/about'))
app.get('/agenda', (_req, res) => res.render('pages/agenda'))
app.get('/tattoos/:id', (_req, res) => res.render('pages/tattoo'))
app.get('/work', (_req, res) => res.render('pages/work'))

app.listen(port, () =>
  console.log(`🚀 App listening on http://localhost:${port}!`)
)

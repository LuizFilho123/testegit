const express = require('express')
const app = express()

app.get('/', (req,res) => res.status(200).send({message:'Olá Mundo, estou funcionando!!'}))

app.get('/ola', (req,res) => res.status(200).send({message:'Oi , eu sou a rota Olá!'}))

app.listen(3001, err => console.log('Api rodando na porta 3001'))

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use('/tasks', express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/tasks')
})

app.listen(port)
const express = require('express')
const config = require('config')

const app = express()
const PORT = 6666

app.use('/api/tasks', require('./routes/tasks.route.js'))

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
})
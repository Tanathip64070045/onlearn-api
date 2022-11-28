const express = require('express')
const cors = require('cors')
const app = express()
const mysql = require('mysql2')

require('dotenv').config()



app.use(cors())
const connection = mysql.createConnection(process.env.DATABASE_URL)

app.get('/', (req, res) => { 
    res.send("hello world!!")
})

app.get('/attractions', (req, res) => {
    connection.query(
        'SELECT * FROM attractions',
        function (err,results, fields) {
            res.send(results)
        }
    )
})

app.listen(process.env.PORT || 3000)
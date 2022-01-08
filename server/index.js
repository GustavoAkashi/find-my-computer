const express = require('express')
const app = express()
const cors = require("cors")
const pool = require('./db')

app.use(cors());
app.use(express.json())

app.get('/results', async (req, res) => {
    try {
        const results = await pool.query("SELECT * from computadores")
        res.json(results.rows)
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(5000, () => {
    console.log("Server has started on port 5000")
})
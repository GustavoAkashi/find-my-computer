const express = require('express')
const app = express()
const cors = require("cors")
const pool = require('./db')

app.use(cors());
app.use(express.json())

app.get('/results', async (req, res) => {
    try {
        const parameters = req.query
        const searchTerm = JSON.parse(parameters.searchTerm)
        console.log(searchTerm)
        const table = parameters.table
        var results;
        if (table == 'computadores') {
            results = await pool.query(
                "SELECT computer_name,ram_name,video_name,motherboard_name,processor_name,storage_name,price,computer_image FROM computadores WHERE 1=1 AND ram_rate >= $1 AND price <= $2 AND video_rate >= $3 AND processor_rate >= $4 AND storage_type <= $5 AND storage_rate >= $6"
                , [searchTerm.ram, searchTerm.budget, searchTerm.video, searchTerm.processador, searchTerm.tipo_armazenamento, searchTerm.qnt_armazenamento]
            )
        } else {
            results = await pool.query(
                "SELECT computer_name,ram_name,video_name,motherboard_name,processor_name,storage_name,price,computer_image FROM notebook WHERE 1=1 AND ram_rate >= $1 AND price <= $2 AND video_rate >= $3 AND processor_rate >= $4 AND storage_type <= $5 AND storage_rate >= $6"
                , [searchTerm.ram, searchTerm.budget, searchTerm.video, searchTerm.processador, searchTerm.tipo_armazenamento, searchTerm.qnt_armazenamento]
            )
        }

        res.json(results.rows)
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(5000, () => {
    console.log("Server has started on port 5000")
})
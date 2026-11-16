import express from "express"
import cors from "cors"
import mysql2 from "mysql2"
import "dotenv/config"

app.express()
app.use(express.json())
app.use(cors())

const sql = mysql2.createPool({
    host: process.env.HOST_BANCO,
    user: process.env.USUARIO_BANCO,
    password: process.env.SENHA_BANCO,
    database: process.env.NOME_BANCO
})
app.get("/", (request, response) => { 
    "SELECT * FROM musicas_seunome"
    sql.query(comandoSelect, (error, data) => { })
})
app.listen(3000, () => {
    console.log("Servidor online!")
})
sql.query(comandoSelect, (error, data) => { })

export default app

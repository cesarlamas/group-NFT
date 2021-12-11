const express = require("express")
const cors = require("cors")
const router = require("./router")
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(router)

if (process.env.NODE_ENV === "production")

app.listen(PORT, () => {
    console.log("App is listening on Port 3001")
})
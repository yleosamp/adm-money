import express from "express"
import cors from "cors"
import router from "./router"
import { addTable, db } from "./model/db"
require("dotenv").config()
const app = express()

// Default Middlewares
app.use(cors())
app.use(express.json())

// Router Middleware
app.use("/api/", router)

// Start Server
const port = process.env.SERVER_PORT!
app.listen(port, async () => {
  await db.connect(() => console.log(`Database connected (PostgreSQL)`))
  await addTable()
  console.log(`Server listening on port ${port}.`)
})
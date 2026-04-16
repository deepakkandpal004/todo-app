import express, { Application } from "express"
import cors from "cors"
import todoRoutes from "./routes/todoRoutes"

const app: Application = express()

app.use(cors())
app.use(express.json())

app.use("/api/todos", todoRoutes)

export default app;
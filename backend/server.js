import express from "express"
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors"
import todoRoutes from "./routes/todoRoutes.js"
import errorMiddleware from "./middlewares/errorMiddleware.js";

dotenv.config(); 
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

connectDB();

app.use(cors());

app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("Todo API is running");
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
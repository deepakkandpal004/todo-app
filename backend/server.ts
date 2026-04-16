import express, { Application, Request, Response } from "express"
import connectDB from "./config/db";
import dotenv from "dotenv";
import cors from "cors"
import todoRoutes from "./routes/todoRoutes"
import errorMiddleware from "./middlewares/errorMiddleware";

dotenv.config(); 
const app: Application = express();

const PORT: number = Number(process.env.PORT) || 8000;

app.use(cors());

app.use(express.json());

app.use("/api/todos", todoRoutes);

app.get("/", (req: Request, res: Response): void => {
  res.send("Todo API is running");
});

app.use(errorMiddleware);

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();